'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useLenis } from 'lenis/react';
import { useLoader } from '@/context/LoaderContext';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const metaRef = useRef<HTMLDivElement>(null);

    const lenis = useLenis();
    const { isLoaded } = useLoader();

    useLayoutEffect(() => {
        if (!isLoaded) return;

        let ctx = gsap.context(() => {
            const splitTitle = new SplitType(titleRef.current!, { types: 'chars,words' });
            const splitSubtitle = new SplitType(subtitleRef.current!, { types: 'lines,words' });

            const tl = gsap.timeline({ delay: 0.5 }); // Small delay after loader is gone

            tl.from(splitTitle.chars, {
                y: 100,
                opacity: 0,
                rotateX: -90,
                stagger: 0.02,
                duration: 1.5,
                ease: "expo.out",
            })
                .from(splitSubtitle.lines, {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                }, "-=1")
                .from(metaRef.current!.querySelectorAll('.meta-item'), {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.8")
                .from(".hero-cta", {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.5");

            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: 150,
                opacity: 0,
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isLoaded]);

    const scrollToSection = (id: string) => {
        if (lenis) {
            lenis.scrollTo(id, { offset: 0, duration: 1.5 });
        } else {
            document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={containerRef} data-theme="dark" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden pt-32 pb-20 md:pt-20">
            {/* Top Meta Bar */}
            <div ref={metaRef} className="absolute top-10 left-6 right-6 lg:left-20 lg:right-20 flex flex-row justify-between items-start text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-secondary z-20">
                <div className="meta-item flex flex-col gap-1">
                    <span>Based in Lagos, Nigeria</span>
                    <span>9.9322° N, 3.3792° E</span>
                </div>
                <div className="meta-item flex flex-col items-end gap-1 text-right">
                    <span className="text-accent">Available for select projects</span>
                    <span>©2025 Folio V2</span>
                </div>
            </div>

            <div className="container relative z-10 p-0">
                <div className="max-w-7xl">
                    <div className="mb-4 overflow-hidden">
                        <span className="inline-block text-accent text-xs md:text-sm uppercase tracking-widest font-bold translate-y-full animate-reveal">
                            Creative Developer & Architect
                        </span>
                    </div>

                    <h1 ref={titleRef} className="text-h1 font-black mb-8 md:mb-10 leading-[0.85] -ml-1 uppercase">
                        DIGITAL <br />
                        ALCHEMY <br />
                        & CRAFT.
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div className="flex flex-col gap-6">
                            <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-secondary leading-relaxed max-w-xl">
                                Blending technical precision with creative intuition to build
                                immersive digital worlds. Specializing in high-performance
                                full-stack architectures and high-end motion design.
                            </p>
                        </div>

                        <div className="hero-cta flex flex-wrap gap-4 lg:justify-end">
                            <Link
                                href="/projects"
                                className="group relative px-8 md:px-10 py-4 md:py-5 bg-(--text-color) text-(--bg-color) font-bold uppercase text-xs md:text-sm tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
                            >
                                <span className="relative z-10 transition-colors group-hover:text-accent">View all projects</span>
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </Link>
                            <button
                                onClick={() => scrollToSection('#narrative')}
                                className="px-8 md:px-10 py-4 md:py-5 border border-(--text-color)/20 font-bold uppercase text-xs md:text-sm tracking-widest hover:border-(--text-color) hover:bg-(--text-color)/5 transition-all w-full sm:w-auto text-center"
                            >
                                The Story
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Text Overlay - intentional depth */}
            <div className="absolute bottom-[-5%] right-[-5%] text-[25vw] md:text-[20vw] font-black text-(--text-color) opacity-[0.02] pointer-events-none whitespace-nowrap select-none leading-none">
                IFEANYI
            </div>

            {/* Dynamic Background Noise/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-bg" />
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-1/2 aspect-square bg-accent/15 blur-[160px] rounded-full -z-10 animate-pulse-slow" />
        </section>
    );
}
