import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import readingTime from "reading-time";
import type { Locale } from "./i18n/config";

const BLOG_ROOT = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author?: string;
  cover?: string;
  image?: string;
  imageAlt?: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

type ReadingTimeT = { suffix: string };

function postsDir(lang: Locale) {
  return path.join(BLOG_ROOT, lang);
}

export function getAllPostSlugs(lang: Locale): string[] {
  const dir = postsDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

function readPost(lang: Locale, slug: string) {
  const dir = postsDir(lang);
  const mdx = path.join(dir, `${slug}.mdx`);
  const md = path.join(dir, `${slug}.md`);
  const file = fs.existsSync(mdx) ? mdx : md;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { data: data as PostFrontmatter, content };
}

function formatReadingTime(content: string, rt: ReadingTimeT) {
  return readingTime(content).text.replace("min read", rt.suffix);
}

export function getAllPostsMeta(lang: Locale, rt: ReadingTimeT): PostMeta[] {
  const slugs = getAllPostSlugs(lang);
  const posts = slugs.map((slug) => {
    const { data, content } = readPost(lang, slug);
    return {
      slug,
      ...data,
      readingTime: formatReadingTime(content, rt),
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRawPost(lang: Locale, slug: string): { data: PostFrontmatter; content: string } | null {
  try {
    return readPost(lang, slug);
  } catch {
    return null;
  }
}

export async function getPostBySlug(
  lang: Locale,
  slug: string,
  rt: ReadingTimeT,
): Promise<Post | null> {
  try {
    const { data, content } = readPost(lang, slug);
    const processed = await remark().use(gfm).use(html).process(content);
    return {
      slug,
      ...data,
      readingTime: formatReadingTime(content, rt),
      contentHtml: processed.toString(),
    };
  } catch {
    return null;
  }
}
