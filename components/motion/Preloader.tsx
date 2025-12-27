'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLoader } from '@/context/LoaderContext';

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const { setIsLoaded } = useLoader();

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsLoaded(true)
        });

        tl.to(textRef.current, {
            opacity: 1,
            duration: 1,
            delay: 0.5,
            y: 0,
            ease: "expo.out"
        })
            .to(textRef.current, {
                opacity: 0,
                duration: 1,
                delay: 1,
                y: -20,
                ease: "expo.in"
            })
            .to(containerRef.current, {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                duration: 1.5,
                ease: "expo.inOut"
            }, "-=0.2")
            .set(containerRef.current, { display: "none" });
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white text-black"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        >
            <div
                ref={textRef}
                className="text-2xl font-bold uppercase tracking-widest opacity-0 translate-y-5"
            >
                Ifeanyi Lucky — ©2025
            </div>
        </div>
    );
}
