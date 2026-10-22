import React from "react";
import { Server, MonitorSmartphone, CalendarClock, ShieldAlert, Cpu, Headset } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "IPTV USA Optimized Routing",
    description:
      "Engineered with CDN edge nodes across major North American network hubs to provide smooth data delivery across standard US internet service providers.",
  },
  {
    icon: MonitorSmartphone,
    title: "IPTV USA Multi Screen Versatility",
    description:
      "Stream on your living room Smart TV, bedroom Firestick, or mobile devices on the go using standard player apps with single or multi connection plans.",
  },
  {
    icon: CalendarClock,
    title: "IPTV USA Integrated Electronic Program Guide",
    description:
      "Stay updated with live schedules, program timelines, and channel metadata via automated EPG updates synced to your local US timezone.",
  },
  {
    icon: Cpu,
    title: "IPTV USA Adaptive Bitrate Technology",
    description:
      "Streams automatically adjust to your available broadband bandwidth, helping prevent freezing and buffering during high demand live broadcasts.",
  },
  {
    icon: Headset,
    title: "IPTV USA 24/7 Technical Onboarding",
    description:
      "Get prompt assistance with playlist setup, Xtream Codes configuration, and troubleshooting directly from knowledgeable support personnel.",
  },
  {
    icon: ShieldAlert,
    title: "IPTV USA Transparent & Safe Terms",
    description:
      "No hidden activation fees, clear cancellation terms, and straightforward USD pricing with no forced multi year contracts.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f4e9f1]/60 border-y border-[#ebb0ad]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#ebb0ad] text-[#c62b27] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            Service Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29166f] tracking-tight">
            IPTV USA Service Highlights
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#392b6b] leading-relaxed">
            Engineered for high definition quality and seamless streaming across the US.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white border border-[#887eaa]/20 p-6 sm:p-8 hover:border-[#e3af2a] transition-all duration-300 hover:shadow-xl hover:shadow-[#29166f]/5 flex flex-col"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#29166f] group-hover:border-[#29166f] group-hover:text-[#ffd700] transition-all duration-200 shadow-sm">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#29166f] mb-3 group-hover:text-[#c62b27] transition-colors">
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
      </div>
    </section>
  );
}
