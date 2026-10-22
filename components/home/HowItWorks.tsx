import React from "react";
import Link from "next/link";
import { Sliders, Mail, PlayCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    stepNumber: "01",
    icon: Sliders,
    title: "IPTV USA Step 1: Choose an Available Subscription",
    description:
      "Select your preferred plan duration (1, 3, 6, or 12 months) and submit your device details through our secure order inquiry form.",
    highlighted: false,
  },
  {
    stepNumber: "02",
    icon: Mail,
    title: "IPTV USA Step 2: Follow Setup Instructions",
    description:
      "Receive your personalized login credentials (M3U URL and Xtream Codes API) along with step by step setup guides delivered straight to your email.",
    highlighted: true,
  },
  {
    stepNumber: "03",
    icon: PlayCircle,
    title: "IPTV USA Step 3: Start Watching Supported Content",
    description:
      "Input your credentials into your favorite IPTV app on your Smart TV, Firestick, or smartphone and enjoy seamless streaming immediately.",
    highlighted: false,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fbf2f4] border border-[#f0c5c1] text-[#c62b27] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Quick Onboarding Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#29166f] tracking-tight leading-tight">
            IPTV USA Setup Guide: How Getting Started Works in 3 Simple Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b3f72] leading-relaxed">
            From plan selection to active streaming in three simple, hassle free steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto items-stretch">
          {/* Connector line behind cards on desktop */}
          <div className="hidden md:block absolute top-[138px] left-[15%] right-[15%] h-[2px] bg-[#f0d5ce] z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative z-10 rounded-3xl p-8 sm:p-9 flex flex-col items-center text-center transition-all duration-300 ${
                  item.highlighted
                    ? "bg-white border-2 border-[#e6b129] shadow-xl shadow-[#e6b129]/10"
                    : "bg-[#fbf6f7] border border-[#f3dedd] hover:border-[#ebb0ad] hover:bg-white shadow-sm"
                }`}
              >
                {/* Step Pill Circle */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#e8541c] to-[#cb3b17] text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-[#e8541c]/30 mb-5">
                  {item.stepNumber}
                </div>

                {/* Step Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#f0c8c4] text-[#c62b27] flex items-center justify-center mb-6 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2]" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#29166f] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4b3f72] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-14 text-center">
          <Link
            href="/#plans"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#c62b27] hover:text-[#9e1b17] transition-colors"
          >
            <span>Ready to get started? Explore subscription plans</span>
            <ArrowRight className="w-4 h-4 text-[#c62b27]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
