import { AppShell } from "@/components/shell/app-shell";
import { getMdxBySlug } from "@/lib/mdx";
import { getTocFromMdx } from "@/lib/toc";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function DocsPage({ params }: { params: { slug?: string[] } }) {
    const slug = params.slug ?? ["user-guides", "quick-start", "introduction"];
    const { content } = getMdxBySlug(slug);
    const toc = getTocFromMdx(content);

    return (
        <AppShell toc={toc}>
            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote source={content} />
            </article>
        </AppShell>
    );
}
