import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

function parseMetadata(source: string) {
  const exportedMeta = /export const meta = \{([\s\S]*?)\};/.exec(source);
  if (exportedMeta) {
    const meta: Record<string, string> = {};
    const propertyRegex = /(title|description|date):\s*["']([^"']+)["']/g;
    let match: RegExpExecArray | null;

    while ((match = propertyRegex.exec(exportedMeta[1])) !== null) {
      meta[match[1]] = match[2];
    }

    return meta;
  }

  const match = /^---\s*([\s\S]*?)\s*---/.exec(source);
  const meta: Record<string, string> = {};

  if (!match) {
    return meta;
  }

  for (const line of match[1].split("\n")) {
    const [key, ...value] = line.split(":");
    if (key && value.length) {
      meta[key.trim()] = value.join(":").trim().replace(/^["']|["']$/g, "");
    }
  }

  return meta;
}

export function getPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const meta = parseMetadata(source);

      return {
        slug,
        title: meta.title ?? slug,
        description: meta.description ?? "",
        date: meta.date ?? new Date().toISOString()
      };
    })
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
