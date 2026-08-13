import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string | null> {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) return null;

    if (cachedToken && cachedToken.expiresAt > Date.now()) return cachedToken.value;

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN,
        }),
        next: { revalidate: 0 },
    });

    if (!response.ok) return null;

    const data = await response.json();
    cachedToken = {
        value: data.access_token,
        expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
    };

    return cachedToken.value;
}

export async function GET() {
    const token = await getAccessToken();
    if (!token) return NextResponse.json({ isPlaying: false });

    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 0 },
    });

    // 204: nothing currently playing
    if (response.status === 204 || !response.ok) {
        return NextResponse.json({ isPlaying: false });
    }

    const data = await response.json();

    if (!data.item) return NextResponse.json({ isPlaying: false });

    return NextResponse.json({
        isPlaying: !!data.is_playing,
        title: data.item.name,
        artist: data.item.artists?.map((artist: { name: string }) => artist.name).join(", "),
        cover: data.item.album?.images?.[0]?.url ?? null,
        url: data.item.external_urls?.spotify ?? null,
    });
}