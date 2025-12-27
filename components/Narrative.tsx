'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Narrative() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (!textRef.current) return;
            gsap.from(textRef.current.children, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: "power4.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="narrative" ref={sectionRef} data-theme="dark" className="narrative-section section px-6 md:px-12 lg:px-20 bg-transparent">
            <div className="container p-0 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    <div className="flex-1">
                        <h2 className="text-secondary text-xs md:text-sm uppercase tracking-[0.2em] mb-10 border-l border-accent pl-4">01 — Philosophy</h2>
                        <div ref={textRef} className="flex flex-col gap-10">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight max-w-4xl">
                                I believe digital experiences should be <span className="text-accent italic">felt</span>, not just seen.
                            </h3>
                            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
                                As a senior full-stack developer, I bridge the gap between complex logic and fluid design.
                                My approach combine's the structural integrity of Node.js and Python with the expressive motion
                                of GSAP and Three.js. No scroll is left to chance; no pixel is left uncrafted.
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-(--text-color)/10 mt-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-accent font-bold text-2xl md:text-3xl">6+</span>
                                    <span className="text-[10px] uppercase tracking-widest text-secondary font-medium">Years of Craft</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-accent font-bold text-2xl md:text-3xl">40+</span>
                                    <span className="text-[10px] uppercase tracking-widest text-secondary font-medium">Success Launches</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-accent font-bold text-2xl md:text-3xl">SaaS</span>
                                    <span className="text-[10px] uppercase tracking-widest text-secondary font-medium">Specialization</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-accent font-bold text-2xl md:text-3xl">Motion</span>
                                    <span className="text-[10px] uppercase tracking-widest text-secondary font-medium">Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Image/Visual Element Placeholder */}
                    <div className="flex flex-col lg:items-end justify-center lg:w-1/3">
                        <div className="w-full aspect-3/4 sm:aspect-square lg:aspect-3/4 bg-(--text-color)/5 rounded-2xl relative overflow-hidden group border border-(--text-color)/10">
                            <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-10 text-center">
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-30 leading-loose">
                                    Code as Art <br /> Process as Narrative <br /> Design as Strategy
                                </span>
                            </div>

                            {/* Decorative lines to add detail */}
                            <div className="absolute top-0 left-0 w-full h-px bg-(--text-color)/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            <div className="absolute bottom-0 right-0 w-full h-px bg-(--text-color)/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
