// Fetch all proxies from WEBSHARE

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const apiKey = body.apiKey;

    if (apiKey === undefined || apiKey === null || apiKey === "") {
        return NextResponse.json({ error: "API key is required" }, { status: 400 });
    }

    if (apiKey !== process.env.WEBSHARE_API_KEY) {
        return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    const response = await fetch('https://proxy.webshare.io/api/v2/proxy/list/?mode=direct&page=1&page_size=1000', {
        method: 'GET',
        headers: {
            Authorization: `Token ${apiKey}`
        }
    })

    const data = await response.json();

    return NextResponse.json(data);
}