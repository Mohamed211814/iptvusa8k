import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getBreadcrumbsForPost } from "@/lib/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return getAllPostSlugs();
}

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
  const seoTitle = post.seoTitle || post.title;
  const ogTitle = post.ogTitle || seoTitle;
  const ogDescription = post.ogDescription || post.description;
  const ogImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${siteConfig.brand.url}${post.image}`
    : `${siteConfig.brand.url}/images/og-image.jpg`;

  return {
    title: seoTitle,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: ogTitle,
      description: ogDescription,
      siteName: siteConfig.brand.name,
      locale: "en_US",
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
      title: ogTitle,
      description: ogDescription,
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

          {/* ARTICLE CONTENT BODY (Contains exactly the three specified CTA buttons) */}
          <div className="prose prose-lg max-w-none text-[#29166f] leading-relaxed mb-12">
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Internal Links Navigation (Links only to verified existing website sections) */}
          <footer className="pt-10 border-t border-[#ebb0ad]/40">
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
                    href="/#pricing"
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
