import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { profileData } from "@/data/profileData";
import {
  User,
  BookMarked,
  Code,
  FileText,
  FlaskConical,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Linkedin
} from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: User, end: true },
  { to: "/publications", label: "Publications", icon: BookMarked },
  { to: "/projects", label: "Projects & Skills", icon: Code },
  { to: "/cv", label: "CV", icon: FileText },
  { to: "/teaching", label: "Teaching & Service", icon: FlaskConical },
  { to: "/contact", label: "Contact", icon: Mail }
];

function NavLinks({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 py-2 px-3 text-sm font-sans font-semibold tracking-wide transition-all rounded ${
              isActive
                ? "bg-white/10 text-white border-l-2 border-emerald-300"
                : "text-emerald-100/70 hover:text-white hover:bg-white/5 border-l-2 border-transparent"
            }`
          }
          data-testid={`nav-link-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
        >
          <item.icon className="w-4 h-4 shrink-0" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Sidebar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOP BAR */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#26392d] z-50 flex items-center justify-between px-5">
        <NavLink to="/" className="font-heading text-lg font-bold text-white" data-testid="nav-logo">
          M. Imran
        </NavLink>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            title="Toggle theme"
            data-testid="theme-toggle-btn"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-emerald-100" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            data-testid="mobile-menu-toggle-btn"
          >
            {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#26392d] z-40 p-6 overflow-y-auto">
          <NavLinks onNavigate={() => setMobileOpen(false)} />
          <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
            <a href={profileData.personal.socials.scholar} target="_blank" rel="noopener noreferrer" className="text-xs font-sans font-bold text-emerald-100/70 hover:text-white">Scholar</a>
            <a href={profileData.personal.socials.github} target="_blank" rel="noopener noreferrer" className="text-xs font-sans font-bold text-emerald-100/70 hover:text-white">GitHub</a>
            <a href={profileData.personal.socials.orcid} target="_blank" rel="noopener noreferrer" className="text-xs font-sans font-bold text-emerald-100/70 hover:text-white">ORCID</a>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex fixed top-0 bottom-0 left-0 w-64 bg-[#26392d] flex-col justify-between p-8 z-30">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-28 h-28 rounded-lg overflow-hidden shrink-0 border border-white/10">
              <img
                src={profileData.personal.avatar}
                alt={profileData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-white leading-tight">Muhammad Imran</p>
              <p className="font-sans text-[11px] text-emerald-100/60 leading-snug mt-0.5">
                Postdoctoral Researcher<br />University of L&rsquo;Aquila, Italy
              </p>
            </div>
          </div>

          <NavLinks />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between pt-5 border-t border-white/10">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-emerald-100/50">Theme</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-white/10 border border-white/10 transition-all"
              title="Toggle theme"
              data-testid="theme-toggle-btn"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-emerald-100" />}
            </button>
          </div>
          <div className="flex items-center gap-4 font-sans text-[11px] font-semibold">
            <a href={profileData.personal.socials.scholar} target="_blank" rel="noopener noreferrer" className="text-emerald-100/60 hover:text-white transition-colors" data-testid="social-scholar-link">Scholar</a>
            <a href={profileData.personal.socials.github} target="_blank" rel="noopener noreferrer" className="text-emerald-100/60 hover:text-white transition-colors flex items-center gap-1" data-testid="social-github-link"><Github className="w-3.5 h-3.5" /></a>
            <a href={profileData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-100/60 hover:text-white transition-colors flex items-center gap-1" data-testid="social-linkedin-link"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href={profileData.personal.socials.orcid} target="_blank" rel="noopener noreferrer" className="text-emerald-100/60 hover:text-white transition-colors" data-testid="social-orcid-link">ORCID</a>
          </div>
        </div>
      </aside>
    </>
  );
}
