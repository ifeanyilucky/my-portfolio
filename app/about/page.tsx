import Navigation from "@/components/Navigation";

const process = [
    {
        name: "Talk",
        description:
            "We talk through the problem: the scale you need, the constraints you're under, and what \u201cdone\u201d looks like.",
    },
    {
        name: "Plan",
        description:
            "I design the system first: data models, API contracts, and trade-offs, before writing a line of code.",
    },
    {
        name: "Build",
        description: "I build it end-to-end: backend, APIs, and the interface on top.",
    },
    {
        name: "Launch",
        description: "We ship to production, and I stick around to make sure it holds up under real traffic.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0A0A09] font-sans antialiased">
            <div className="max-w-3xl mx-auto px-6 pt-10 pb-24">
                <Navigation />

                <header className="mb-16">
                    <h1 className="font-serif text-[64px] leading-none text-[#F2EFE6] mb-6">
                        About
                    </h1>

                    <div className="text-[13px] tracking-[0.2em] uppercase text-[#6B6A66] mb-5">
                        Backend & Full-Stack Engineer
                    </div>

                    <p className="text-[17px] text-[#B8B5AC] mb-10">
                        I build backend systems and full-stack products that hold up in production
                        across logistics, fintech, Web3, and marketplace platforms. 5+ years designing
                        APIs, distributed workflows, and cloud infrastructure, then shipping the
                        product on top with React and Next.js.
                    </p>

                    {/* Tools box */}
                    <div className="rounded-xl border border-[#242422] bg-[#131311] px-6 py-5">
                        <div className="text-[11px] tracking-[0.15em] uppercase text-[#5E5D59] mb-4">
                            What I use
                        </div>
                        <p className="text-[15px] text-[#B8B5AC] leading-relaxed">
                            Node.js · TypeScript · Next.js · React · MongoDB · PostgreSQL · Redis ·
                            AWS · Docker
                        </p>
                    </div>
                </header>

                {/* Process */}
                <section>
                    <h2 className="font-serif text-[34px] text-[#F2EFE6] mb-2">How I work</h2>
                    <div className="border-t border-[#242422]">
                        {process.map((step, i) => (
                            <div key={step.name} className="border-t border-[#242422] py-8">
                                <h3 className="font-serif text-[26px] text-[#EFECE3] mb-2">
                                    {step.name}
                                </h3>
                                <div className="text-[11px] tracking-[0.15em] uppercase text-[#5E5D59] mb-3">
                                    0{i + 1}
                                </div>
                                <p className="text-[15px] text-[#9C9A94]">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section className="mt-16 border-t border-[#242422] pt-16">
                    <h2 className="font-serif text-[34px] text-[#F2EFE6] mb-6">Let's work together</h2>
                    <a
                        href="mailto:ifeanyilucky360@gmail.com"
                        className="text-[17px] text-[#EFECE3] underline decoration-[#4a4a46] underline-offset-4 transition-colors hover:decoration-[#8FD14F]"
                    >
                        ifeanyilucky360@gmail.com
                    </a>
                </section>
            </div>
        </div>
    );
}