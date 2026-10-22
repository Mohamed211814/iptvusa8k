import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isLink?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", isLink = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-1.5 font-bold tracking-tight select-none ${sizeClasses} ${className}`}>
      {/* Icon accent badge */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#c62b27] via-[#e3af2a] to-[#ffd700] shadow-lg shadow-[#c62b27]/30 ring-1 ring-[#ffd700]/40">
        <span className="text-xs font-black tracking-widest text-[#29166f]">8K</span>
        <div className="absolute -inset-0.5 rounded-lg bg-[#ffd700]/30 blur-sm -z-10" />
      </div>

      {/* Typographic brand text */}
      <span className="text-[#29166f] font-extrabold tracking-tight">
        IPTV
      </span>
      <span className="bg-gradient-to-r from-[#c62b27] via-[#e3af2a] to-[#ffd700] bg-clip-text text-transparent font-black tracking-wider">
        USA
      </span>
    </div>
  );

  if (isLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] rounded-md p-0.5"
        aria-label="IPTV USA Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
