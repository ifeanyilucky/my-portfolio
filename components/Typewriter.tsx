'use client';

import { useState, useEffect, useRef } from 'react';
import { playSound } from '@/utils/sounds';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
}

export default function Typewriter({ text, speed = 50, delay = 0, className = "" }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [start, setStart] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStart(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!start) return;

        // Start typing sound if not already playing
        if (!audioRef.current && index < text.length) {
            const audio = playSound('typing', 0.05);
            if (audio) {
                audio.loop = true;
                audioRef.current = audio;
            }
        }

        // Stop typing sound if finished
        if (index >= text.length && audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }

        if (index >= text.length) return;

        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
        }, speed);

        return () => {
            clearTimeout(timeout);
        };
    }, [index, text, speed, start]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {displayedText}
            <span className="animate-pulse border-r-2 border-accent ml-1" />
        </div>
    );
}
