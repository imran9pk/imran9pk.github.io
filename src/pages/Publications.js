import React, { useState } from "react";
import { profileData } from "@/data/profileData";
import { copyBibtex } from "@/utils/bibtex";
import { FileText, Code, ExternalLink, Clipboard, Check } from "lucide-react";

function groupByYear(pubs) {
  const groups = [];
  for (const pub of pubs) {
    const last = groups[groups.length - 1];
    if (last && last.year === pub.year) {
      last.items.push(pub);
    } else {
      groups.push({ year: pub.year, items: [pub] });
    }
  }
  return groups;
}

export default function Publications() {
  const [copiedId, setCopiedId] = useState(null);
  const groups = groupByYear(profileData.publications);
  let counter = profileData.publications.length;

  const handleCopy = async (pub) => {
    try {
      await copyBibtex(pub);
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId((c) => (c === pub.id ? null : c)), 1800);
    } catch {
      // clipboard unavailable; no-op
    }
  };

  return (
    <div>
      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400 mb-3">
        Publications
      </p>
      <h1 className="font-heading text-3xl font-bold mb-10">All Publications</h1>

      {groups.map((group) => (
        <div key={group.year} className="mb-8">
          <p className="font-sans text-[12px] font-bold text-stone-500 dark:text-stone-400 tracking-wide mb-2">
            {group.year}
          </p>
          <div className="flex flex-col">
            {group.items.map((pub) => {
              const num = counter--;
              return (
                <article
                  key={pub.id}
                  className="flex gap-4 py-4 border-b border-stone-300/70 dark:border-stone-700/50 last:border-b-0"
                >
                  <span className="font-sans text-[12px] text-stone-500 dark:text-stone-400 w-6 shrink-0 pt-0.5">
                    {num}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14.5px] leading-snug mb-1.5">{pub.title}</p>
                    <p className="text-[12.5px] text-stone-500 dark:text-stone-400 mb-2">
                      {pub.authors} &middot; <i>{pub.venue}</i>
                    </p>
                    <div className="flex flex-wrap gap-2 font-sans text-[11px] font-bold">
                      {pub.doi && (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 border border-emerald-700/30 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-400 rounded px-2 py-0.5 hover:bg-emerald-700/10 dark:hover:bg-emerald-400/10 transition-colors"
                          data-testid={`pub-doi-btn-${pub.id}`}
                        >
                          DOI <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 border border-emerald-700/30 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-400 rounded px-2 py-0.5 hover:bg-emerald-700/10 dark:hover:bg-emerald-400/10 transition-colors"
                          data-testid={`pub-pdf-btn-${pub.id}`}
                        >
                          PDF <FileText className="w-3 h-3" />
                        </a>
                      )}
                      {pub.code && (
                        <a
                          href={pub.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 border border-emerald-700/30 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-400 rounded px-2 py-0.5 hover:bg-emerald-700/10 dark:hover:bg-emerald-400/10 transition-colors"
                          data-testid={`pub-code-btn-${pub.id}`}
                        >
                          Code <Code className="w-3 h-3" />
                        </a>
                      )}
                      <button
                        onClick={() => handleCopy(pub)}
                        className="inline-flex items-center gap-1 border border-stone-400/40 dark:border-stone-600/50 text-stone-600 dark:text-stone-400 rounded px-2 py-0.5 hover:border-emerald-600 dark:hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                        data-testid={`pub-bibtex-btn-${pub.id}`}
                      >
                        {copiedId === pub.id ? (
                          <>Copied <Check className="w-3 h-3" /></>
                        ) : (
                          <>BibTeX <Clipboard className="w-3 h-3" /></>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
