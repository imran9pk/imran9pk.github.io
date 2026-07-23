import React from "react";
import { profileData } from "@/data/profileData";

export default function Teaching() {
  return (
    <div>
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-3">
        Teaching &amp; Service
      </p>
      <h1 className="font-heading text-3xl font-bold mb-10">Teaching &amp; Academic Service</h1>

      <section className="mb-12">
        <h2 className="font-heading text-lg font-bold mb-5">Teaching</h2>
        <div className="flex flex-col gap-4">
          {profileData.teaching.map((t) => (
            <div key={t.institution} className="flex justify-between gap-4 pb-4 border-b border-stone-300/70 dark:border-stone-700/50 last:border-b-0">
              <div>
                <p className="font-heading text-[15px] font-bold leading-snug">{t.course}</p>
                <p className="font-sans text-[12.5px] text-emerald-700 dark:text-emerald-400">{t.role}, {t.institution}</p>
              </div>
              <span className="font-sans text-[11.5px] text-stone-500 dark:text-stone-400 whitespace-nowrap pt-0.5 tabular-nums">
                {t.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-lg font-bold mb-5">Administrative Responsibilities</h2>
        <div className="flex flex-col gap-4">
          {profileData.administrativeService.map((s) => (
            <div key={s.role} className="flex justify-between gap-4 pb-4 border-b border-stone-300/70 dark:border-stone-700/50 last:border-b-0">
              <div>
                <p className="font-heading text-[14.5px] font-bold leading-snug">{s.role}</p>
                <p className="font-sans text-[12px] text-emerald-700 dark:text-emerald-400 mb-1">{s.institution}</p>
                <p className="text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed">{s.description}</p>
              </div>
              <span className="font-sans text-[11.5px] text-stone-500 dark:text-stone-400 whitespace-nowrap pt-0.5 tabular-nums">
                {s.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-lg font-bold mb-5">Student Supervision &amp; Guest Teaching</h2>
        <ul className="flex flex-col gap-2.5 list-none">
          {profileData.studentSupervision.map((line) => (
            <li key={line} className="text-[13.5px] text-stone-700 dark:text-stone-300 leading-relaxed pl-4 relative before:content-['\2013'] before:absolute before:left-0 before:text-emerald-700 dark:before:text-emerald-400">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold mb-5">Academic Service</h2>
        <div className="flex flex-col gap-3">
          {profileData.academicService.map((s) => (
            <div key={s.venue} className="flex justify-between gap-4 pb-3 border-b border-stone-300/70 dark:border-stone-700/50 last:border-b-0">
              <div>
                <p className="font-heading text-[14px] font-bold leading-snug">{s.venue}</p>
                <p className="font-sans text-[12px] text-stone-600 dark:text-stone-400">{s.role}</p>
              </div>
              <span className="font-sans text-[11.5px] font-bold text-emerald-700 dark:text-emerald-400 whitespace-nowrap pt-0.5 tabular-nums">
                {s.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
