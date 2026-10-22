"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "@/lib/site-config";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileNavigation({
  isOpen,
  onClose,
  navItems,
}: MobileNavigationProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 top-20 z-40 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 top-20 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Menu Panel */}
      <div className="relative max-h-[calc(100vh-5rem)] overflow-y-auto bg-white border-b border-[#f4e9f1] p-6 shadow-2xl flex flex-col gap-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#f4e9f1]">
          <Logo size="sm" />
          <span className="text-xs uppercase tracking-wider text-[#887eaa] font-semibold">
            Navigation Menu
          </span>
        </div>

        {/* Links List */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            if (item.children && item.children.length > 0) {
              const isExpanded = expandedSection === item.id;
              return (
                <div key={item.id} className="border-b border-[#f4e9f1] pb-1">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium text-[#29166f] hover:text-[#c62b27] hover:bg-[#f4e9f1] transition-colors text-left"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#c62b27] transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Child Links */}
                  {isExpanded && (
                    <div className="pl-4 pr-2 py-1 flex flex-col gap-1 bg-[#f4e9f1]/70 rounded-lg mt-1 mb-2">
                      {item.children.map((child: NavItem) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          onClick={onClose}
                          className="flex flex-col py-2 px-3 rounded-md hover:bg-white transition-colors"
                        >
                          <span className="text-sm font-medium text-[#29166f] hover:text-[#c62b27]">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="text-xs text-[#887eaa]">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="py-2.5 px-3 rounded-lg text-base font-medium text-[#29166f] hover:text-[#c62b27] hover:bg-[#f4e9f1] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href="/#plans"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-bold text-white bg-gradient-to-r from-[#c62b27] via-[#c36965] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] shadow-md shadow-[#c62b27]/25 border border-[#ffd700]/30 transition-all text-center"
          >
            <Sparkles className="w-4 h-4 text-[#ffd700]" />
            <span>Explore Subscription Plans</span>
            <ArrowRight className="w-4 h-4 text-[#ffd700]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
