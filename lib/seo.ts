import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface PageSeoProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.brand.description,
  path = "/",
  noIndex = false,
}: PageSeoProps = {}): Metadata {
  const url = `${siteConfig.brand.url}${path === "/" ? "" : path}`;
  const pageTitle = title
    ? (title.includes(siteConfig.brand.name) ? title : `${title} | ${siteConfig.brand.name}`)
    : `${siteConfig.brand.name} | Streaming Subscription Service`;

  return {
    title: pageTitle,
    description,
    applicationName: siteConfig.brand.name,
    authors: [{ name: siteConfig.brand.name, url: siteConfig.brand.url }],
    creator: siteConfig.brand.name,
    publisher: siteConfig.brand.name,
    metadataBase: new URL(siteConfig.brand.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.brand.locale,
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.brand.name,
      images: [
        {
          url: `${siteConfig.brand.url}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.brand.name} Streaming Subscriptions in the United States`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [`${siteConfig.brand.url}/images/og-image.jpg`],
      creator: "@iptvusa",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          url: "/apple-touch-icon-precomposed.png",
        },
      ],
    },
    manifest: "/site.webmanifest",
    verification: {
      google: "hyer0_a5uXKwiHMpAadmjiuhcwjkKr-FaNs3a2N3uAs",
    },
    other: {
      "google-site-verification": "hyer0_a5uXKwiHMpAadmjiuhcwjkKr-FaNs3a2N3uAs",
      "msapplication-TileColor": "#29166f",
      "msapplication-TileImage": "/mstile-150x150.png",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}
