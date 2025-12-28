'use client';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { projects } from '@/context/projects';
import Link from 'next/link';
import gsap from 'gsap';
import { playSound } from '@/utils/sounds';

export default function ProjectSelection() {
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const moveCursor = (e: MouseEvent) => {
                if (!cursorRef.current || isMobile) return;
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.6,
                    ease: "power2.out"
                });
            };

            if (!isMobile) {
                window.addEventListener('mousemove', moveCursor);
            }

            // Reveal items on scroll
            gsap.from(".project-row", {
                scrollTrigger: {
                    trigger: ".projects-section",
                    start: "top 60%",
                },
                y: 40,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            });

            return () => window.removeEventListener('mousemove', moveCursor);
        }, containerRef);

        return () => ctx.revert();
    }, [isMobile]);

    const handleProjectClick = (id: number) => {
        playSound('click');
        // Handle navigation or detail view
    };

    return (
        <section id="projects" ref={containerRef} data-theme="light" className="projects-section section py-20 md:py-32 px-6 md:px-12 lg:px-20 transition-colors duration-700">
            <div className="container p-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 border-b border-(--text-color)/10 pb-10">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-secondary text-xs md:text-sm uppercase tracking-[0.2em] mb-4 border-l border-accent pl-4">02 — Selection</h2>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">Case Studies</h3>
                    </div>
                    <p className="text-secondary text-left md:text-right max-w-[240px] text-[10px] md:text-xs uppercase tracking-[0.2em] leading-loose opacity-60">
                        A curated deep-dive into digital <br className="hidden md:block" /> storytelling and engineered <br className="hidden md:block" /> experiences.
                    </p>
                </div>

                <div className="flex flex-col border-t border-(--text-color)/10">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-row group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 md:py-16 border-b border-(--text-color)/10 transition-all duration-500 hover:lg:px-10 cursor-pointer overflow-hidden z-10"
                            onMouseEnter={() => {
                                if (!isMobile) {
                                    setActiveImage(project.cover);
                                    playSound('hover');
                                }
                            }}
                            onMouseLeave={() => !isMobile && setActiveImage(null)}
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <div className="flex items-start gap-4 md:gap-8 lg:gap-12 relative z-10">
                                <span className="text-secondary font-mono text-[10px] mt-2 md:mt-3">0{index + 1}</span>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase transition-all duration-500 group-hover:text-accent group-hover:italic tracking-tight">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {project.type.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-[8px] md:text-[10px] uppercase border border-(--text-color)/20 px-2 py-0.5 rounded-full opacity-50 group-hover:opacity-100 group-hover:border-accent group-hover:text-accent transition-all">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:mt-0 flex flex-col lg:items-end gap-6 relative z-10 w-full lg:w-auto">
                                <p className="text-secondary text-sm md:text-base lg:text-sm max-w-[450px] lg:max-w-[300px] lg:text-right group-hover:text-(--text-color) transition-colors leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto">
                                    <div className="flex flex-col lg:items-end">
                                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Timeline</span>
                                        <span className="text-[10px] md:text-xs uppercase tracking-tighter text-accent">{project.year}</span>
                                    </div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-(--text-color)/20 flex items-center justify-center group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-500 group-hover:scale-110">
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Image Preview (shown inside row for mobile) */}
                            <div className="lg:hidden mt-8 w-full aspect-video overflow-hidden rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500 border border-(--text-color)/5">
                                <img
                                    src={project.cover}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Decorative lines to add detail */}
                                <div className="absolute top-0 left-0 w-full h-px bg-(--text-color)/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                <div className="absolute bottom-0 right-0 w-full h-px bg-(--text-color)/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
                            </div>

                            {/* Hover Grain/Texture effect */}
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        </div>
                    ))}
                </div>

                <div className="mt-10 md:mt-20 flex justify-center relative z-20">
                    <Link
                        href="/projects"
                        onMouseEnter={() => playSound('hover')}
                        onClick={() => playSound('click')}
                        className="text-secondary hover:text-accent uppercase text-[10px] md:text-xs tracking-[0.4em] font-bold py-8 md:py-12 transition-all hover:scale-110 active:scale-90"
                    >
                        [ Load More Archives ]
                    </Link>
                </div>
            </div>

            {/* Floating Image Preview (Desktop Only) */}
            {!isMobile && (
                <div
                    ref={cursorRef}
                    className={`fixed top-0 left-0 w-[450px] aspect-16/10 pointer-events-none z-50 overflow-hidden rounded-xl transition-all duration-500 ease-out border border-white/10 ${activeImage ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-90 rotate-0'}`}
                    style={{ boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)' }}
                >
                    {activeImage && (
                        <img
                            src={activeImage}
                            alt="Preview"
                            className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                        />
                    )}
                </div>
            )}
        </section>
    );
}
