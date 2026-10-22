import React from "react";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site-config";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="bg-[#f4e9f1] border-t border-[#ebb0ad]/50 text-[#392b6b]">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo size="md" />
            <p className="text-sm text-[#392b6b]/90 leading-relaxed max-w-sm">
              {siteConfig.brand.description}
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-[#392b6b]">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#059669] shrink-0" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors font-bold text-[#059669]"
                >
                  WhatsApp: 24/7 Live Chat Support
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c62b27] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#c62b27] transition-colors font-medium"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c62b27] shrink-0" />
                <span>{siteConfig.contact.supportHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c62b27] shrink-0" />
                <span>Targeted for United States customers (USD)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold text-[#29166f] uppercase tracking-wider mb-4">
              IPTV USA Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#c62b27] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Services Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Features & Quality
                </Link>
              </li>
              <li>
                <Link
                  href="/#plans"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/#devices"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Supported Devices
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Pages */}
          <div>
            <h3 className="text-sm font-bold text-[#29166f] uppercase tracking-wider mb-4">
              IPTV USA Support & Help
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Contact Support Desk
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  How Setup Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?type=setup"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Device Configuration Help
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#terms"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Service Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#refunds"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Compliance */}
          <div>
            <h3 className="text-sm font-bold text-[#29166f] uppercase tracking-wider mb-4">
              IPTV USA Legal & Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/legal"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Legal Information Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#privacy"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#acceptable-use"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#intellectual-property"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#liability"
                  className="hover:text-[#c62b27] transition-colors"
                >
                  Limitation of Liability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Informative Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#ebb0ad]/50 text-xs text-[#887eaa] leading-relaxed space-y-2">
          <p>
            <strong className="text-[#29166f]">Important Notice:</strong> IPTV USA provides digital television subscription access for supported media players. We do not broadcast or rebroadcast copyrighted television signals without appropriate permissions. All product names, logos, and brands mentioned on this website (such as Samsung, LG, Apple TV, Firestick, Roku, Android) are property of their respective owners and are used purely for compatibility and device identification purposes.
          </p>
          <p>
            Prices are listed in US Dollars (USD). Subscription activation requires an active high speed broadband connection. Please review our <Link href="/legal" className="text-[#c62b27] underline hover:text-[#29166f]">Terms & Conditions</Link> before purchasing.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#ebb0ad]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#887eaa]">
          <p>© <CurrentYear /> {siteConfig.brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal#privacy" className="hover:text-[#c62b27] transition-colors">
              Privacy
            </Link>
            <Link href="/legal#terms" className="hover:text-[#c62b27] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#c62b27] transition-colors">
              Contact
            </Link>
            <Link href="/legal#cookies" className="hover:text-[#c62b27] transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
