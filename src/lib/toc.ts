export type TocItem = { id: string; text: string; level: number };

const slugify = (s: string) =>
    s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

export function getTocFromMdx(mdx: string): TocItem[] {
    return mdx
        .split("\n")
        .map((line) => line.trim())
        .map((line) => /^(#{2,4})\s+(.+)$/.exec(line))
        .filter(Boolean)
        .map((m) => {
            const level = m![1].length;
            const text = m![2].trim();
            return { id: slugify(text), text, level };
        });
}
