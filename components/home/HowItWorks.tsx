import React from "react";
import Link from "next/link";
import { Sliders, MailCheck, PlayCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    stepNumber: "01",
    icon: Sliders,
    title: "IPTV USA Step 1: Choose an Available Subscription",
    description:
      "Select your preferred plan duration (1, 3, 6, or 12 months) and submit your device details through our secure order inquiry form.",
  },
  {
    stepNumber: "02",
    icon: MailCheck,
    title: "IPTV USA Step 2: Follow Setup Instructions",
    description:
      "Receive your personalized login credentials (M3U URL and Xtream Codes API) along with step by step setup guides delivered straight to your email.",
  },
  {
    stepNumber: "03",
    icon: PlayCircle,
    title: "IPTV USA Step 3: Start Watching Supported Content",
    description:
      "Input your credentials into your favorite IPTV app on your Smart TV, Firestick, or smartphone and enjoy seamless streaming immediately.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            Quick Onboarding Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29166f] tracking-tight">
            IPTV USA Setup Guide: How Getting Started Works in 3 Simple Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#392b6b] leading-relaxed">
            From plan selection to active streaming in three simple, hassle free steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#e3af2a]/20 via-[#c62b27]/30 to-[#e3af2a]/20 -translate-y-12 -z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative z-10 rounded-2xl bg-[#f4e9f1]/50 border border-[#ebb0ad]/40 p-8 flex flex-col items-center text-center hover:border-[#e3af2a] hover:bg-white hover:shadow-xl hover:shadow-[#29166f]/5 transition-all duration-300"
              >
                {/* Step Pill */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#c62b27] to-[#e3af2a] text-white font-extrabold flex items-center justify-center text-base shadow-lg shadow-[#c62b27]/25 border border-[#ffd700]/30 mb-6">
                  {item.stepNumber}
                </div>

                {/* Step Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#29166f] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#392b6b]/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA snippet */}
        <div className="mt-14 text-center">
          <Link
            href="/#plans"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c62b27] hover:text-[#29166f] transition-colors"
          >
            <span>Ready to get started? Explore subscription plans</span>
            <ArrowRight className="w-4 h-4 text-[#c62b27]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
