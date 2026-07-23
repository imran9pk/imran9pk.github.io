import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

export default function Layout({ theme, toggleTheme }) {
  return (
    <div className="min-h-screen bg-[#eef1ea] dark:bg-[#161d18] text-stone-900 dark:text-stone-100 font-serif transition-colors duration-300">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <main className="lg:pl-64 min-h-screen pt-16 lg:pt-0">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
