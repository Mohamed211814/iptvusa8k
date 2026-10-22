import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LegalTableOfContents } from "@/components/legal/LegalTableOfContents";
import { getBreadcrumbsForPath } from "@/lib/navigation";

export const metadata = constructMetadata({
  title: "Legal Terms, Privacy & Policies",
  description:
    "Review the Terms and Conditions, Privacy Policy, Refund Guidelines, and Acceptable Use Policies for IPTV USA subscription services in the United States.",
  path: "/legal",
});

const legalSections = [
  { id: "terms", title: "Terms and Conditions" },
  { id: "subscription-payment", title: "Subscription and Payment Terms" },
  { id: "refunds", title: "Refund and Cancellation Policy" },
  { id: "acceptable-use", title: "Acceptable Use Policy" },
  { id: "intellectual-property", title: "Intellectual Property & Trademarks" },
  { id: "privacy", title: "Privacy Policy" },
  { id: "cookies", title: "Cookies and Analytics" },
  { id: "availability", title: "Service Availability and Limitations" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "contact-info", title: "Contact Information" },
];

export default function LegalPage() {
  const breadcrumbs = getBreadcrumbsForPath("/legal");
  const pageSchema = getWebPageSchema({
    name: "Legal Information & Policies - IPTV USA",
    description: "Official legal terms, privacy policies, and refund rules for IPTV USA services.",
    path: "/legal",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Legal & Policies", path: "/legal" },
  ]);

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema]} />

      <main className="min-h-screen bg-white text-[#29166f] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              Transparency & Compliance
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29166f] tracking-tight leading-tight mb-4">
              IPTV USA Legal Policies, Terms of Service & Subscription Guidelines
            </h1>
            <p className="text-base sm:text-lg text-[#392b6b] leading-relaxed">
              Please read these terms carefully before utilizing the {siteConfig.brand.name} subscription service. This page details your rights, responsibilities, privacy protections, and refund eligibility.
            </p>
            <div className="mt-4 text-xs text-[#887eaa]">
              Last Updated: {siteConfig.legal.lastUpdated} • Applicable Jurisdiction: {siteConfig.legal.jurisdiction}
            </div>
          </div>

          {/* Legal Notice Alert Box */}
          <div className="mb-12 p-5 rounded-2xl bg-[#f4e9f1] border border-[#ebb0ad] flex items-start gap-3.5 text-[#392b6b] text-xs sm:text-sm leading-relaxed shadow-sm">
            <AlertTriangle className="w-5 h-5 text-[#c62b27] shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-[#29166f] block mb-0.5">
                Draft Legal Disclosure Notice:
              </strong>
              The following policies constitute the standard operational terms for {siteConfig.brand.name}. Bracketed terms such as{" "}
              <code className="text-[#c62b27] bg-white border border-[#ebb0ad] px-1 py-0.5 rounded font-mono text-xs">
                [ENTER LEGAL ENTITY NAME]
              </code>{" "}
              represent business placeholders intended for review and confirmation prior to final commercial deployment. Nothing on this page should be construed as legal advice.
            </div>
          </div>

          {/* Main Content Layout: Table of Contents (4 cols) + Sections (8 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <LegalTableOfContents items={legalSections} />
            </aside>

            {/* Content Sections */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-16 text-[#392b6b] text-sm sm:text-base leading-relaxed">
              {/* Section 1: Terms and Conditions */}
              <section id="terms" className="scroll-mt-28 space-y-4 pt-4 border-t border-[#ebb0ad]/50 lg:border-t-0">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">01.</span>
                  IPTV USA Terms and Conditions
                </h2>
                <p>
                  Welcome to <strong className="text-[#29166f] font-semibold">{siteConfig.brand.name}</strong>, operated by{" "}
                  <span className="text-[#29166f] font-mono bg-[#f4e9f1] px-1.5 py-0.5 rounded border border-[#ebb0ad]">
                    {siteConfig.legal.companyName}
                  </span>{" "}
                  (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By subscribing to, accessing, or using our digital streaming service, website, or associated applications, you agree to be bound by these Terms and Conditions.
                </p>
                <p>
                  If you do not agree with any part of these terms, you must discontinue the use of our services immediately. We reserve the right to amend these terms at any time with prior notice provided via our website or direct email communication to registered account holders.
                </p>
              </section>

              {/* Section 2: Subscription and Payment Terms */}
              <section id="subscription-payment" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">02.</span>
                  IPTV USA Subscription and Payment Terms
                </h2>
                <p>
                  All subscription fees are denominated and charged in <strong>United States Dollars (USD)</strong>. Subscription options include 1 month, 3 month, 6 month, and 12 month periods as advertised in our subscription tiers.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-[#29166f]">Billing Cycle:</strong> Subscriptions are prepaid for the duration selected at the time of purchase.
                  </li>
                  <li>
                    <strong className="text-[#29166f]">Account Activation:</strong> Digital credentials (including M3U URLs and Xtream Codes API details) are delivered via email once payment verification is successfully completed.
                  </li>
                  <li>
                    <strong className="text-[#29166f]">Renewal:</strong> Unless specified otherwise during the checkout agreement, subscriptions do not automatically charge your payment method without your explicit authorization.
                  </li>
                  <li>
                    <strong className="text-[#29166f]">Connection Limits:</strong> Subscriptions must not exceed the maximum simultaneous stream allowances designated for each plan (typically 1 or 2 concurrent streams).
                  </li>
                </ul>
              </section>

              {/* Section 3: Refund and Cancellation Policy */}
              <section id="refunds" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">03.</span>
                  IPTV USA Refund and Cancellation Policy
                </h2>
                <p>
                  We strive to ensure total customer satisfaction with our streaming infrastructure. Because digital credentials and server bandwidth are allocated upon activation, the following refund conditions apply:
                </p>
                <div className="rounded-xl bg-[#f4e9f1]/70 p-5 border border-[#ebb0ad]/60 space-y-3">
                  <h3 className="text-[#29166f] font-semibold text-base">IPTV USA Refund Criteria:</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Requests submitted within <strong>72 hours</strong> of initial activation are eligible for review if persistent, unresolvable technical difficulties are documented.</li>
                    <li>Before a refund is processed, you agree to allow our technical support desk to assist with configuration, DNS troubleshooting, or playlist verification.</li>
                    <li>Refunds are not granted for user side ISP throttling, insufficient broadband speed, or third party device hardware failures beyond our control.</li>
                  </ul>
                </div>
                <p>
                  To request a cancellation or refund, contact us at{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#c62b27] underline hover:text-[#29166f]">
                    {siteConfig.contact.email}
                  </a>{" "}
                  with your order transaction ID and registered email address.
                </p>
              </section>

              {/* Section 4: Acceptable Use Policy */}
              <section id="acceptable-use" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">04.</span>
                  IPTV USA Acceptable Use Policy
                </h2>
                <p>
                  Subscribers are granted a personal, non exclusive, non transferable license to access the streams for private domestic viewing. The following activities are strictly prohibited and will result in immediate termination without refund:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Restreaming, rebroadcasting, redistributing, or re encoding any stream to public venues or commercial establishments.</li>
                  <li>Sharing your M3U playlist credentials across multiple IPs simultaneously exceeding your purchased connection tier.</li>
                  <li>Attempting to reverse engineer, scrape, bypass rate limits, or launch denial of service attacks against our authentication API gateways.</li>
                </ul>
              </section>

              {/* Section 5: Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">05.</span>
                  IPTV USA Intellectual Property & Trademarks
                </h2>
                <p>
                  All content, branding, typography, site designs, and software tools belonging to {siteConfig.brand.name} are the intellectual property of{" "}
                  {siteConfig.legal.companyName}.
                </p>
                <p>
                  Third party product names, logos, and trademarks (including Samsung, LG, Apple TV, Amazon Fire TV, Android, TiviMate, and others) mentioned on this website belong exclusively to their respective trademark holders. Mention of these brands does not imply endorsement, affiliation, or sponsorship, and is used strictly for device compatibility guidance.
                </p>
              </section>

              {/* Section 6: Privacy Policy */}
              <section id="privacy" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">06.</span>
                  IPTV USA Privacy Policy
                </h2>
                <p>
                  Your privacy is paramount. This Privacy Policy details the categories of personal data collected, how we process it, and your data rights in the United States:
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-[#29166f] font-semibold">IPTV USA Information Collected:</h3>
                    <p className="text-sm">
                      We collect your name, email address, payment confirmation receipts, and basic technical logs (IP address and user agent string during playlist synchronization to prevent credential sharing abuse).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#29166f] font-semibold">IPTV USA Use of Information:</h3>
                    <p className="text-sm">
                      We utilize collected data strictly to fulfill your subscription, transmit configuration files, provide customer support, and detect unauthorized security breaches.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#29166f] font-semibold">IPTV USA Information Sharing:</h3>
                    <p className="text-sm">
                      We do not sell, rent, or trade your personal information to third party advertisers or data brokers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Cookies and Analytics */}
              <section id="cookies" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">07.</span>
                  IPTV USA Cookies and Analytics
                </h2>
                <p>
                  Our website utilizes essential session cookies and privacy respecting analytics to ensure seamless page navigation, authenticate sessions, and monitor website uptime. You may disable cookies within your web browser settings; however, certain site functions may not operate as intended without essential cookies.
                </p>
              </section>

              {/* Section 8: Service Availability and Limitations */}
              <section id="availability" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">08.</span>
                  IPTV USA Service Availability and Limitations
                </h2>
                <p>
                  While our infrastructure targets 99.9% network availability, we cannot guarantee uninterrupted service due to periodic maintenance, third party internet transit interruptions, or domestic ISP bandwidth throttling. High Definition streaming requires that you maintain a stable broadband internet connection with recommended minimum speeds of 15 Mbps for HD and 30 Mbps for 4K feeds.
                </p>
              </section>

              {/* Section 9: Limitation of Liability */}
              <section id="liability" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">09.</span>
                  IPTV USA Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable law in the {siteConfig.legal.jurisdiction}, {siteConfig.brand.name} and its officers, directors, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use our services.
                </p>
                <p>
                  In no event shall our total aggregate liability exceed the total amount paid by you for the specific subscription period in dispute.
                </p>
              </section>

              {/* Section 10: Contact Information */}
              <section id="contact-info" className="scroll-mt-28 space-y-4 pt-8 border-t border-[#ebb0ad]/50">
                <h2 className="text-2xl font-bold text-[#29166f] tracking-tight flex items-center gap-2">
                  <span className="text-[#c62b27] font-mono text-lg">10.</span>
                  IPTV USA Contact Information & Notices
                </h2>
                <p>
                  For inquiries regarding these terms, privacy compliance requests, or legal notices, please contact our legal compliance team:
                </p>
                <div className="rounded-xl bg-[#f4e9f1]/70 p-6 border border-[#ebb0ad]/60 text-sm space-y-2">
                  <p className="text-[#29166f] font-semibold">{siteConfig.legal.companyName}</p>
                  <p>Legal & Compliance Department</p>
                  <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#c62b27] underline hover:text-[#29166f]">{siteConfig.contact.email}</a></p>
                  <p>Physical Address: {siteConfig.contact.address.streetAddress}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}</p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#c62b27] hover:text-[#29166f]"
                  >
                    <span>Visit our customer contact desk</span>
                    <ArrowUpRight className="w-4 h-4 text-[#c62b27]" />
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
