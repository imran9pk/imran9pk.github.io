import React from "react";
import { profileData } from "@/data/profileData";
import { FileText, Award } from "lucide-react";

function TimelineRow({ when, what, where, details }) {
  return (
    <div className="flex gap-5 mb-5 last:mb-0">
      <span className="font-sans text-[11.5px] text-stone-500 dark:text-stone-400 w-32 shrink-0 pt-0.5 tabular-nums">
        {when}
      </span>
      <div>
        <p className="font-heading text-[15px] font-bold leading-snug">{what}</p>
        <p className="font-sans text-[12.5px] text-emerald-700 dark:text-emerald-400 mb-1">{where}</p>
        {details && <p className="text-[13.5px] text-stone-600 dark:text-stone-400 leading-relaxed">{details}</p>}
      </div>
    </div>
  );
}

export default function CV() {
  return (
    <div>
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-3">
        Curriculum Vitae
      </p>
      <div className="flex items-start justify-between gap-4 mb-10">
        <h1 className="font-heading text-3xl font-bold">Education &amp; Experience</h1>
        <a
          href={profileData.personal.cvUrl}
          download="Muhammad_Imran_CV.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 font-sans text-sm font-semibold bg-[#3c5a45] hover:bg-[#324b3a] text-white rounded transition-colors shrink-0"
          data-testid="download-cv-btn-cv-page"
        >
          Download PDF <FileText className="w-4 h-4" />
        </a>
      </div>

      <section className="mb-12">
        <h2 className="font-heading text-lg font-bold mb-5">Education</h2>
        {profileData.education.map((edu) => (
          <TimelineRow
            key={edu.degree}
            when={edu.dates}
            what={edu.degree}
            where={`${edu.institution}, ${edu.location}`}
            details={edu.details}
          />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-lg font-bold mb-5">Experience</h2>
        {profileData.experience.map((exp) => (
          <TimelineRow
            key={`${exp.role}-${exp.institution}`}
            when={exp.dates}
            what={exp.role}
            where={`${exp.institution}, ${exp.location}`}
            details={exp.description}
          />
        ))}
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold mb-5">Awards &amp; Scholarships</h2>
        <div className="flex flex-col gap-4">
          {profileData.awards.map((award) => (
            <div key={award.title} className="flex gap-3">
              <Award className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-1" />
              <div>
                <p className="font-heading text-[14.5px] font-bold leading-snug">
                  {award.title} <span className="font-sans text-[11.5px] font-normal text-stone-500 dark:text-stone-400 tabular-nums">&middot; {award.year}</span>
                </p>
                <p className="font-sans text-[12px] text-emerald-700 dark:text-emerald-400 mb-0.5">{award.institution}</p>
                <p className="text-[13px] text-stone-600 dark:text-stone-400">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
