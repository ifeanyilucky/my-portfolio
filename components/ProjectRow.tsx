import { projects } from "@/context/projects";

export type Project = (typeof projects)[number];

export const hostname = (url: string) => {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return url;
    }
};

export default function ProjectRow({ project }: { project: Project }) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-t border-[#242422] py-8"
        >
            <h3 className="font-serif text-[26px] text-[#EFECE3] mb-2">{project.title}</h3>
            <div className="text-[11px] tracking-[0.15em] uppercase text-[#5E5D59] mb-3">
                {hostname(project.link)}
            </div>
            <p className="text-[15px] text-[#9C9A94]">{project.description}</p>
        </a>
    );
}