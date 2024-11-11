import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/globals/ThemeProvider";
import { Toaster } from "@/components/ui/sonner"
import { Fragment } from 'react'
import Plausible from "@/components/globals/Plausible";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "UncensoredGPT - Made with ❤️ by Aurora",
    description: "A powerful GPT that can answer to any question without the limits of traditional AI models",
    keywords: "uncensored, gpt, ai, chatbot, chat, ai chat, uncensored ai, uncensored gpt, uncensored chatbot, uncensored chat, uncensored ai chat",
    openGraph: {
        title: "UncensoredGPT",
        description: "A powerful GPT that can answer to any question without the limits of traditional AI models",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.className} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <Fragment>
                        {children}
                        <Toaster/>
                    </Fragment>
                </ThemeProvider>
                <Plausible />
            </body>
        </html>
    );
}
