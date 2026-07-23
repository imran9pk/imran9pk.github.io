import React from "react";
import { profileData } from "@/data/profileData";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { socials, email, location } = profileData.personal;
  const rows = [
    { k: "Email", v: <a href={socials.email}>{email}</a> },
    { k: "Location", v: location },
    { k: "Scholar", v: <a href={socials.scholar} target="_blank" rel="noopener noreferrer">{socials.scholar.replace("https://", "")}</a> },
    { k: "GitHub", v: <a href={socials.github} target="_blank" rel="noopener noreferrer">{socials.github.replace("https://", "")}</a> },
    { k: "LinkedIn", v: <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">{socials.linkedin.replace("https://", "")}</a> },
    { k: "ORCID", v: <a href={socials.orcid} target="_blank" rel="noopener noreferrer">{socials.orcid.replace("https://", "")}</a> }
  ];

  return (
    <div>
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-3">
        Contact
      </p>
      <h1 className="font-heading text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-[15px] leading-relaxed text-stone-700 dark:text-stone-300 max-w-xl mb-10">
        I am open to research collaborations, joint projects, and discussions on empirical software performance,
        performance bug detection, and AI for software engineering.
      </p>

      <div className="max-w-xl">
        {rows.map((row) => (
          <div key={row.k} className="flex gap-4 py-3 border-b border-stone-300/70 dark:border-stone-700/50 last:border-b-0 text-[14.5px]">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wide text-stone-500 dark:text-stone-400 w-24 shrink-0 pt-0.5">
              {row.k}
            </span>
            <span className="[&_a]:text-emerald-700 dark:[&_a]:text-emerald-400 [&_a]:hover:underline break-all">
              {row.v}
            </span>
          </div>
        ))}
      </div>

      <a
        href={socials.email}
        className="inline-flex items-center gap-2 mt-10 px-5 py-3 font-sans text-sm font-semibold bg-[#3c5a45] hover:bg-[#324b3a] text-white rounded transition-colors"
        data-testid="contact-email-button"
      >
        Send an Email <Mail className="w-4 h-4" />
      </a>

      <div className="flex gap-4 mt-12 pt-8 border-t border-stone-300/70 dark:border-stone-700/50 font-sans text-[11px] text-stone-400 dark:text-stone-500">
        <span>&copy; {new Date().getFullYear()} Muhammad Imran</span>
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1"><Github className="w-3.5 h-3.5" /></a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1"><Linkedin className="w-3.5 h-3.5" /></a>
      </div>
    </div>
  );
}
