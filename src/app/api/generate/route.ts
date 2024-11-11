import { NextResponse } from "next/server";
import { Client } from "@gradio/client";

// Define the type for the request body
interface GenerateRequest {
  prompt: string;
  systemPrompt?: string;
}

// Cache the client instance
let client: any = null;

async function getClient() {
    if (!client) {
        client = await Client.connect("vrkforever/Chat-Llama-3.2-3B-Instruct-uncensored", {
            hf_token: process.env.HUGGINGFACE_API_KEY as `hf_${string}`
        });
    }
    return client;
}

export async function POST(req: Request) {
    try {
        const body = await req.json() as GenerateRequest;
        
        if (!body.prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const gradioClient = await getClient();

        // Use Gradio client to generate text
        const result = await gradioClient.predict("/chat", [
            body.prompt,                    // message
            body.systemPrompt || "Do not start the response with 'assistant' or 'user'. Just be direct",         // system_prompt
            1024,                           // max_new_tokens
            0.7,                           // temperature
        ]);

        return NextResponse.json({ 
            generated_text: result.data[0],
            status: 'success'
        });

    } catch (error: any) {
        console.error('Generation error:', error);
        
        // Handle specific error for model loading
        if (error.message?.includes('loading') || error.message?.includes('starting')) {
            return NextResponse.json(
                { 
                    error: "Model is currently loading. Please try again in a few minutes.",
                    status: 'loading'
                },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { 
                error: "Failed to generate text. Please try again later.",
                status: 'error'
            },
            { status: 500 }
        );
    }
}
