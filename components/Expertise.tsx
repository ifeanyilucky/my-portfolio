'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Expertise() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.expertise-card');
            cards.forEach((card: any) => {
                const bars = card.querySelectorAll('.expertise-bar');

                gsap.to(bars, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    },
                    scaleX: (i, target) => {
                        const val = target.getAttribute('data-target');
                        return parseInt(val) / 100;
                    },
                    duration: 1.5,
                    ease: "expo.out",
                    stagger: 0.1
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const data = [
        {
            title: "Backend",
            skills: [
                { name: "Node.js / Express", level: "95%" },
                { name: "Python / FastAPI", level: "80%" },
                { name: "MongoDB / PostgreSQL", level: "90%" },
                { name: "Docker / AWS", level: "75%" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React / Next.js", level: "Gold" },
                { name: "SwiftUI / Native", level: "Senior" },
                { name: "Typescript", level: "Strict" },
                { name: "Tailwind / CSS", level: "Fluid" }
            ]
        },
        {
            title: "Animations",
            skills: [
                { name: "GSAP / ScrollTrigger", level: "Master" },
                { name: "Three.js / R3F", level: "Creative" },
                { name: "Framer Motion", level: "Fluid" },
                { name: "WebGL Shaders", level: "Study" }
            ]
        }
    ];

    return (
        <section ref={sectionRef} data-theme="dark" className="section px-6 md:px-12 lg:px-20 border-t border-white/5 bg-transparent overflow-hidden">
            <div className="container p-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-secondary text-xs md:text-sm uppercase tracking-[0.2em] mb-4 border-l border-accent pl-4">02 — WHAT I CAN DO</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">I HAVE THE <br /> SKILLS YOU NEED</h3>
                    </div>
                    <p className="text-secondary text-xs md:text-sm uppercase tracking-widest opacity-40 max-w-[200px] leading-loose">
                        I build things that work well and grow with you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {data.map((category, idx) => (
                        <div key={idx} className="expertise-card group p-8 md:p-10 border border-white/5 rounded-3xl hover:bg-white/5 transition-all duration-700 hover:border-accent/20">
                            <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-accent mb-10 flex items-center justify-between">
                                {category.title}
                                <span className="w-10 h-px bg-accent/20"></span>
                            </h4>
                            <ul className="space-y-8">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex flex-col gap-2 group/item">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm md:text-base font-medium text-secondary group-hover/item:text-white transition-colors">{skill.name}</span>
                                            <span className="text-[10px] font-mono text-accent/50 group-hover/item:text-accent uppercase tracking-tighter">{skill.level}</span>
                                        </div>
                                        <div className="h-px w-full bg-white/5 relative overflow-hidden">
                                            <div
                                                className="expertise-bar absolute inset-0 bg-accent/40 origin-left"
                                                style={{ transform: 'scaleX(0)' }}
                                                data-target={skill.level.includes('%') ? skill.level : (skill.level === 'Gold' || skill.level === 'Master' ? '100%' : '85%')}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
