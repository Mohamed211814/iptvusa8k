import React from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { getBlogPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getBreadcrumbsForPath } from "@/lib/navigation";
import { getAllPosts } from "@/lib/blog";

export const metadata = constructMetadata({
  title: "Blog & Streaming Guides",
  description:
    "Explore setup tutorials, device configurations, and technical streaming guides for United States television viewers from IPTV USA.",
  path: "/blog",
});

export default function BlogListingPage() {
  const posts = getAllPosts();
  const breadcrumbs = getBreadcrumbsForPath("/blog");
  const blogSchema = getBlogPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema]} />

      <main className="min-h-screen bg-white text-[#29166f] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4e9f1] border border-[#ebb0ad] text-[#c62b27] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              Knowledge Base
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#29166f] tracking-tight leading-tight mb-4">
              IPTV USA Blog & Streaming Guides
            </h1>
            <p className="text-base sm:text-lg text-[#392b6b] leading-relaxed">
              In-depth technical tutorials, device compatibility walk-throughs, and setup guides engineered for United States television viewers.
            </p>
          </div>

          {/* Articles Listing or Clean Empty State */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl bg-white border border-[#ebb0ad]/60 p-6 flex flex-col justify-between hover:border-[#e3af2a] hover:shadow-xl hover:shadow-[#29166f]/5 transition-all duration-300"
                >
                  <div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#f4e9f1] text-[#c62b27]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="text-xl font-bold text-[#29166f] mb-3 hover:text-[#c62b27] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-sm text-[#392b6b]/90 leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#ebb0ad]/30 flex items-center justify-between text-xs text-[#887eaa]">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </time>
                      </span>
                      {post.readingTime && (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{post.readingTime}</span>
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#c62b27] hover:text-[#29166f] transition-colors"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Clean, Minimal Empty State (no fake posts or placeholder SEO content) */
            <div className="rounded-3xl bg-[#f4e9f1]/50 border border-[#ebb0ad]/60 p-8 sm:p-14 text-center max-w-2xl mx-auto my-8">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#ebb0ad] text-[#c62b27] flex items-center justify-center mx-auto mb-6 shadow-xs">
                <BookOpen className="w-8 h-8 stroke-[1.8]" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-[#29166f] mb-3">
                No Articles Published Yet
              </h2>
              <p className="text-sm sm:text-base text-[#392b6b] leading-relaxed mb-8 max-w-lg mx-auto">
                We are actively preparing technical streaming guides, device setup tutorials, and troubleshooting tips. Newly published articles will appear here automatically.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#plans"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c62b27] to-[#e3af2a] text-white font-bold text-sm shadow-md shadow-[#c62b27]/20 hover:opacity-95 transition-opacity"
                >
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Explore Subscription Plans</span>
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white border border-[#ebb0ad] text-[#29166f] font-bold text-sm hover:bg-[#f4e9f1] transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
