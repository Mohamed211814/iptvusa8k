import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#c62b27]/10 via-[#f4e9f1] to-[#ffd700]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#f4e9f1] to-white border border-[#ebb0ad]/60 p-8 sm:p-12 lg:p-16 shadow-2xl text-center overflow-hidden">
          {/* Subtle accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c62b27] via-[#ffd700] to-[#e3af2a]" />

          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Switch to Streamlined Television</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29166f] tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            <span className="bg-gradient-to-r from-[#c62b27] to-[#e3af2a] bg-clip-text text-transparent">
              IPTV USA
            </span>{" "}
            Ready to Upgrade Your Television Streaming Experience?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#392b6b] leading-relaxed max-w-2xl mx-auto mb-10">
            Enjoy high definition streams on your Smart TV, streaming box, or phone with zero long term contracts and prompt setup assistance from our support desk.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#plans"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#c62b27] via-[#c36965] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] shadow-xl shadow-[#c62b27]/25 border border-[#ffd700]/40 transition-all duration-200 active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5 text-[#ffd700]" />
              <span>Choose Your Subscription Plan</span>
              <ArrowRight className="w-5 h-5 text-[#ffd700]" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-[#29166f] bg-white hover:bg-[#f4e9f1] border border-[#887eaa]/30 hover:border-[#29166f] shadow-sm transition-colors"
            >
              <Mail className="w-4 h-4 text-[#c62b27]" />
              <span>Contact Support Desk</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-10 pt-8 border-t border-[#ebb0ad]/50 flex flex-wrap items-center justify-center gap-6 text-xs text-[#392b6b]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c62b27]" />
              <span>US Dollar (USD) Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c62b27]" />
              <span>Compatible with TiviMate, Smarters & VLC</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c62b27]" />
              <span>24/7 Digital Onboarding Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
