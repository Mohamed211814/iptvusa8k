import React from "react";
import { Sparkles, Tv2, ListOrdered, Gauge, Layers, Wrench } from "lucide-react";

const featuresList = [
  {
    icon: Sparkles,
    title: "IPTV USA Crystal Clear HD & 4K Options",
    description:
      "Access high definition broadcasts with crisp clarity and fluid frame rates (up to 60fps) on supported displays with adequate internet bandwidth.",
  },
  {
    icon: ListOrdered,
    title: "IPTV USA Interactive Electronic Program Guide",
    description:
      "Easily browse what's playing now and upcoming shows with accurate XMLTV format EPG feeds synced across your favorite player apps.",
  },
  {
    icon: Gauge,
    title: "IPTV USA Fast Channel Switching",
    description:
      "Optimized stream initialization ensures swift channel zapping with minimal buffer pause when browsing through extensive live channel categories.",
  },
  {
    icon: Layers,
    title: "IPTV USA Multi Screen Connectivity",
    description:
      "Select plans support multiple simultaneous connections, allowing family members to stream different broadcasts in different rooms simultaneously.",
  },
  {
    icon: Tv2,
    title: "IPTV USA Broad Player Software Support",
    description:
      "Supports M3U Plus playlists and Xtream Codes API login, functioning seamlessly with TiviMate, IPTV Smarters, VLC, XCIPTV, and Kodi.",
  },
  {
    icon: Wrench,
    title: "IPTV USA Comprehensive Setup Guides",
    description:
      "Step by step setup documentation and personalized email support guide you through device installation on Fire TV, Apple TV, Android, or PC.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-[#f4e9f1]/60 border-y border-[#ebb0ad]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            Service Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29166f] tracking-tight">
            IPTV USA Features: Designed for High Performance Streaming & Total Reliability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#392b6b] leading-relaxed">
            Every feature in our service is configured to provide an uninterrupted, high quality television viewing experience on your terms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white border border-[#887eaa]/20 p-8 hover:border-[#e3af2a] transition-all duration-300 hover:shadow-xl hover:shadow-[#29166f]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#29166f] group-hover:border-[#29166f] group-hover:text-[#ffd700] transition-all shadow-sm">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#29166f] mb-3 group-hover:text-[#c62b27] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#392b6b]/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f4e9f1] flex items-center justify-between text-xs text-[#887eaa]">
                  <span>Substantiated Specification</span>
                  <span className="text-[#c62b27] font-semibold">Verified Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
