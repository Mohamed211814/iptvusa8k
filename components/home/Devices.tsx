import React from "react";
import { Tv, MonitorPlay, Smartphone, Laptop, Cpu, Radio, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, React.ElementType> = {
  Tv,
  MonitorPlay,
  Apple: Radio,
  Smartphone,
  Laptop,
  Cpu,
};

export function Devices() {
  return (
    <section id="devices" className="py-20 lg:py-28 bg-[#f4e9f1]/60 border-y border-[#ebb0ad]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            Hardware & Device Compatibility
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29166f] tracking-tight">
            IPTV USA Supported Devices: Watch Anywhere on Your Preferred Screen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#392b6b] leading-relaxed">
            IPTV USA is compatible with virtually every modern connected screen. No proprietary box required, run the streaming apps you already trust.
          </p>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.devices.map((device) => {
            const Icon = iconMap[device.iconName] || Tv;

            return (
              <div
                key={device.id}
                className="group rounded-2xl bg-white border border-[#887eaa]/20 p-7 hover:border-[#e3af2a] transition-all duration-300 hover:shadow-xl hover:shadow-[#29166f]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#29166f] group-hover:border-[#29166f] group-hover:text-[#ffd700] transition-all shadow-sm">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#29166f] group-hover:text-[#c62b27] transition-colors">
                        IPTV USA {device.name}
                      </h3>
                      <span className="text-xs text-[#887eaa]">
                        Compatible Platform
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#392b6b]/90 leading-relaxed mb-6">
                    {device.description}
                  </p>
                </div>

                {/* Popular Apps pill list */}
                <div className="pt-4 border-t border-[#f4e9f1]">
                  <span className="text-xs font-semibold text-[#887eaa] uppercase tracking-wider block mb-2">
                    Recommended Applications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {device.popularApps.map((app, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f4e9f1] text-[#29166f] text-xs font-medium border border-[#ebb0ad]/60"
                      >
                        <Check className="w-3 h-3 text-[#c62b27]" />
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
