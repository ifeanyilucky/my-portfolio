import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import ProjectSelection from "@/components/ProjectSelection";

export default function Home() {
    return (
        <div className="relative">
            <Hero />
            <Narrative />
            <ProjectSelection />

            {/* Services/Tech Stack Section - High Detail */}
            <section data-theme="dark" className="section px-6 md:px-12 lg:px-20 border-t border-(--text-color)/10 bg-transparent">
                <div className="container p-0">
                    <h2 className="text-secondary text-xs md:text-sm uppercase tracking-[0.2em] mb-16 md:mb-20 border-l border-accent pl-4">03 — Expertise</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-16">
                        <div className="space-y-10 group p-8 lg:p-0 border border-(--text-color)/5 lg:border-none rounded-2xl hover:bg-(--text-color)/5 lg:hover:bg-transparent transition-colors duration-500">
                            <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-accent flex items-center gap-4">
                                Architecture
                                <span className="h-px flex-1 bg-accent/20"></span>
                            </h4>
                            <ul className="space-y-6 text-secondary text-sm md:text-base lg:text-sm leading-loose">
                                <li className="flex justify-between border-b border-white/5 pb-3 group-hover:border-accent/20 transition-colors">
                                    <span className="font-medium group-hover:text-(--text-color)">Node.js / Express</span>
                                    <span className="text-accent font-mono text-xs">95%</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>Python / FastAPI</span> <span className="text-accent font-mono text-xs">80%</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>MongoDB / PostgreSQL</span> <span className="text-accent font-mono text-xs">90%</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>Docker / AWS</span> <span className="text-accent font-mono text-xs">75%</span></li>
                            </ul>
                        </div>

                        <div className="space-y-10 group p-8 lg:p-0 border border-(--text-color)/5 lg:border-none rounded-2xl hover:bg-(--text-color)/5 lg:hover:bg-transparent transition-colors duration-500">
                            <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-accent flex items-center gap-4">
                                Interface
                                <span className="h-px flex-1 bg-accent/20"></span>
                            </h4>
                            <ul className="space-y-6 text-secondary text-sm md:text-base lg:text-sm leading-loose">
                                <li className="flex justify-between border-b border-white/5 pb-3 group-hover:border-accent/20 transition-colors">
                                    <span className="font-medium group-hover:text-(--text-color)">React / Next.js</span>
                                    <span className="text-accent font-mono text-xs uppercase tracking-tighter">Gold</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>SwiftUI / Native</span> <span className="text-accent font-mono text-xs uppercase tracking-tighter">Senior</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>Typescript</span> <span className="text-accent font-mono text-xs uppercase tracking-tighter">Strict</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>Tailwind / Modern CSS</span> <span className="text-accent font-mono text-xs uppercase tracking-tighter">Fluid</span></li>
                            </ul>
                        </div>

                        <div className="space-y-10 group p-8 lg:p-0 border border-(--text-color)/5 lg:border-none rounded-2xl hover:bg-(--text-color)/5 lg:hover:bg-transparent transition-colors duration-500">
                            <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-accent flex items-center gap-4">
                                Motion
                                <span className="h-px flex-1 bg-accent/20"></span>
                            </h4>
                            <ul className="space-y-6 text-secondary text-sm md:text-base lg:text-sm leading-loose">
                                <li className="flex justify-between border-b border-white/5 pb-3 group-hover:border-accent/20 transition-colors">
                                    <span className="font-medium group-hover:text-(--text-color)">GSAP / ScrollTrigger</span>
                                    <span className="text-accent font-mono text-xs uppercase tracking-tighter">Master</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>Three.js / R3F</span> <span className="text-accent font-mono text-xs uppercase tracking-tighter">Creative</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>Framer Motion</span> <span className="text-accent font-mono text-xs uppercase tracking-tighter">Fluid</span></li>
                                <li className="flex justify-between border-b border-white/5 pb-3"><span>WebGL Shaders</span> <span className="text-accent font-mono text-xs uppercase tracking-tighter">Study</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Bold Call to Action */}
            <section data-theme="dark" className="contact-section min-h-screen lg:h-[120vh] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-accent opacity-[0.03] rounded-full blur-[200px]" />

                <div className="container p-0 flex flex-col items-center z-10">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-[12vw] md:text-[10vw] xl:text-[8vw] font-black mb-10 leading-[0.8] tracking-tighter uppercase wrap-break-word px-4">
                            Ready to <br className="hidden sm:block" /> Shift Reality?
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center pt-12 border-t border-white/10 mt-10">
                            <div className="text-center md:text-right flex flex-col text-[10px] uppercase tracking-[0.3em] text-secondary gap-2 opacity-60">
                                <span>Available Jan 2025</span>
                                <span>Open for partnerships</span>
                            </div>
                            <a href="mailto:hello@ifeanyi.dev" className="text-3xl md:text-5xl lg:text-7xl font-black underline decoration-1 underline-offset-8 hover:text-accent transition-all duration-700 ease-expo break-all">
                                hello@ifeanyi.dev
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="absolute bottom-8 left-6 right-6 lg:left-20 lg:right-20 flex flex-col lg:flex-row justify-between items-center text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-secondary opacity-40 py-6 border-t border-white/5 w-full">
                    <div className="flex gap-8 md:gap-12 mb-6 lg:mb-0">
                        <a href="https://linkedin.com" className="hover:text-accent font-bold transition-colors">LinkedIn</a>
                        <a href="https://github.com" className="hover:text-accent font-bold transition-colors">Github</a>
                        <a href="https://twitter.com" className="hover:text-accent font-bold transition-colors">Twitter</a>
                    </div>
                    <div className="text-center lg:text-right">
                        Handcrafted by Folio ©2025 / NEXT.JS 15 / GSAP 3.14
                    </div>
                </footer>
            </section>
        </div>
    );
}
