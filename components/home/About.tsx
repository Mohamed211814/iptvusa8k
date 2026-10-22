import React from "react";
import Link from "next/link";
import { Check, Tv, Globe, Users, ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual feature matrix (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-[#f4e9f1]/60 border border-[#ebb0ad]/50 p-8 shadow-xl">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#c62b27] text-white text-xs font-bold rounded-full shadow-md">
                USA Focus
              </div>

              <h3 className="text-xl font-bold text-[#29166f] mb-6">
                IPTV USA Audience: Who Is Our Service Built For?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#887eaa]/20 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center shrink-0 mt-0.5">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#29166f]">
                      IPTV USA Cord Cutters Seeking Modern TV
                    </h4>
                    <p className="text-xs text-[#392b6b] mt-1 leading-relaxed">
                      Say goodbye to bulky hardware rentals and rigid cable contracts with an all in one streaming feed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#887eaa]/20 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#29166f]">
                      IPTV USA Sports & Live Event Viewers
                    </h4>
                    <p className="text-xs text-[#392b6b] mt-1 leading-relaxed">
                      Stream high speed athletic broadcasts with smooth 60fps frame rates and minimal transmission delay.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#887eaa]/20 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#f4e9f1] border border-[#ebb0ad] text-[#e3af2a] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#29166f]">
                      IPTV USA International Audiences in the US
                    </h4>
                    <p className="text-xs text-[#392b6b] mt-1 leading-relaxed">
                      Access a diverse variety of global programming alongside comprehensive US regional channel lineups.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#ebb0ad]/40 flex items-center justify-between text-xs text-[#392b6b]">
                <span>Setup Assistance Included</span>
                <span className="text-[#c62b27] font-semibold">24/7 Digital Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              About IPTV USA
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29166f] tracking-tight leading-snug mb-6">
              IPTV USA Overview: A Modern, Reliable Approach to Television Subscriptions
            </h2>

            <p className="text-base sm:text-lg text-[#392b6b] leading-relaxed mb-6">
              At <strong className="text-[#29166f] font-semibold">IPTV USA</strong>, our mission is to deliver seamless, high definition television streams to viewers across the United States. Traditional television distribution often relies on cumbersome hardware, complicated wiring, and non negotiable yearly contracts. We believe modern viewers deserve better: flexible digital access on the devices they already love.
            </p>

            <p className="text-sm sm:text-base text-[#392b6b]/90 leading-relaxed mb-6">
              Our service connects your home entertainment setup to optimized streaming networks utilizing standard M3U playlist protocols and Xtream Codes API integrations. Whether you prefer running popular software like TiviMate on an Amazon Firestick or IPTV Smarters on your Samsung or LG Smart TV, IPTV USA integrates cleanly without proprietary lock in.
            </p>

            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-center gap-3 text-sm text-[#392b6b] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Fast digital delivery of account credentials to your email inbox</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#392b6b] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>No long term commitments; choose monthly or discounted multi month passes</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#392b6b] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Dedicated customer support desk available 7 days a week</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#plans"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#c62b27] via-[#c36965] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] transition-colors shadow-lg shadow-[#c62b27]/20 border border-[#ffd700]/30"
              >
                <span>View Available Subscriptions</span>
                <ArrowUpRight className="w-4 h-4 text-[#ffd700]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#29166f] bg-white border border-[#887eaa]/30 hover:border-[#29166f] hover:bg-[#f4e9f1] transition-colors shadow-sm"
              >
                <span>Talk with Our Support Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
