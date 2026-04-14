import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

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

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

function readPost(slug: string) {
  const mdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const md = path.join(POSTS_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx) ? mdx : md;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { data: data as PostFrontmatter, content };
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const { data, content } = readPost(slug);
    return {
      slug,
      ...data,
      readingTime: readingTime(content).text.replace("min read", "min de lectura"),
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { data, content } = readPost(slug);
    const processed = await remark().use(gfm).use(html).process(content);
    return {
      slug,
      ...data,
      readingTime: readingTime(content).text.replace("min read", "min de lectura"),
      contentHtml: processed.toString(),
    };
  } catch {
    return null;
  }
}
