import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/docs");

export function getMdxBySlug(slug: string[]) {
    const filePath = path.join(CONTENT_DIR, `${slug.join("/")}.mdx`);
    const raw = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(raw);
    return { content, frontmatter: data };
}
