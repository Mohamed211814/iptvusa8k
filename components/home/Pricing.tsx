import React from "react";
import { Check, Zap, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const colorStyles = {
  blue: {
    cardBorder: "border-2 border-[#2563eb]",
    priceText: "text-[#2563eb]",
    pillBg: "bg-[#e8f0fe] text-[#2563eb]",
    button: "bg-[#2563eb] hover:bg-[#1d4ed8] shadow-blue-500/25",
  },
  purple: {
    cardBorder: "border-2 border-[#7c3aed]",
    priceText: "text-[#7c3aed]",
    pillBg: "bg-[#f3e8ff] text-[#7c3aed]",
    button: "bg-[#7c3aed] hover:bg-[#6d28d9] shadow-purple-500/25",
  },
  orange: {
    cardBorder: "border-2 border-[#ea580c]",
    priceText: "text-[#ea580c]",
    pillBg: "bg-[#ffedd5] text-[#ea580c]",
    button: "bg-[#ea580c] hover:bg-[#c2410c] shadow-orange-500/25",
  },
  green: {
    cardBorder: "border-2 border-[#059669]",
    priceText: "text-[#059669]",
    pillBg: "bg-[#059669] text-white shadow-sm",
    button: "bg-[#059669] hover:bg-[#047857] shadow-emerald-500/25",
  },
};

export function Pricing() {
  return (
    <section id="plans" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            Subscription Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29166f] tracking-tight">
            IPTV USA Subscription Plans
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#392b6b] leading-relaxed">
            Instant activation and premium streaming on any device.
          </p>
        </div>

        {/* Pricing Cards Grid (4 Columns matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {siteConfig.pricingPlans.map((plan) => {
            const style = colorStyles[plan.accentColor] || colorStyles.blue;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-white ${style.cardBorder} p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  isPopular ? "lg:-translate-y-2.5 z-10" : ""
                }`}
              >
                {/* Most Popular Choice Top Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider bg-[#059669] text-white shadow-md flex items-center gap-1 whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Duration Title */}
                  <h3 className="text-2xl font-black text-neutral-900 text-center mb-1">
                    <span className="sr-only">IPTV USA </span>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center my-3">
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight ${style.priceText}`}>
                      ${plan.priceUSD.toFixed(2)}
                    </span>
                  </div>

                  {/* Discount / Savings Pill Badge */}
                  {plan.discountBadge && (
                    <div className="flex justify-center mb-6">
                      <span className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-xs font-bold ${style.pillBg}`}>
                        {plan.discountBadge}
                      </span>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="border-t border-neutral-100 pt-5 mb-8">
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, idx) => {
                        const isHotPlayerBonus = feature.toLowerCase().includes("hotplayer");

                        return (
                          <li
                            key={idx}
                            className={`flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug ${
                              isHotPlayerBonus
                                ? "text-[#29166f] font-bold bg-[#f4e9f1]/70 p-2 rounded-lg border border-[#ebb0ad]/50"
                                : "text-neutral-700 font-medium"
                            }`}
                          >
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isHotPlayerBonus ? "text-[#c62b27]" : "text-[#10b981]"
                              }`}
                              strokeWidth={2.5}
                            />
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Card CTA: WhatsApp Order Button */}
                <div className="pt-2">
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg ${style.button}`}
                  >
                    <Zap className="w-4 h-4 fill-white shrink-0" />
                    <span className="font-extrabold tracking-wide">
                      {plan.ctaText}
                    </span>
                  </a>

                  <p className="text-[11px] text-center text-[#887eaa] mt-3 flex items-center justify-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Instant WhatsApp Setup & Activation</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on checkout & bonus workflow */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-[#f4e9f1]/80 border border-[#ebb0ad] p-6 text-center text-xs sm:text-sm text-[#392b6b] shadow-md space-y-3">
          <p>
            <strong className="text-[#29166f]">How to Order:</strong> Simply click any of the <strong>Order on WhatsApp</strong> buttons above to connect directly with our support team. You will receive safe payment details, instant playlist activation, and your free HotPlayer app bonus within minutes!
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/212779395271?text=Hello%20IPTV%20USA%2C%20I%20want%20to%20order%20a%20subscription%20plan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Click Here to Chat with Support & Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
