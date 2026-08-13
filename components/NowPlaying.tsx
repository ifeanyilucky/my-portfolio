'use client';

import { useEffect, useState } from "react";

type Track = {
    isPlaying: boolean;
    title: string;
    artist: string;
    cover: string;
    url: string;
};

export default function NowPlaying() {
    const [track, setTrack] = useState<Track | null>(null);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const res = await fetch("/api/now-playing");
                if (!res.ok) return;
                const data = await res.json();
                setTrack(data);
            } catch {
                // ignore
            }
        };

        fetchTrack();
        const interval = setInterval(fetchTrack, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-4 rounded-xl border border-[#242422] bg-[#131311] px-6 py-5">
            {track?.isPlaying ? (
                <>
                    {track.cover && (
                        <img
                            src={track.cover}
                            alt=""
                            className="h-12 w-12 shrink-0 rounded-lg object-cover"
                        />
                    )}
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-[#8FD14F] opacity-60 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8FD14F]" />
                            </span>
                            <span className="text-[11px] tracking-[0.15em] uppercase text-[#5E5D59]">
                                Now playing
                            </span>
                        </div>
                        <a
                            href={track.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[15px] text-[#EFECE3] truncate hover:underline"
                        >
                            {track.title}
                        </a>
                        <span className="block text-[13px] text-[#8B8A85] truncate">
                            {track.artist}
                        </span>
                    </div>
                </>
            ) : (
                <span className="text-[15px] text-[#8B8A85]">
                    Not listening to anything right now.
                </span>
            )}
        </div>
    );
}