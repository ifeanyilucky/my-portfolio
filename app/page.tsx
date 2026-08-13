import { projects } from "@/context/projects";
import Navigation from "@/components/Navigation";
import ProjectRow from "@/components/ProjectRow";

const FooterLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => (
    <a
        href={href}
        className="text-[15px] text-[#B8B5AC] underline decoration-[#4a4a46] underline-offset-4 transition-colors hover:text-[#EFECE3]"
    >
        {children}
    </a>
);

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0A0A09] font-sans antialiased">
            <div className="max-w-3xl mx-auto px-6 pt-10 pb-24">
                <Navigation />

                {/* Hero */}
                <header className="mb-16">
                    <h1 className="font-serif text-[64px] leading-none text-[#F2EFE6] mb-6">
                        Ifeanyi
                    </h1>

                    <div className="text-[13px] tracking-[0.2em] uppercase text-[#6B6A66] mb-5">
                        Software Engineer
                    </div>

                    <p className="text-[17px] text-[#B8B5AC] mb-10">
                        Backend and full-stack engineer with 5+ years designing APIs, distributed
                        workflows, and cloud infrastructure, then shipping the product on top.
                        I've built for logistics, fintech, Web3, and marketplace platforms.
                    </p>

                    <div className="flex items-center gap-3 mb-12">
                        <FooterLink href="https://github.com/ifeanyilucky">GitHub</FooterLink>
                        <span className="text-[#4a4a46] text-[13px]">·</span>
                        <FooterLink href="mailto:ifeanyilucky360@gmail.com">Email</FooterLink>
                        <span className="text-[#4a4a46] text-[13px]">·</span>
                        <FooterLink href="https://www.linkedin.com/in/ifeanyi-lucky-193b44194/">
                            LinkedIn
                        </FooterLink>
                    </div>

                    {/* Now playing box */}
                    <div className="rounded-xl border border-[#242422] bg-[#131311] px-6 py-5">
                        <span className="text-[15px] text-[#8B8A85]">
                            Not listening to anything right now.
                        </span>
                    </div>
                </header>

                {/* Projects */}
                <section>
                    <h2 className="font-serif text-[34px] text-[#F2EFE6] mb-2">Projects</h2>
                    <div className="border-t border-[#242422]">
                        {projects.map((project) => (
                            <ProjectRow key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}