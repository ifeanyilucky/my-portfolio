import { projects } from "@/context/projects";

export type Project = (typeof projects)[number];

export const hostname = (url: string) => {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return url;
    }
};

const Arrow = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function ProjectRow({ project }: { project: Project }) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block border-t border-[#242422] py-8"
        >
            <h3 className="font-serif text-[26px] text-[#EFECE3] mb-2">{project.title}</h3>
            <div className="text-[11px] tracking-[0.15em] uppercase text-[#5E5D59] mb-3">
                {hostname(project.link)}
            </div>
            <p className="text-[15px] text-[#9C9A94]">{project.description}</p>

            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-[#8FD14F] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <Arrow />
            </span>
        </a>
    );
}