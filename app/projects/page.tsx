'use client';

import { projects } from '@/context/projects';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

export default function ProjectsPage() {
    const listRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();

    // Use 3 sets for seamless looping: [Set A, Set B, Set C]
    // We start at Set B. 
    // If we scroll down into Set C, jump back to Set B.
    // If we scroll up into Set A, jump forward to Set B.
    const infiniteProjects = [...projects, ...projects, ...projects];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const list = listRef.current;
            if (!list) return;

            // Calculate the height of one full set of projects
            // We can't just use list.offsetHeight / 3 because items have different offsets/margins
            // So we'll find the distance between corresponding items in Set A and Set B
            const items = list.querySelectorAll('.project-item');
            const itemsPerSet = projects.length;

            if (items.length < itemsPerSet * 2) return;

            const firstItem = items[0] as HTMLElement;
            const correspondingItem = items[itemsPerSet] as HTMLElement;
            const loopDistance = correspondingItem.offsetTop - firstItem.offsetTop;

            // Initial position: Start at the beginning of the second set
            if (lenis) {
                lenis.scrollTo(loopDistance, { immediate: true });
            } else {
                window.scrollTo(0, loopDistance);
            }

            // Loop Logic: Watch the scroll position and teleport
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const scroll = self.scroll();

                    // If we scroll below the end of Set B, teleport back to the corresponding spot in Set B
                    if (scroll >= loopDistance * 2) {
                        lenis?.scrollTo(scroll - loopDistance, { immediate: true });
                    }
                    // If we scroll above the start of Set B, teleport forward to the corresponding spot in Set B
                    else if (scroll <= loopDistance - 100) { // Slight buffer
                        lenis?.scrollTo(scroll + loopDistance, { immediate: true });
                    }
                }
            });

            // Entrance Animations
            gsap.from(".fixed-meta", {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 1.5,
                ease: "expo.out",
                delay: 0.5
            });

            gsap.from(".archive-fixed", {
                scale: 0.8,
                opacity: 0,
                duration: 2,
                ease: "expo.out"
            });

            // Reveal grid lines
            gsap.from(".grid-line", {
                scaleY: 0,
                transformOrigin: "top",
                stagger: 0.05,
                duration: 1.5,
                ease: "power4.out"
            });
        });

        return () => ctx.revert();
    }, [lenis]);

    return (
        <div ref={containerRef} className="relative min-h-[300vh] bg-(--bg-color) text-(--text-color) overflow-x-hidden" data-theme="dark">

            {/* Background Grid Lines */}
            <div className="fixed inset-0 flex justify-between px-6 md:px-12 lg:px-20 pointer-events-none z-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="grid-line w-px h-full bg-(--text-color)/50" />
                ))}
            </div>

            {/* Huge Vertical FIXED Text "PROJECT" */}
            <div className="archive-fixed fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex flex-col items-center">
                <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-none select-none opacity-90">
                    Project
                </h1>
                <p className="text-[10px] uppercase tracking-[0.5em] mt-4 opacity-40 font-bold">
                    Discover My Work
                </p>
            </div>

            {/* Vertical Infinite Projects Scroller */}
            <div className="relative z-10 flex justify-center py-[20vh] w-full">
                <div ref={listRef} className="flex flex-col gap-32 md:gap-48 w-full px-6 md:px-0">
                    {infiniteProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="project-item group flex flex-col md:flex-row items-center gap-10 md:gap-20 w-fit mx-auto md:odd:ml-[10vw] md:even:mr-[10vw]"
                        >
                            <div className="relative w-[85vw] md:w-[45vw] lg:w-[32vw] aspect-16/10 cursor-pointer overflow-hidden rounded-sm group-hover:rounded-2xl transition-all duration-700 ease-expo shadow-2xl">
                                <img
                                    src={project.cover}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[1.5s] ease-expo"
                                />
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Hover Meta */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
                                    <span className="text-[10px] font-black text-black bg-accent px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-xl">
                                        Exploration
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 max-w-[350px] md:max-w-[250px] lg:max-w-[300px]">
                                <div className="flex items-center gap-4">
                                    <span className="text-accent font-mono text-xs font-bold">0{project.id}</span>
                                    <div className="h-px w-8 bg-accent/30" />
                                </div>
                                <h2 className="text-3xl md:text-2xl lg:text-4xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-[10px] md:text-[9px] uppercase tracking-widest leading-loose opacity-40 group-hover:opacity-100 transition-all duration-500">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Texture/Noise */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] noise-bg z-[100]" />
        </div>
    );
}
