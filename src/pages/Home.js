import React from "react";
import { Link } from "react-router-dom";
import { profileData } from "@/data/profileData";
import { ArrowRight, FileText } from "lucide-react";

export default function Home() {
  const selected = profileData.publications.filter((p) => p.selected).slice(0, 2);
  const recentNews = profileData.news.slice(0, 4);

  return (
    <div>
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-3">
        About
      </p>
      <h1 className="font-heading text-3xl md:text-[34px] font-bold leading-tight mb-6 max-w-xl">
        {profileData.personal.title}
      </h1>

      <div className="space-y-4 text-[15px] leading-relaxed text-stone-700 dark:text-stone-300 max-w-2xl mb-6">
        <p>
          I am a Postdoctoral Researcher at the <strong>SPENCER Laboratory</strong>, University of L&rsquo;Aquila, Italy,
          working at the intersection of empirical software engineering and software performance. My research combines
          empirical methods, machine learning, and large language models into automated techniques that catch
          performance regressions and estimate energy usage in Java systems before code ever reaches production.
        </p>
        <p>
          In practice, that means fine-tuning open-source LLMs, engineering ML pipelines on large Java codebases, and
          running controlled experiments end to end. You can find the technical specifics and tools on the{" "}
          <Link to="/projects" className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold">
            Projects &amp; Skills
          </Link>{" "}
          page.
        </p>
        <p>
          Prior to my postdoc, I completed my Ph.D. at the University of L&rsquo;Aquila, collaborating with the Vrije
          Universiteit Amsterdam on energy modeling for open-source Java systems. I also bring more than six years of
          university-level teaching experience, having taught undergraduate CS and SE courses in Pakistan.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-14">
        <a
          href={profileData.personal.cvUrl}
          download="Muhammad_Imran_CV.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 font-sans text-sm font-semibold bg-[#3c5a45] hover:bg-[#324b3a] text-white rounded transition-colors"
          data-testid="download-cv-btn"
        >
          Download CV <FileText className="w-4 h-4" />
        </a>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 font-sans text-sm font-semibold border border-stone-300 dark:border-stone-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded transition-colors"
        >
          Projects &amp; Skills <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/publications"
          className="inline-flex items-center gap-2 px-4 py-2 font-sans text-sm font-semibold border border-stone-300 dark:border-stone-700 hover:border-emerald-600 dark:hover:border-emerald-400 rounded transition-colors"
        >
          View Publications <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <section className="mb-14">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-4">
          Recent News
        </p>
        <div className="flex flex-col gap-3">
          {recentNews.map((item, idx) => (
            <div key={idx} className="flex gap-4 text-[14.5px]">
              <span className="font-sans text-[11px] text-stone-500 dark:text-stone-400 w-16 shrink-0 pt-0.5">
                {item.date}
              </span>
              <span className="text-stone-700 dark:text-stone-300">{item.content}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-4">
          Selected Publications
        </p>
        <div className="flex flex-col gap-3 mb-4">
          {selected.map((pub) => (
            <div key={pub.id} className="flex gap-4 text-[14.5px]">
              <span className="font-sans text-[11px] text-stone-500 dark:text-stone-400 w-16 shrink-0 pt-0.5">
                {pub.year}
              </span>
              <span className="text-stone-700 dark:text-stone-300">
                {pub.title} <i className="text-stone-500 dark:text-stone-400">&mdash; {pub.venue.match(/\(([^)]+)\)/)?.[1] || pub.venue}</i>
              </span>
            </div>
          ))}
        </div>
        <Link
          to="/publications"
          className="font-sans text-[12.5px] font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
        >
          View all publications &rarr;
        </Link>
      </section>
    </div>
  );
}
