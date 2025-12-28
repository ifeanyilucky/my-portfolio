'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLoader } from '@/context/LoaderContext';
import { preloadSounds } from '@/utils/sounds';

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const { setIsLoaded } = useLoader();

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            const counter = { val: 0 };

            // Start loading sounds in parallel, don't block animation start
            const loadSounds = async () => {
                try {
                    await preloadSounds();
                } catch (e) {
                    // ignore
                }
            };
            const soundsPromise = loadSounds();

            // 1. Force Counter Animation (Must run)
            tl.to(counter, {
                val: 100,
                duration: 2.0, // Slightly faster
                ease: "power4.inOut",
                onUpdate: () => setProgress(Math.floor(counter.val)),
            });

            // 2. Wait for sounds at the END of the timeline
            tl.call(() => {
                const finish = async () => {
                    try {
                        // Wait for sounds, but max out at 1s extra to prevent hanging
                        await Promise.race([
                            soundsPromise,
                            new Promise(r => setTimeout(r, 1000))
                        ]);
                    } catch (e) { }

                    // 3. Exit Sequence
                    gsap.timeline({
                        onComplete: () => setIsLoaded(true)
                    })
                        .to(counterRef.current, {
                            y: -10,
                            opacity: 0,
                            duration: 0.8,
                            ease: "power3.inOut"
                        })
                        .to(containerRef.current, {
                            y: "-100%",
                            duration: 1.0,
                            ease: "power3.inOut"
                        }, "-=0.4")
                        .set(containerRef.current, { display: "none" });
                };
                finish();
            });

        }, containerRef);

        return () => ctx.revert();
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
