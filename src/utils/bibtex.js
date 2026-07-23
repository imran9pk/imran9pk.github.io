function bibtexKey(pub) {
  return pub.id.replace(/^pub-/, "").replace(/[^a-zA-Z0-9]/g, "");
}

function bareDoi(doi) {
  if (!doi) return "";
  return doi.replace(/^https?:\/\/doi\.org\//, "");
}

export function toBibtex(pub) {
  const key = bibtexKey(pub);
  const authors = pub.authors.split(", ").join(" and ");
  const doi = bareDoi(pub.doi);
  const isJournal = pub.type === "Journal";
  const entryType = isJournal ? "article" : "inproceedings";
  const venueField = isJournal ? "journal" : "booktitle";

  const lines = [
    `@${entryType}{${key},`,
    `  title     = {${pub.title}},`,
    `  author    = {${authors}},`,
    `  ${venueField}${" ".repeat(Math.max(1, 5 - venueField.length))}= {${pub.venue}},`,
    `  year      = {${pub.year}},`,
  ];
  if (doi) {
    lines.push(`  doi       = {${doi}},`);
  }
  lines.push("}");
  return lines.join("\n");
}

export async function copyBibtex(pub) {
  const text = toBibtex(pub);
  await navigator.clipboard.writeText(text);
  return text;
}
