import React, { Suspense } from "react";
import Link from "next/link";
import { Mail, Clock, MapPin, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { getContactPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { getBreadcrumbsForPath } from "@/lib/navigation";

export const metadata = constructMetadata({
  title: "Contact Support Desk",
  description:
    "Contact the IPTV USA technical support and customer care team. Inquire about subscriptions, request device setup assistance, or report streaming issues 24/7.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbsForPath("/contact");
  const contactSchema = getContactPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={[contactSchema, breadcrumbSchema]} />

      <main className="min-h-screen bg-white text-[#29166f] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29166f] tracking-tight leading-tight mb-4">
              IPTV USA Support: Contact Our Customer & Technical Team
            </h1>
            <p className="text-base sm:text-lg text-[#392b6b] leading-relaxed">
              Have questions about compatible devices, subscription tiers, or playlist activation? Reach out to our dedicated support desk and our technical team will respond promptly.
            </p>
          </div>

          {/* Main Grid: Form (7 cols) + Support Info (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form UI */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="rounded-2xl bg-[#f4e9f1] border border-[#ebb0ad] p-8 h-96 animate-pulse" />
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Right: Verified Contact Channels & FAQs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Support Card */}
              <div className="rounded-2xl bg-[#f4e9f1]/70 border border-[#ebb0ad]/60 p-6 sm:p-7 shadow-xl">
                <h2 className="text-lg font-bold text-[#29166f] mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#c62b27]" />
                  <span>IPTV USA Contact Channels & Support Desk</span>
                </h2>

                <div className="space-y-4 text-sm text-[#392b6b]">
                  {/* WhatsApp Support Channel */}
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <div className="w-full">
                      <strong className="block text-[#29166f] font-semibold">WhatsApp Instant Support & Orders:</strong>
                      <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#059669] hover:underline font-extrabold text-base block mt-0.5"
                      >
                        {siteConfig.contact.whatsappDisplay}
                      </a>
                      <p className="text-xs text-[#887eaa] mt-0.5">
                        Available 24/7 for instant ordering & playlist setup
                      </p>
                      <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-colors"
                      >
                        <span>Open WhatsApp Live Support</span>
                      </a>
                    </div>
                  </div>

                  {/* Customer Support Email */}
                  <div className="flex items-start gap-3 pt-3 border-t border-[#ebb0ad]/50">
                    <Mail className="w-5 h-5 text-[#c62b27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#29166f] font-semibold">Customer Support Email:</strong>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[#c62b27] hover:underline font-bold"
                      >
                        {siteConfig.contact.email}
                      </a>
                      <p className="text-xs text-[#887eaa] mt-0.5">
                        Average response time: Under 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#ebb0ad]/50">
                    <Mail className="w-5 h-5 text-[#c62b27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#29166f] font-semibold">Sales & Inquiries:</strong>
                      <a
                        href={`mailto:${siteConfig.contact.salesEmail}`}
                        className="text-[#c62b27] hover:underline font-medium"
                      >
                        {siteConfig.contact.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#ebb0ad]/50">
                    <Clock className="w-5 h-5 text-[#c62b27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#29166f] font-semibold">Operating Schedule:</strong>
                      <span className="text-[#392b6b]">{siteConfig.contact.supportHours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#ebb0ad]/50">
                    <MapPin className="w-5 h-5 text-[#c62b27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#29166f] font-semibold">Business Office:</strong>
                      <span className="text-[#392b6b]">
                        {siteConfig.contact.address.streetAddress}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Onboarding Help Box */}
              <div className="rounded-2xl bg-white border border-[#ebb0ad] p-6 sm:p-7 shadow-md">
                <h3 className="text-base font-bold text-[#29166f] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#c62b27]" />
                  <span>IPTV USA Setup Assistance & Configuration Help</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#392b6b] leading-relaxed mb-4">
                  If you already purchased a subscription and need assistance importing your M3U playlist or configuring TiviMate or IPTV Smarters, mention your device model in the message form.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#c62b27] font-semibold">
                  <Link href="/#faq" className="hover:underline flex items-center gap-1">
                    <span>Read Frequently Asked Questions</span>
                  </Link>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="p-4 rounded-xl bg-[#f4e9f1]/60 border border-[#ebb0ad]/60 text-xs text-[#392b6b] flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#c62b27] shrink-0 mt-0.5" />
                <p>
                  For refund requests, cancellation terms, and acceptable usage rules, please review our comprehensive{" "}
                  <Link href="/legal" className="text-[#c62b27] hover:underline font-medium">
                    Legal & Policy Documentation
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
