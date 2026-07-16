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
            title: "Backend & APIs",
            skills: [
                { name: "Node.js / Express / NestJS", level: "95%" },
                { name: "TypeScript", level: "92%" },
                { name: "MongoDB / PostgreSQL", level: "90%" },
                { name: "Redis / Sessions & Caching", level: "85%" }
            ]
        },
        {
            title: "Cloud & Systems",
            skills: [
                { name: "API Design & Distributed Workflows", level: "90%" },
                { name: "JWT / Rate Limiting / Security", level: "88%" },
                { name: "System Design", level: "85%" },
                { name: "AWS / Docker", level: "82%" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React / Next.js", level: "90%" },
                { name: "Tailwind CSS", level: "88%" },
                { name: "React Native / SwiftUI", level: "80%" },
                { name: "Vue.js", level: "70%" }
            ]
        }
    ];

    return (
        <section ref={sectionRef} data-theme="dark" className="section border-t border-white/5 bg-transparent overflow-hidden">
            <div className="container p-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-secondary text-xs md:text-sm uppercase tracking-[0.2em] mb-4 border-l border-accent pl-4">03 — WHAT I CAN DO</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">THE STACK BEHIND <br /> PRODUCTION SYSTEMS</h3>
                    </div>
                    <p className="text-secondary text-xs md:text-sm uppercase tracking-widest opacity-40 max-w-[200px] leading-loose">
                        Backend-first, comfortable owning a feature end-to-end.
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
                                                data-target={skill.level}
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
