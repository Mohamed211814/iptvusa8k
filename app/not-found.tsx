import React from "react";
import Link from "next/link";
import { Home, HelpCircle, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Glow */}
        <div className="relative mx-auto w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-[#c62b27]/20 rounded-full blur-xl animate-pulse" />
          <div className="relative w-24 h-24 rounded-2xl bg-[#f4e9f1] border border-[#ebb0ad] flex items-center justify-center text-3xl font-extrabold text-[#c62b27] shadow-lg">
            404
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#29166f] tracking-tight mb-4">
          IPTV USA Page Not Found
        </h1>
        <p className="text-base text-[#392b6b] leading-relaxed mb-8">
          The page or broadcast URL you are attempting to view does not exist or may have been relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#c62b27] via-[#c36965] to-[#e3af2a] hover:from-[#c62b27] hover:to-[#ffd700] transition-colors shadow-lg shadow-[#c62b27]/25 border border-[#ffd700]/30"
          >
            <Home className="w-4 h-4 text-[#ffd700]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#plans"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#29166f] bg-white hover:bg-[#f4e9f1] border border-[#887eaa]/30 hover:border-[#29166f] transition-colors shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#c62b27]" />
            <span>View Subscription Plans</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#29166f] bg-[#f4e9f1] hover:bg-white border border-[#ebb0ad] transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#c62b27]" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
