import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/lib/navigation";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#392b6b]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="w-4 h-4 text-[#887eaa] shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className="font-semibold text-[#29166f]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 hover:text-[#c62b27] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3af2a] rounded px-1"
                >
                  {index === 0 && (
                    <Home className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
