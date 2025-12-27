'use client';

import { projects } from '@/context/projects';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-(--bg-color) text-(--text-color) pt-32 pb-20 px-6 md:px-12 lg:px-20" data-theme="dark">
            <div className="container p-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div>
                        <Link href="/" className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-10 inline-block hover:opacity-60 transition-opacity">
                            ← Back to home
                        </Link>
                        <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter">
                            All <br /> Projects
                        </h1>
                    </div>
                    <div className="text-secondary text-right flex flex-col gap-2 uppercase text-[10px] tracking-widest opacity-60">
                        <span>Volume — 01</span>
                        <span>2021 — 2025</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-white/5 mb-6">
                                <img
                                    src={project.cover}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-expo"
                                />
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-2">
                                    <span className="text-accent font-mono text-[10px]">0{index + 1}</span>
                                    <h3 className="text-2xl font-bold uppercase transition-colors group-hover:text-accent ">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.type.map((t, i) => (
                                            <span key={i} className="text-[8px] uppercase border border-(--text-color)/20 px-2 py-0.5 rounded-full opacity-40">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-secondary font-mono text-xs opacity-40">{project.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
