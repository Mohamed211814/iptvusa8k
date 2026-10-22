import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Tv,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getPostBySlug } from "@/lib/blog";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getBreadcrumbsForPost } from "@/lib/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested blog article does not exist or has been removed.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${siteConfig.brand.url}/blog/${post.slug}`;
  const pageTitle = `${post.title} | ${siteConfig.brand.name}`;
  const ogImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${siteConfig.brand.url}${post.image}`
    : `${siteConfig.brand.url}/images/og-image.jpg`;

  return {
    title: pageTitle,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: pageTitle,
      description: post.description,
      siteName: siteConfig.brand.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: post.description,
      images: [ogImage],
      creator: "@iptvusa",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbsForPost(post.title, post.slug);
  const articleSchema = getArticleSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const whatsappOrderUrl =
    "https://wa.me/212779395271?text=" +
    encodeURIComponent(
      `Hello IPTV USA, I was reading "${post.title}" on your blog and would like to order a subscription.`
    );

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <main className="min-h-screen bg-white text-[#29166f] py-12 sm:py-16 lg:py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Article Header */}
          <header className="mb-8 pb-8 border-b border-[#ebb0ad]/30">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f4e9f1] text-[#c62b27]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29166f] tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#392b6b] leading-relaxed mb-6 font-normal">
              {post.description}
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#887eaa]">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#29166f]">
                <User className="w-4 h-4 text-[#c62b27]" aria-hidden="true" />
                <span>{post.author.name}</span>
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#887eaa]" aria-hidden="true" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </span>

              {post.readingTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#887eaa]" aria-hidden="true" />
                  <span>{post.readingTime}</span>
                </span>
              )}
            </div>
          </header>

          {/* 1. TOP CALL TO ACTION BANNER */}
          <section
            aria-label="Quick order call to action"
            className="mb-10 rounded-2xl bg-[#f4e9f1]/70 border border-[#ebb0ad] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xs"
          >
            <div>
              <p className="font-bold text-[#29166f] text-sm sm:text-base">
                Ready for instant high definition streaming in the USA?
              </p>
              <p className="text-xs sm:text-sm text-[#392b6b]">
                Includes 24k+ channels, 4K VOD, and free HotPlayer app bonus.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Order on WhatsApp</span>
              </a>
              <Link
                href="/#plans"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#ebb0ad] text-[#29166f] font-bold text-xs sm:text-sm hover:bg-[#f4e9f1] transition-colors"
              >
                <span>View Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c62b27]" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ARTICLE CONTENT BODY */}
          <div className="prose prose-lg max-w-none text-[#29166f] leading-relaxed mb-12">
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* 2. MID ARTICLE CALL TO ACTION CARD */}
          <section
            aria-label="Middle article feature promotion"
            className="my-12 rounded-3xl bg-gradient-to-br from-[#29166f] to-[#1e0f52] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#ffd700] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ffd700]/30">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Special Bonus Offer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Free HotPlayer App Included with Every Subscription
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6">
                Skip complicated setups. Every order comes with personalized M3U credentials, Xtream Codes API, and the premium HotPlayer app delivered straight to your email.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Order on WhatsApp</span>
                </a>
                <Link
                  href="/#plans"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
                >
                  <span>Explore Subscription Plans</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* 3. BOTTOM CALL TO ACTION & INTERNAL LINKING SECTION */}
          <footer className="pt-10 border-t border-[#ebb0ad]/40">
            <div className="rounded-3xl bg-[#f4e9f1]/60 border border-[#ebb0ad] p-8 sm:p-10 text-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center mx-auto mb-5 shadow-xs">
                <Tv className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29166f] mb-3">
                Experience IPTV USA on Your Devices
              </h2>
              <p className="text-sm sm:text-base text-[#392b6b] leading-relaxed max-w-xl mx-auto mb-6">
                Compatible with Samsung Smart TV, LG, Firestick, Apple TV, Android Box, iOS, and PC. 99.9% uptime with 24/7 technical assistance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c62b27] to-[#e3af2a] text-white font-bold text-sm shadow-md shadow-[#c62b27]/20 hover:opacity-95 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Order on WhatsApp</span>
                </a>
                <Link
                  href="/#plans"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#ebb0ad] text-[#29166f] font-bold text-sm hover:bg-[#f4e9f1] transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-[#c62b27]" aria-hidden="true" />
                  <span>Compare Plans ($14.95 - $59.95)</span>
                </Link>
              </div>
            </div>

            {/* Internal Links Navigation */}
            <nav
              aria-label="Related website pages"
              className="rounded-2xl border border-[#ebb0ad]/40 p-6 bg-white"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#887eaa] mb-4">
                Explore IPTV USA
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#29166f] hover:text-[#c62b27] font-semibold transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c62b27]" aria-hidden="true" />
                    <span>IPTV USA Homepage</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#plans"
                    className="inline-flex items-center gap-2 text-[#29166f] hover:text-[#c62b27] font-semibold transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c62b27]" aria-hidden="true" />
                    <span>Subscription Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="inline-flex items-center gap-2 text-[#29166f] hover:text-[#c62b27] font-semibold transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c62b27]" aria-hidden="true" />
                    <span>3-Step Setup Guide</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#29166f] hover:text-[#c62b27] font-semibold transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c62b27]" aria-hidden="true" />
                    <span>24/7 Support Desk</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </footer>
        </article>
      </main>
    </>
  );
}
