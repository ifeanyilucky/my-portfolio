import { NextRequest } from "next/server";

export const runtime = "nodejs";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

function html(body: string) {
    return new Response(
        `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Spotify setup</title>
<style>
body{font-family:ui-sans-serif,system-ui,sans-serif;max-width:640px;margin:40px auto;background:#0a0a09;color:#efece3;padding:0 20px;line-height:1.6}
h1{font-weight:500;font-size:28px}
textarea{background:#131311;border:1px solid #242422;border-radius:8px;padding:8px;width:100%;box-sizing:border-box;color:#8FD14F;font-size:14px;font-family:ui-monospace,monospace;margin:12px 0}
code{color:#8FD14F}
a{color:#8FD14F}
</style></head><body>${body}</body></html>`,
        { headers: { "Content-Type": "text/html" } }
    );
}

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");
    const error = request.nextUrl.searchParams.get("error");

    if (error) return html(`<h1>Spotify setup</h1><p>Authorization failed: ${error}</p>`);

    if (!code || !CLIENT_ID || !CLIENT_SECRET) {
        return html(
            `<h1>Spotify setup</h1><p>Missing authorization code or environment variables. Set <code>SPOTIFY_CLIENT_ID</code> and <code>SPOTIFY_CLIENT_SECRET</code> in <code>.env.local</code> first, then visit <a href="/api/spotify/auth">/api/spotify/auth</a>.</p>`
        );
    }

    const redirectUri = `${request.nextUrl.origin}/api/spotify/callback`;

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        return html(
            `<h1>Spotify setup</h1><p>Token exchange failed: ${data.error_description ?? data.error ?? "unknown error"}</p>`
        );
    }

    const refresh =
        data.refresh_token ?? "NONE — this code was already used. Authorize again via /api/spotify/auth.";

    return html(
        `<h1>Spotify connected</h1>
<p>Copy the value below into <code>.env.local</code> as <code>SPOTIFY_REFRESH_TOKEN</code>, then restart the dev server.</p>
<textarea readonly rows="3" onclick="this.select()">${refresh}</textarea>
<p><a href="/">Back to site</a></p>`
    );
}