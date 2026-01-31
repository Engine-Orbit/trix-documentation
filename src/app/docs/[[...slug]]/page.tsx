import { AppShell } from "@/components/shell/app-shell";
import { getMdxBySlug } from "@/lib/mdx";
import { getTocFromMdx } from "@/lib/toc";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export default async function DocsPage({
    params,
}: {
    params: { slug?: string[] };
}) {
    const slug = params.slug ?? ["user-guides", "quick-start", "introduction"];
    const { content } = getMdxBySlug(slug);
    const toc = getTocFromMdx(content);

    return (
        <AppShell toc={toc}>
            <article
                className="
          prose prose-invert max-w-none
          prose-headings:scroll-mt-24
          prose-h1:text-4xl prose-h1:font-semibold
          prose-h2:text-2xl prose-h2:font-semibold
          prose-h3:text-xl prose-h3:font-semibold
          prose-p:text-muted-foreground
          prose-a:text-foreground prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground
          prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-2xl
        "
            >
                <MDXRemote source={content} components={useMDXComponents({})} />
            </article>
        </AppShell>
    );
}
