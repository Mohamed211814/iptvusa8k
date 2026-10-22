import React from "react";
import { constructMetadata } from "@/lib/seo";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getWebPageSchema,
  getServiceSchema,
  getFaqSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Features } from "@/components/home/Features";
import { Pricing } from "@/components/home/Pricing";
import { Devices } from "@/components/home/Devices";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = constructMetadata({
  title: "IPTV USA | Streaming Subscription Service",
  description:
    "IPTV USA delivers reliable, high definition streaming subscriptions tailored for United States viewers. Enjoy seamless streaming across Smart TVs, Firestick, mobile devices, and computers with 24/7 dedicated support.",
  path: "/",
});

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const pageSchema = getWebPageSchema({
    name: "IPTV USA: Premium Television Streaming Subscription Service",
    description:
      "IPTV USA delivers reliable, high definition streaming subscriptions tailored for United States viewers with multi device compatibility and 24/7 support.",
    path: "/",
  });
  const serviceSchema = getServiceSchema();
  const faqSchema = getFaqSchema();

  return (
    <>
      {/* Search Engine Structured Data (JSON-LD) */}
      <JsonLd
        data={[
          orgSchema,
          websiteSchema,
          pageSchema,
          serviceSchema,
          faqSchema,
        ]}
      />

      <main className="min-h-screen bg-white text-[#29166f] flex flex-col">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Subscription Plans (Directly accessible for fast ordering) */}
        <Pricing />

        {/* Section 3: Trust and Service Highlights */}
        <Services />

        {/* Section 4: About IPTV USA */}
        <About />

        {/* Section 5: Features */}
        <Features />

        {/* Section 6: Supported Devices */}
        <Devices />

        {/* Section 7: How It Works */}
        <HowItWorks />

        {/* Section 8: Frequently Asked Questions */}
        <FAQ />

        {/* Section 9: Final CTA */}
        <FinalCTA />
      </main>
    </>
  );
}
