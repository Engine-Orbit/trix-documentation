import { slugifyHeading } from "@/lib/slugify";

export type TocItem = { id: string; text: string; level: number };

export function getTocFromMdx(mdx: string): TocItem[] {
    return mdx
        .split("\n")
        .map((line) => line.trim())
        .map((line) => /^(#{2,4})\s+(.+)$/.exec(line))
        .filter(Boolean)
        .map((m) => {
            const level = m![1].length;
            const text = m![2].trim();
            return { id: slugifyHeading(text), text, level };
        });
}
