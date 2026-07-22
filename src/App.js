import React, { useState, useEffect, useRef } from "react";
import "@/App.css";
import { profileData } from "@/data/profileData";
import {
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Mail,
  FileText,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Terminal,
  Code,
  FlaskConical,
  Cpu,
  Calendar,
  ArrowRight,
  Search,
  BookMarked,
  User,
  MessagesSquare
} from "lucide-react";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pubFilter, setPubFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    interests: useRef(null),
    publications: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    teaching: useRef(null),
    service: useRef(null),
    awards: useRef(null),
    contact: useRef(null)
  };

  // Sync theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const el = ref.current;
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = sectionRefs[id]?.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Filter Publications
  const filteredPublications = profileData.publications.filter(pub => {
    const matchesFilter = pubFilter === "All" || pub.type === pubFilter;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const navItems = [
    { id: "hero", label: "Overview", icon: User },
    { id: "about", label: "About", icon: BookOpen },
    { id: "publications", label: "Publications", icon: BookMarked },
    { id: "projects", label: "Research Projects", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "teaching", label: "Teaching & Service", icon: FlaskConical },
    { id: "awards", label: "Awards", icon: Award },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 font-sans selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300">
      
      {/* MOBILE HEADER (Glassmorphic Top Bar) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 z-50 flex items-center justify-between px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-heading font-bold tracking-tight text-indigo-600 dark:text-indigo-400"
          data-testid="nav-logo"
        >
          M. Imran
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
            title="Toggle Theme"
            data-testid="theme-toggle-btn"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
            data-testid="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU NAV SCREEN */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-40 flex flex-col p-6 animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 mt-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-4 py-3 px-4 rounded-lg font-heading text-lg font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/30"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent"
                }`}
                data-testid={`nav-link-${item.id}`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* DESKTOP SIDEBAR NAVIGATION (Sticky Side Navigation) */}
      <aside className="hidden lg:flex fixed top-0 bottom-0 left-0 w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex-col justify-between p-8 z-30">
        <div>
          <div className="mb-10">
            <h1 className="text-2xl font-heading font-bold tracking-tighter leading-tight bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 dark:from-indigo-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Muhammad Imran
            </h1>
            <p className="text-xs font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-1">
              Ph.D. Researcher
            </p>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 py-2 px-3 rounded text-sm transition-all text-left font-medium ${
                  activeSection === item.id
                    ? "bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50 hover:bg-slate-50 dark:hover:bg-slate-900 border-l-2 border-transparent"
                }`}
                data-testid={`nav-link-${item.id}`}
              >
                <item.icon className={`w-4 h-4 transition-colors ${
                  activeSection === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"
                }`} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div>
          {/* Theme Toggle & Meta */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Theme</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300"
              title="Toggle Theme"
              data-testid="theme-toggle-btn"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="lg:pl-64 min-h-screen">
        
        {/* HERO SECTION */}
        <section
          ref={sectionRefs.hero}
          id="hero"
          className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-0 lg:pb-0 border-b border-slate-200 dark:border-slate-800 bg-grid-pattern"
        >
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/50 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-6 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Active Postdoc Researcher
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tighter leading-none mb-4">
                {profileData.personal.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {profileData.personal.title}
              </h2>
              <p className="text-sm font-mono text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                {profileData.personal.institution}
              </p>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
                {profileData.personal.tagline}
              </p>

              {/* CTA and Social Actions */}
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => scrollToSection("publications")}
                  className="px-6 py-3 font-heading font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all transform hover:-translate-y-0.5 rounded shadow-lg shadow-indigo-500/20 flex items-center gap-2"
                  data-testid="download-cv-hero-btn" // Keep user-facing button test ID clear
                >
                  View Publications <BookMarked className="w-4 h-4" />
                </button>
                <a
                  href={profileData.personal.cvUrl}
                  download="Muhammad_Imran_CV.pdf"
                  className="px-6 py-3 font-heading font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all rounded flex items-center gap-2 shadow"
                  data-testid="download-cv-btn"
                >
                  Download CV <FileText className="w-4 h-4" />
                </a>
              </div>

              {/* Social Icon Row */}
              <div className="flex flex-wrap gap-3 mt-10">
                <a
                  href={profileData.personal.socials.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  title="Google Scholar"
                  data-testid="social-scholar-link"
                >
                  <span className="font-heading text-xs font-bold font-mono">Scholar</span>
                </a>
                <a
                  href={profileData.personal.socials.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  title="ORCID"
                  data-testid="social-orcid-link"
                >
                  <span className="font-heading text-xs font-bold font-mono">ORCID</span>
                </a>
                <a
                  href={profileData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  title="LinkedIn"
                  data-testid="social-linkedin-link"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileData.personal.socials.email}
                  className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  title="Email"
                  data-testid="social-email-link"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                <div className="relative bg-slate-100 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-800 w-64 h-80 overflow-hidden">
                  <img
                    src={profileData.personal.avatar}
                    alt={profileData.personal.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST NEWS (Marquee Ribbon) */}
        <section id="news" className="border-b border-slate-200 dark:border-slate-800 bg-indigo-50/50 dark:bg-indigo-950/20 py-4 overflow-hidden">
          <div className="flex items-center">
            <span className="bg-indigo-600 dark:bg-indigo-400 text-white dark:text-slate-950 text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 z-10 shrink-0 border-r border-indigo-700 select-none">
              Latest Updates
            </span>
            <div className="relative overflow-hidden w-full select-none">
              <div className="animate-marquee whitespace-nowrap flex items-center">
                {/* News entries repeated twice for continuous seamless loop */}
                {[...profileData.news, ...profileData.news].map((item, index) => (
                  <div key={index} className="inline-flex items-center mx-8">
                    <span className="text-xs font-mono bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded mr-3 uppercase tracking-wider">
                      {item.date}
                    </span>
                    <span className="text-sm font-heading font-medium text-slate-800 dark:text-slate-200">
                      {item.content}
                    </span>
                    <span className="mx-6 text-slate-300 dark:text-slate-700">//</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & RESEARCH INTERESTS */}
        <section ref={sectionRefs.about} id="about" className="py-24 md:py-32 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Bio block */}
              <div className="md:col-span-7">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                  Biography
                </span>
                <h2 className="text-3xl font-heading font-bold mb-6">About Me</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  <p>
                    I am a <strong>Postdoctoral Researcher</strong> at the <strong>SPENCER Laboratory</strong>, University of L’Aquila, Italy, working at the intersection of empirical software engineering and software performance. My research is focused on developing automated techniques to identify performance inefficiencies before systems reach production.
                  </p>
                  <p>
                    My specific expertise covers <strong>empirical software engineering, software performance engineering, performance bug detection, performance testing, energy estimation, machine learning,</strong> and leveraging <strong>large language models (LLMs)</strong> to build autonomous software diagnostics.
                  </p>
                  <p>
                    Prior to my postdoc role, I completed my Ph.D. at the University of L&apos;Aquila, collaborating on various research initiatives including visiting the Vrije Universiteit Amsterdam and leading work on energy modeling in open-source systems. With over seven years of university level teaching experience, I enjoy bridging academia with high-impact software research.
                  </p>
                </div>
              </div>

              {/* Research interest cards */}
              <div className="md:col-span-5">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                  Scientific Domains
                </span>
                <h2 className="text-3xl font-heading font-bold mb-6">Interests</h2>
                <div className="space-y-4">
                  {profileData.researchInterests.map((interest, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <h3 className="text-sm font-heading font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                        {interest.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                        {interest.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED PUBLICATIONS */}
        <section
          ref={sectionRefs.publications}
          id="publications"
          className="py-24 md:py-32 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                  Scholarly Works
                </span>
                <h2 className="text-3xl font-heading font-bold">Selected Publications</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg">
                  Publications in top-tier software engineering and empirical computing venues. Use the filters or search below.
                </p>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
              {["All", "Journal", "Conference", "Under Review"].map(filter => (
                <button
                  key={filter}
                  onClick={() => setPubFilter(filter)}
                  className={`px-4 py-1.5 text-xs font-mono font-bold uppercase border tracking-wider transition-all duration-300 rounded ${
                    pubFilter === filter
                      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-slate-950 dark:border-white shadow"
                      : "bg-transparent text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                  }`}
                  data-testid={`pub-filter-${filter.toLowerCase().replace(" ", "-")}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Publications List - Grid Borders Look */}
            <div className="border border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800 rounded bg-slate-50/50 dark:bg-slate-900/10">
              {filteredPublications.length > 0 ? (
                filteredPublications.map(pub => (
                  <div key={pub.id} className="p-6 md:p-8 hover:bg-slate-100/30 dark:hover:bg-slate-900/20 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${
                        pub.type === "Journal"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/30"
                          : pub.type === "Conference"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200/30"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/30"
                      }`}>
                        {pub.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        {pub.year}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-semibold text-slate-900 dark:text-slate-100 leading-tight mb-2">
                      {pub.title}
                    </h3>

                    {/* Bold Imran in authors list */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {pub.authors.split("Muhammad Imran").map((part, index, array) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < array.length - 1 && <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Muhammad Imran</strong>}
                        </React.Fragment>
                      ))}
                    </p>

                    <p className="text-xs italic font-mono text-slate-500 dark:text-slate-400 mb-4">
                      {pub.venue}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-2.5">
                      {pub.doi && (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all rounded"
                          data-testid={`pub-doi-btn-${pub.id}`}
                        >
                          DOI <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all rounded"
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
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all rounded"
                          data-testid={`pub-code-btn-${pub.id}`}
                        >
                          Replication Package <Code className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400 font-mono text-sm">
                  No publications matching the filters.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RESEARCH PROJECTS */}
        <section
          ref={sectionRefs.projects}
          id="projects"
          className="py-24 md:py-32 border-b border-slate-200 dark:border-slate-800"
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
              Applied Science
            </span>
            <h2 className="text-3xl font-heading font-bold mb-4">Research Projects</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-12 max-w-xl">
              Ongoing and completed investigation initiatives addressing crucial bottlenecks in modern software architectures.
            </p>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profileData.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-6 overflow-hidden hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Hover background visual effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 select-none pointer-events-none"
                    style={{ backgroundImage: `url(${project.bgUrl})` }}
                  ></div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="text-[10px] font-mono tracking-wider bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded uppercase border border-slate-200/50 dark:border-slate-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100 leading-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <span className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline flex items-center gap-1">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINES (EXPERIENCE & EDUCATION SIDE BY SIDE OR STACKED) */}
        <section
          ref={sectionRefs.experience}
          id="experience"
          className="py-24 md:py-32 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Experience Timeline */}
            <div>
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                Employment
              </span>
              <h2 className="text-3xl font-heading font-bold mb-10">Professional Path</h2>

              {/* Vertical line timeline */}
              <div className="border-l border-slate-200 dark:border-slate-800 ml-3 space-y-10 pl-6 relative">
                {profileData.experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot indicator */}
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 dark:bg-indigo-400 border-2 border-white dark:border-slate-950"></span>

                    <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-1">
                      {exp.dates}
                    </span>

                    <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      {exp.role}
                    </h3>

                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
                      {exp.institution} <span className="text-slate-400 dark:text-slate-600">//</span> {exp.location}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div ref={sectionRefs.education} id="education">
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                Credentials
              </span>
              <h2 className="text-3xl font-heading font-bold mb-10">Education Background</h2>

              {/* Vertical line timeline */}
              <div className="border-l border-slate-200 dark:border-slate-800 ml-3 space-y-10 pl-6 relative">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot indicator */}
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 dark:bg-indigo-400 border-2 border-white dark:border-slate-950"></span>

                    <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-1">
                      {edu.dates}
                    </span>

                    <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      {edu.degree}
                    </h3>

                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3">
                      {edu.institution} <span className="text-slate-400 dark:text-slate-600">//</span> {edu.location}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* TEACHING & SERVICE */}
        <section
          ref={sectionRefs.teaching}
          id="teaching"
          className="py-24 md:py-32 border-b border-slate-200 dark:border-slate-800"
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Teaching */}
            <div>
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                Pedagogy
              </span>
              <h2 className="text-3xl font-heading font-bold mb-10">Teaching & Mentoring</h2>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {profileData.teaching.map((t, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase block mb-0.5">
                      {t.period}
                    </span>
                    <h3 className="text-base font-heading font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {t.course}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {t.role} at {t.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Service */}
            <div ref={sectionRefs.service} id="service">
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                Contribution
              </span>
              <h2 className="text-3xl font-heading font-bold mb-10">Academic Service</h2>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {profileData.academicService.map((s, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                        {s.venue}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {s.role}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-2.5 py-0.5 border border-slate-200/50 dark:border-slate-800 rounded">
                      {s.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* AWARDS & SCHOLARSHIPS */}
        <section
          ref={sectionRefs.awards}
          id="awards"
          className="py-24 md:py-32 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
              Distinction
            </span>
            <h2 className="text-3xl font-heading font-bold mb-10">Awards & Scholarships</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.awards.map((award, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-[11px] font-mono bg-indigo-100/50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded border border-indigo-200/30">
                        {award.year}
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-bold text-slate-900 dark:text-slate-100 leading-snug mb-2">
                      {award.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {award.description}
                    </p>
                  </div>

                  <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider border-t border-slate-200/50 dark:border-slate-800/50 pt-3">
                    {award.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & SOCIAL FOOTER */}
        <section
          ref={sectionRefs.contact}
          id="contact"
          className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-4">
              Get In Touch
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight mb-6">
              {"Let's Collaborate."}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
              I am open to research collaborations, joint projects, and discussions regarding empirical software performance, bug analysis, and AI for software engineering.
            </p>

            {/* Huge clean contact button */}
            <div className="flex flex-col items-center justify-center gap-6 mb-12">
              <a
                href={`mailto:${profileData.personal.email}`}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-heading font-bold text-lg tracking-tight rounded shadow-lg shadow-indigo-500/20 hover:scale-102 active:scale-98 transition-all flex items-center gap-2"
                data-testid="contact-form-submit-button" // clear interaction testId
              >
                Send Message <Mail className="w-5 h-5" />
              </a>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Direct Email: <span className="underline">{profileData.personal.email}</span>
              </span>
            </div>

            {/* Highlighted copy of social buttons */}
            <div className="flex justify-center flex-wrap gap-4 pt-10 border-t border-slate-200 dark:border-slate-900">
              <a
                href={profileData.personal.socials.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all rounded font-mono text-xs font-bold"
                data-testid="social-scholar-link-footer"
              >
                Scholar
              </a>
              <a
                href={profileData.personal.socials.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all rounded font-mono text-xs font-bold"
                data-testid="social-orcid-link-footer"
              >
                ORCID
              </a>
              <a
                href={profileData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all rounded font-mono text-xs font-bold"
                data-testid="social-github-link-footer"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={profileData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all rounded font-mono text-xs font-bold"
                data-testid="social-linkedin-link-footer"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>

            <div className="mt-16 text-xs font-mono text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} Muhammad Imran. All rights reserved. Built with React & Tailwind CSS.
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
