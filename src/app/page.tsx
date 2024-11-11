"use client";

import { ThemeToggle } from "@/components/globals/ThemeToggle";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <div className="bg-black text-white h-screen w-screen flex justify-center items-center">
            <Card className="max-w-[700px] w-full">
                <CardHeader>
                    <div className="flex justify-between w-full">
                        <div>
                            <CardTitle className="text-2xl">UncensoredGPT</CardTitle>
                            <CardDescription className="max-w-[350px] text-xs pt-1.5">
                                A powerful GPT that can answer to any question
                                without the limits of traditional AI models
                            </CardDescription>
                        </div>
                        <ThemeToggle />
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}
