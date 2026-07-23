import React from "react";
import { profileData } from "@/data/profileData";
import { Code, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div>
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-3">
        Projects &amp; Skills
      </p>
      <h1 className="font-heading text-3xl font-bold mb-10">Projects &amp; Technical Skills</h1>

      <section className="mb-14">
        <h2 className="font-heading text-lg font-bold mb-5">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {profileData.skills.map((group) => (
            <div key={group.category}>
              <p className="font-sans text-[11px] font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-sans text-[11.5px] text-stone-700 dark:text-stone-300 bg-stone-200/60 dark:bg-stone-800/60 rounded px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold mb-5">Projects</h2>
        <div className="flex flex-col gap-5">
          {profileData.projects.map((project) => (
            <article
              key={project.title}
              className="border border-stone-300/70 dark:border-stone-700/60 rounded-lg p-5 hover:border-emerald-600 dark:hover:border-emerald-400 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-1.5">
                <h3 className="font-heading text-[16px] font-bold leading-snug">{project.title}</h3>
                <span className="font-sans text-[11px] text-stone-500 dark:text-stone-400 whitespace-nowrap pt-0.5">
                  {project.period}
                </span>
              </div>
              <p className="font-sans text-[12px] text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
                {project.affiliation}
              </p>
              <p className="text-[14px] leading-relaxed text-stone-700 dark:text-stone-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[10.5px] font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 bg-stone-200/60 dark:bg-stone-800/60 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-sans text-[11px] font-bold text-emerald-700 dark:text-emerald-400 ml-auto"
                  >
                    Code <Code className="w-3 h-3" /> <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
