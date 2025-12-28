'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLoader } from '@/context/LoaderContext';

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const { setIsLoaded } = useLoader();

    useEffect(() => {
        const tl = gsap.timeline();

        // Counter animation
        const counter = { val: 0 };
        gsap.to(counter, {
            val: 100,
            duration: 2.5,
            ease: "power4.inOut",
            onUpdate: () => setProgress(Math.floor(counter.val)),
            onComplete: () => {
                // Exit animation
                gsap.timeline({
                    onComplete: () => {
                        setIsLoaded(true);
                    }
                })
                    .to(counterRef.current, {
                        y: -100,
                        opacity: 0,
                        duration: 1,
                        ease: "expo.inOut"
                    })
                    .to(containerRef.current, {
                        y: "-100%",
                        duration: 1.2,
                        ease: "expo.inOut"
                    }, "-=0.5")
                    .set(containerRef.current, { display: "none" });
            }
        });

    }, [setIsLoaded]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0c0c] text-white"
        >
            <div className="relative overflow-hidden">
                <div
                    ref={counterRef}
                    className="text-[15vw] md:text-[10vw] font-black italic tracking-tighter flex items-baseline gap-4"
                >
                    <span className="text-accent">{progress.toString().padStart(3, '0')}</span>
                    <span className="text-2xl md:text-4xl not-italic font-light opacity-20 uppercase tracking-[0.2em]">Percent</span>
                </div>

                <div className="absolute bottom-[-20px] left-0 w-full h-1 bg-white/5">
                    <div
                        className="h-full bg-accent transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
                <div>Ifeanyi Lucky — ©2025</div>
                <div>Creative Engineering</div>
            </div>
        </div>
    );
}
