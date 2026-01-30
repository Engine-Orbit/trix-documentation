import fs from "node:fs";
import path from "node:path";

export type SearchItem = {
    title: string;
    href: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/docs");

function walk(dir: string): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const out: string[] = [];
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) out.push(...walk(full));
        else if (e.isFile() && e.name.endsWith(".mdx")) out.push(full);
    }
    return out;
}

function extractTitle(mdx: string) {
    // first "# " line
    const line = mdx.split("\n").find((l) => l.startsWith("# "));
    return line ? line.replace(/^#\s+/, "").trim() : "Untitled";
}

export function buildSearchIndex(): SearchItem[] {
    const files = walk(CONTENT_DIR);

    return files.map((file) => {
        const rel = path.relative(CONTENT_DIR, file).replace(/\\/g, "/");
        const slug = rel.replace(/\.mdx$/, "");
        const href = `/docs/${slug}`;
        const raw = fs.readFileSync(file, "utf8");
        const title = extractTitle(raw);
        return { title, href };
    });
}
