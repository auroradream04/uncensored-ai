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
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdRestartAlt } from "react-icons/md";

export default function Home() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
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
        setResponse(generated_text.replace("assistant\n", ""));

        // Set the loading state
        setLoading(false);
    };

    const handleCopy = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText(response).then(() => {
            toast.success('Copied to clipboard! 📋', {
                description: 'You can flex that result wherever you want, fam! ✨💅'
            });
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        }); 
    };

    const buttonCss = "p-1.5 disabled:cursor-not-allowed transition disabled:text-[rgb(130,130,130)] text-white bg-zinc-800 disabled:bg-zinc-900 rounded-md"

    return (
        <div className="bg-black text-white h-screen w-screen flex justify-center items-center">
            <Card className="max-w-[700px] w-full">
                <CardHeader>
                    <div className="flex justify-between w-full">
                        <div>
                            <CardTitle className="text-2xl">
                                😳 UncensoredGPT 👾
                            </CardTitle>
                            <CardDescription className="max-w-[300px] text-xs pt-1.5">
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
                            <p className="text-xs font-medium">Generate a response</p>
                            <Textarea
                                placeholder="Ask anything... like anything at all😳"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <Button className="w-full flex items-center justify-center gap-1" disabled={loading}>
                                <HiOutlineSparkles />
                                {loading ? "Generating..." : "Generate"}
                            </Button>
                        </form>
                        {(response !== "" && response !== undefined && response !== null) && 
                        <div className="flex flex-col gap-2">
                            <p className="text-xs font-medium">Response</p>
                            {
                                loading ? <Suspense/> :
                                <>
                            <div className="bg-white/10 p-4 rounded-md result-container">
                                <ReactMarkdown>{response}</ReactMarkdown>
                            </div>
                            <div className="flex items-center">
                                <button onClick={handleCopy} className={`${buttonCss} mr-1`}>
                                    <IoCopyOutline size={14} className="-scale-x-100" />
                                </button>
                                <button onClick={(e) => handleSubmit(e)} disabled={loading} type="reset" className={`${buttonCss}`}>
                                    <MdRestartAlt size={14} className="" />
                                </button>
                            </div>
                            </>
                            }
                        </div>}
                    </div> 
                </CardContent>
            </Card>
        </div>
    );
}
