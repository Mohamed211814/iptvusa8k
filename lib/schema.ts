import { siteConfig } from "./site-config";
import type { BlogPost } from "./blog";

const baseUrl = siteConfig.brand.url;
const orgId = `${baseUrl}/#organization`;
const websiteId = `${baseUrl}/#website`;

/**
 * Organization structured data
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.brand.name,
    legalName: siteConfig.legal.companyName,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: siteConfig.brand.description,
    email: siteConfig.contact.email,
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contact.email,
        ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
        areaServed: "US",
        availableLanguage: ["en"],
      },
    ],
    sameAs: [siteConfig.social.twitter, siteConfig.social.facebook],
  };
}

/**
 * WebSite structured data
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: baseUrl,
    name: siteConfig.brand.name,
    description: siteConfig.brand.description,
    inLanguage: siteConfig.brand.language,
    publisher: {
      "@id": orgId,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/#plans?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * WebPage structured data
 */
export function getWebPageSchema({
  name,
  description,
  path = "/",
  breadcrumbId,
}: {
  name: string;
  description: string;
  path?: string;
  breadcrumbId?: string;
}) {
  const pageUrl = `${baseUrl}${path === "/" ? "" : path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: siteConfig.brand.language,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": orgId,
    },
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };
}

/**
 * Service and Offers structured data for IPTV USA
 */
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#service`,
    name: "IPTV USA Streaming Subscription Service",
    serviceType: "Television Streaming Subscription",
    description:
      "IPTV USA delivers high definition digital streams across compatible Smart TVs, streaming boxes, and mobile devices in the United States.",
    provider: {
      "@id": orgId,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
      identifier: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IPTV USA Subscription Tiers",
      itemListElement: siteConfig.pricingPlans.map((plan) => ({
        "@type": "Offer",
        "@id": `${baseUrl}/#plan-${plan.id}`,
        name: `${siteConfig.brand.name} ${plan.name}`,
        description: `${plan.duration} subscription access. ${plan.features.join(". ")}.`,
        price: plan.priceUSD.toFixed(2),
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: `${baseUrl}/#plans`,
        seller: {
          "@id": orgId,
        },
      })),
    },
  };
}

/**
 * FAQPage structured data
 */
export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faqpage`,
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * ContactPage structured data
 */
export function getContactPageSchema() {
  const contactUrl = `${baseUrl}/contact`;
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${contactUrl}#contactpage`,
    url: contactUrl,
    name: `Contact ${siteConfig.brand.name} Customer Support`,
    description: `Get in touch with the ${siteConfig.brand.name} technical and sales support team for subscription questions, setup help, and account assistance.`,
    inLanguage: siteConfig.brand.language,
    isPartOf: {
      "@id": websiteId,
    },
    mainEntity: {
      "@id": orgId,
    },
  };
}

/**
 * BreadcrumbList structured data
 */
export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  const currentPath = items[items.length - 1]?.path || "/";
  const breadcrumbId = `${baseUrl}${currentPath}#breadcrumb`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/**
 * Blog CollectionPage structured data
 */
export function getBlogPageSchema() {
  const blogUrl = `${baseUrl}/blog`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${blogUrl}#collection`,
    url: blogUrl,
    name: `Blog & Streaming Guides | ${siteConfig.brand.name}`,
    description: `Articles, tutorials, and setup guides for television streaming in the United States from ${siteConfig.brand.name}.`,
    inLanguage: siteConfig.brand.language,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": orgId,
    },
  };
}

/**
 * Article / BlogPosting structured data for published blog posts
 */
export function getArticleSchema(post: BlogPost) {
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    headline: post.title,
    description: post.description,
    inLanguage: siteConfig.brand.language,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": post.author.type || "Organization",
      name: post.author.name,
      ...(post.author.url ? { url: post.author.url } : {}),
    },
    publisher: {
      "@id": orgId,
    },
    isPartOf: {
      "@id": websiteId,
    },
    ...(post.image
      ? {
          image: {
            "@type": "ImageObject",
            url: post.image.startsWith("http")
              ? post.image
              : `${baseUrl}${post.image}`,
          },
        }
      : {}),
  };
}

