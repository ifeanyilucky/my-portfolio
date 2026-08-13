import { projects } from "@/context/projects";
import Navigation from "@/components/Navigation";
import { hostname } from "@/components/ProjectRow";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#0A0A09] font-sans antialiased">
            <div className="max-w-3xl mx-auto px-6 pt-10 pb-24">
                <Navigation />

                <header className="mb-16">
                    <h1 className="font-serif text-[64px] leading-none text-[#F2EFE6] mb-6">
                        Archive
                    </h1>

                    <div className="text-[13px] tracking-[0.2em] uppercase text-[#6B6A66] mb-5">
                        Selected work
                    </div>

                    <p className="text-[17px] text-[#B8B5AC] mb-10">
                        A curated look at systems I've designed and products I've shipped end-to-end.
                    </p>

                    <div className="rounded-xl border border-[#242422] bg-[#131311] px-6 py-5">
                        <div className="text-[11px] tracking-[0.15em] uppercase text-[#5E5D59] mb-4">
                            Scope
                        </div>
                        <p className="text-[15px] text-[#B8B5AC]">
                            9 projects · 2021–2026 · logistics, fintech, Web3, marketplace,
                            proptech, open-source & studio
                        </p>
                    </div>
                </header>

                <section>
                    <h2 className="font-serif text-[34px] text-[#F2EFE6] mb-2">All Projects</h2>
                    <div className="border-t border-[#242422]">
                        {projects.map((project) => (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border-t border-[#242422] py-8"
                            >
                                <h3 className="font-serif text-[26px] text-[#EFECE3] mb-2">
                                    {project.title}
                                </h3>
                                <div className="text-[11px] tracking-[0.15em] uppercase text-[#5E5D59] mb-3">
                                    {hostname(project.link)} · {project.year}
                                </div>
                                <p className="text-[15px] text-[#9C9A94] mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[11px] tracking-[0.15em] uppercase text-[#6B6A66] border border-[#242422] rounded-full px-3 py-1"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}