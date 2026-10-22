"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FAQ() {
  // Track open state for items (allow multiple or single; open first one by default)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f4e9f1]/60 border-y border-[#ebb0ad]/30 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29166f] tracking-tight">
            IPTV USA FAQs: Frequently Asked Questions About Subscriptions & Setup
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#392b6b] leading-relaxed">
            Everything you need to know about our subscription service, compatibility, setup instructions, and customer policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#e3af2a] shadow-md"
                    : "bg-white border-[#887eaa]/20 hover:border-[#e3af2a]/60 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#29166f] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c62b27] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#392b6b]/90 leading-relaxed border-t border-[#f4e9f1]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#ebb0ad]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#29166f]">
                IPTV USA Support: Have a specific question not covered here?
              </h3>
              <p className="text-xs text-[#392b6b]">
                Our support team is happy to assist you with any questions before subscribing.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#c62b27] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] transition-colors shrink-0 shadow-md border border-[#ffd700]/30"
          >
            <span>Ask Support</span>
            <ArrowRight className="w-4 h-4 text-[#ffd700]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
