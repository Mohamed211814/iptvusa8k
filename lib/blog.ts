/**
 * Local blog content system for IPTV USA.
 * Structured for long term SEO growth, Google indexing, and Vercel deployment.
 *
 * TO ADD A NEW BLOG POST IN THE FUTURE:
 * 1. Add a new BlogPost entry to the `BLOG_POSTS` array below.
 * 2. Set `published: true` when ready for publication.
 * 3. The post will automatically appear on `/blog`, generate `/blog/[slug]`,
 *    and be included in `/sitemap.xml`.
 */

export interface BlogAuthor {
  name: string;
  url?: string;
  role?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string; // Markdown or clean semantic HTML content
  publishedAt: string; // ISO 8601 date string, e.g. "2026-11-01"
  updatedAt?: string; // ISO 8601 date string if modified
  author: BlogAuthor;
  image?: string;
  readingTime?: string;
  tags?: string[];
  published: boolean;
}

/**
 * Master list of blog posts.
 * Initially completely empty (no sample posts, demo cards, or fake content)
 * as required.
 */
const BLOG_POSTS: BlogPost[] = [];

/**
 * Get all published blog posts, sorted by publication date descending.
 */
export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS
    .filter((post) => post.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Get a single published post by slug.
 * Returns null if the post does not exist or is not published.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const normalizedSlug = slug.toLowerCase().trim();
  const post = BLOG_POSTS.find(
    (p) => p.slug.toLowerCase().trim() === normalizedSlug
  );

  if (!post || !post.published) {
    return null;
  }

  return post;
}

/**
 * Get all published slugs for generateStaticParams.
 */
export function getAllPostSlugs(): { slug: string }[] {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}
