"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";
import { getResolvedNavItems } from "@/lib/navigation";
import { NavItem } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = getResolvedNavItems(pathname);

  // Track scroll position for backdrop blur enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on Escape key or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#f4e9f1] shadow-md shadow-[#29166f]/5"
            : "bg-white/85 backdrop-blur-sm border-b border-[#f4e9f1]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navItems.map((item) => {
                if (item.children && item.children.length > 0) {
                  const isOpen = openDropdown === item.id;
                  return (
                    <div key={item.id} className="relative group">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpenDropdown(item.id);
                          }
                        }}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] ${
                          isOpen
                            ? "text-[#c62b27] bg-[#f4e9f1]"
                            : "text-[#29166f] hover:text-[#c62b27] hover:bg-[#f4e9f1]/70"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#c62b27]" : "text-[#887eaa]"
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div
                          role="menu"
                          aria-orientation="vertical"
                          aria-label={`${item.label} submenu`}
                          className="absolute left-0 mt-2 w-72 rounded-xl bg-white/98 backdrop-blur-lg border border-[#f4e9f1] shadow-xl shadow-[#29166f]/10 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                        >
                          {item.children.map((child: NavItem) => (
                            <Link
                              key={child.id}
                              href={child.href}
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                              className="group flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-[#f4e9f1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]"
                            >
                              <span className="text-sm font-medium text-[#29166f] group-hover:text-[#c62b27] transition-colors">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-xs text-[#887eaa] line-clamp-2">
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

                // Regular link
                const isActive =
                  item.href === pathname ||
                  (pathname === "/" && item.href === "/");

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] ${
                      isActive
                        ? "text-[#c62b27] bg-[#f4e9f1] font-semibold"
                        : "text-[#29166f] hover:text-[#c62b27] hover:bg-[#f4e9f1]/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#plans"
                className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#c62b27] via-[#c36965] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] shadow-md shadow-[#c62b27]/25 border border-[#ffd700]/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-[#ffd700] group-hover:rotate-12 transition-transform duration-300" />
                <span>Get Subscription</span>
                <ArrowRight className="w-4 h-4 text-[#ffd700] group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                aria-controls="mobile-navigation"
                className="inline-flex items-center justify-center p-2 rounded-lg text-[#29166f] hover:text-[#c62b27] hover:bg-[#f4e9f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
