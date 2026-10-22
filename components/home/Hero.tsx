import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center justify-center pt-20 pb-28 lg:pt-28 lg:pb-36 bg-[#29166f]">
      {/* Background Wallpaper Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wallpaper.jpg"
          alt="IPTV USA Streaming Entertainment"
          fill
          priority
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Cinematic Contrast Overlays (allows wallpaper art to be clearly visible while keeping text readable) */}
      <div className="absolute inset-0 z-0 bg-black/45" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#29166f]/60 via-transparent to-[#29166f]/80" />

      {/* Smooth Bottom Gradient Fade to White (Blends with page background) */}
      <div className="absolute bottom-0 inset-x-0 h-28 z-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* H1 Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] max-w-4xl">
          <span className="bg-gradient-to-r from-[#ffd700] via-[#e3af2a] to-[#ffd700] bg-clip-text text-transparent drop-shadow-md">
            IPTV USA
          </span>{" "}
          Premium Streaming Subscriptions in the United States
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white font-medium leading-relaxed max-w-3xl mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <strong className="text-[#ffd700] font-bold">IPTV USA</strong> delivers reliable, high definition digital streams configured specifically for United States viewers. Connect your Smart TV, Firestick, or mobile device in minutes with dedicated 24/7 technical support.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/#plans"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#c62b27] via-[#c36965] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] shadow-2xl shadow-[#c62b27]/50 hover:shadow-[#c62b27]/70 border border-[#ffd700]/70 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
          >
            <Sparkles className="w-5 h-5 text-[#ffd700]" />
            <span>Explore Subscription Plans</span>
            <ArrowRight className="w-5 h-5 text-[#ffd700]" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 hover:border-[#ffd700]/60 transition-all shadow-xl w-full sm:w-auto"
          >
            <span>Ask Support a Question</span>
          </Link>
        </div>

        {/* Safe note */}
        <p className="text-xs text-white/90 font-medium mt-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          *Transparent USD pricing • Fast WhatsApp Activation & 24/7 Dedicated Support
        </p>
      </div>
    </section>
  );
}
