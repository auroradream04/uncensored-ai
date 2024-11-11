"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/globals/ThemeToggle";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import Suspense from "@/components/globals/Suspense";

export default function Home() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default form submission
        e.preventDefault();

        // Set the loading state
        setLoading(true);

        // Fetch the response from the API
        const response = await fetch("/api/generate", {
            method: "POST",
            body: JSON.stringify({ prompt: input }),
        });

        const {generated_text, error} = await response.json();

        if (error) {
            console.error(error.message);
            return;
        }

        console.log(generated_text);

        // Set the response
        setResponse(generated_text);

        // Set the loading state
        setLoading(false);
    };

    return (
        <div className="bg-black text-white h-screen w-screen flex justify-center items-center">
            <Card className="max-w-[700px] w-full">
                <CardHeader>
                    <div className="flex justify-between w-full">
                        <div>
                            <CardTitle className="text-2xl">
                                UncensoredGPT
                            </CardTitle>
                            <CardDescription className="max-w-[350px] text-xs pt-1.5">
                                A powerful GPT that can answer to any question
                                without the limits of traditional AI models
                            </CardDescription>
                        </div>
                        <ThemeToggle />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleSubmit}
                        >
                            <Textarea
                                placeholder="Ask anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <Button className="w-full" disabled={loading}>
                                {loading ? "Generating..." : "Generate"}
                            </Button>
                        </form>
                        {(response !== "" && response !== undefined && response !== null) && 
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Response</p>
                            {
                                loading ? <Suspense/> :
                            <div className="bg-white/10 p-4 rounded-md result-container">
                                <ReactMarkdown>{response}</ReactMarkdown>
                            </div>
                            }
                        </div>}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
