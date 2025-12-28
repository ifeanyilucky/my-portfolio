'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from '@/components/Typewriter';
import { playSound } from '@/utils/sounds';

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-title", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "expo.out",
                stagger: 0.1
            });

            gsap.from(".about-content", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "expo.out",
                delay: 0.5,
                stagger: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1 className="about-title text-[15vw] md:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter mb-10">
                        About <br /> <span className="text-secondary opacity-50">Ifeanyi.</span>
                    </h1>
                </div>

                <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="about-content space-y-10">
                        <div className="bg-accent/5 p-8 border border-accent/10 rounded-2xl">
                            <Typewriter
                                text="I build apps and websites that people love to use. I focus on making things fast, simple, and beautiful."
                                speed={40}
                                delay={1000}
                                className="text-xl md:text-2xl text-accent font-medium leading-relaxed"
                            />
                        </div>

                        <p className="text-lg text-secondary leading-relaxed">
                            I have over 6 years of experience building software for all kinds of businesses. I love using modern tools like React and Node.js to create great user experiences that just work.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-[0.3em] text-accent font-bold">What I use</h3>
                            <div className="flex flex-wrap gap-4">
                                {['Next.js', 'Typescript', 'Node.js', 'Python', 'GSAP', 'Three.js', 'AWS', 'Docker'].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest hover:bg-accent hover:text-black transition-all cursor-default" onMouseEnter={() => playSound('hover')}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-content space-y-12">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold uppercase">Simple is better.</h2>
                            <p className="text-secondary">I believe that the best products are easy to understand and use.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 border border-white/5 rounded-xl hover:border-accent/30 transition-colors">
                                <span className="text-accent font-black text-2xl mb-2 block">01</span>
                                <h4 className="font-bold uppercase tracking-widest mb-3">Talk</h4>
                                <p className="text-xs text-secondary leading-loose">We chat about your ideas and what you want to achieve.</p>
                            </div>
                            <div className="p-6 border border-white/5 rounded-xl hover:border-accent/30 transition-colors">
                                <span className="text-accent font-black text-2xl mb-2 block">02</span>
                                <h4 className="font-bold uppercase tracking-widest mb-3">Plan</h4>
                                <p className="text-xs text-secondary leading-loose">I design a solid plan to make sure everything works perfectly.</p>
                            </div>
                            <div className="p-6 border border-white/5 rounded-xl hover:border-accent/30 transition-colors">
                                <span className="text-accent font-black text-2xl mb-2 block">03</span>
                                <h4 className="font-bold uppercase tracking-widest mb-3">Build</h4>
                                <p className="text-xs text-secondary leading-loose">I turn the plan into code and make it look great.</p>
                            </div>
                            <div className="p-6 border border-white/5 rounded-xl hover:border-accent/30 transition-colors">
                                <span className="text-accent font-black text-2xl mb-2 block">04</span>
                                <h4 className="font-bold uppercase tracking-widest mb-3">Launch</h4>
                                <p className="text-xs text-secondary leading-loose">We put your project live for the world to see.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-20 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none">Let's work <br /> <span className="text-accent">together.</span></h2>
                            <a href="mailto:ifeanyilucky360@gmail.com" className="text-xl md:text-2xl font-bold underline underline-offset-8 hover:text-accent transition-colors">
                                ifeanyilucky360@gmail.com
                            </a>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.5em] text-secondary opacity-30 text-right">
                            LAGOS, NIGERIA <br /> — WORLDWIDE 🌏
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
