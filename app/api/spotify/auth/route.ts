import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET(request: NextRequest) {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = `${request.nextUrl.origin}/api/spotify/callback`;

    const params = new URLSearchParams({
        client_id: clientId ?? "",
        response_type: "code",
        redirect_uri: redirectUri,
        scope: "user-read-currently-playing",
    });

    return NextResponse.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
}