import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import ProjectSelection from "@/components/ProjectSelection";
import Expertise from "@/components/Expertise";

export default function Home() {
    return (
        <div className="relative">
            <Hero />
            <Narrative />
            <ProjectSelection />
            <Expertise />

            {/* Final Friendly Call to Action */}
            <section data-theme="dark" className="contact-section py-20 md:py-32 lg:py-48 flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-accent opacity-[0.03] rounded-full blur-[200px]" />

                <div className="container p-0 flex flex-col items-center z-10">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-[12vw] md:text-[8vw] xl:text-[6vw] font-black mb-10 leading-[0.9] tracking-tighter uppercase px-4">
                            Got a project <br className="hidden sm:block" /> in mind?
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center pt-10 border-t border-white/10 mt-8">
                            <div className="text-center md:text-right flex flex-col text-[10px] uppercase tracking-[0.3em] text-secondary gap-2 opacity-60">
                                <span>I'm currently free</span>
                                <span>Let's talk soon!</span>
                            </div>
                            <a href="mailto:ifeanyilucky360@gmail.com" className="text-2xl md:text-3xl lg:text-5xl font-black underline decoration-1 underline-offset-8 hover:text-accent transition-all duration-700 ease-expo break-all">
                                ifeanyilucky360@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="mt-32 w-full flex flex-col lg:flex-row justify-between items-center text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-secondary opacity-40 py-6 border-t border-white/5">
                    <div className="flex gap-8 md:gap-12 mb-6 lg:mb-0">
                        <a href="https://linkedin.com" className="hover:text-accent font-bold transition-colors">LinkedIn</a>
                        <a href="https://github.com" className="hover:text-accent font-bold transition-colors">Github</a>
                        <a href="https://twitter.com" className="hover:text-accent font-bold transition-colors">Twitter</a>
                    </div>
                    <div className="text-center lg:text-right">
                        Created by Ifeanyi ©2025
                    </div>
                </footer>
            </section>
        </div>
    );
}
