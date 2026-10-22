"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
}

interface LegalTableOfContentsProps {
  items: TocItem[];
}

export function LegalTableOfContents({ items }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <nav
      aria-label="Legal Sections Table of Contents"
      className="sticky top-28 rounded-2xl bg-[#f4e9f1]/80 border border-[#ebb0ad]/60 p-6 shadow-xl backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#ebb0ad]/50 text-[#29166f] font-bold text-base">
        <BookOpen className="w-5 h-5 text-[#c62b27]" />
        <span>Table of Contents</span>
      </div>

      <ol className="space-y-1.5 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isActive = activeId === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white text-[#c62b27] font-bold border-l-2 border-[#c62b27] shadow-sm"
                    : "text-[#392b6b] hover:text-[#29166f] hover:bg-white/60"
                }`}
              >
                <span className="truncate">
                  {index + 1}. {item.title}
                </span>
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform shrink-0 ${
                    isActive ? "text-[#c62b27]" : "text-[#887eaa] group-hover:text-[#29166f]"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
