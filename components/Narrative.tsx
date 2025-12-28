'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from './Typewriter';

export default function Narrative() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (!textRef.current) return;
            gsap.from(".narrative-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: "expo.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="narrative" ref={sectionRef} data-theme="dark" className="narrative-section section bg-transparent overflow-hidden">
            <div className="container p-0">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="flex-1">
                        <h2 className="narrative-item text-secondary text-xs md:text-sm uppercase tracking-[0.3em] mb-12 border-l-2 border-accent pl-6 font-bold">01 — HOW I WORK</h2>
                        <div ref={textRef} className="flex flex-col gap-12">
                            <h3 className="narrative-item text-3xl md:text-5xl lg:text-5xl font-black uppercase leading-[0.9] max-w-4xl tracking-tighter">
                                I make websites <br /> that are easy to <br /> use and <span className="text-accent italic">fun</span> to look at.
                            </h3>

                            <div className="narrative-item bg-white/5 p-8 md:p-10 border border-white/5 rounded-2xl max-w-2xl">
                                <p className="text-lg md:text-xl text-secondary leading-relaxed font-medium">
                                    I'm a senior developer who loves turning ideas into reality.
                                    I focus on building things that work perfectly and make sense to
                                    the <span className="text-white">people</span> using them.
                                </p>
                            </div>

                            <div className="narrative-item grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10 mt-6">
                                {[
                                    { label: "EXPERIENCE", val: "6+ YRS" },
                                    { label: "PROJECTS DONE", val: "40+" },
                                    { label: "MAIN FOCUS", val: "APPS" },
                                    { label: "SKILLSET", val: "FULL" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-3 group px-4 py-2 hover:bg-white/5 rounded-xl transition-all">
                                        <span className="text-accent font-black text-3xl md:text-4xl tracking-tighter group-hover:scale-110 transition-transform origin-left">{stat.val}</span>
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-secondary font-bold leading-none">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="narrative-item w-full lg:w-[400px] aspect-square lg:aspect-4/5 bg-white/5 rounded-3xl relative overflow-hidden group border border-white/5 flex flex-col justify-end p-10">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="relative z-10 space-y-6">
                            <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent animate-spin-slow">
                                ✻
                            </div>
                            <p className="text-xs uppercase tracking-[0.4em] leading-loose opacity-40 font-bold group-hover:opacity-100 transition-opacity duration-700">
                                Code as Art <br /> Process as Narrative <br /> Design as Strategy
                            </p>
                        </div>

                        {/* Animated Grid lines back inside */}
                        <div className="absolute inset-0 pointer-events-none opacity-10">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="absolute h-full w-px bg-white" style={{ left: `${(i + 1) * 16.66}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
