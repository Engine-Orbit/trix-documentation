import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/callout";
import { DocCard, DocCardGrid } from "@/components/mdx/doc-cards";
import { slugifyHeading } from "@/lib/slugify";

function getText(children: any): string {
    if (typeof children === "string") return children;
    if (Array.isArray(children)) return children.map(getText).join("");
    if (children?.props?.children) return getText(children.props.children);
    return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        Callout,
        DocCard,
        DocCardGrid,

        h2: ({ children, ...props }) => {
            const text = getText(children);
            const id = slugifyHeading(text);
            return (
                <h2 id={id} {...props}>
                    {children}
                </h2>
            );
        },
        h3: ({ children, ...props }) => {
            const text = getText(children);
            const id = slugifyHeading(text);
            return (
                <h3 id={id} {...props}>
                    {children}
                </h3>
            );
        },
        h4: ({ children, ...props }) => {
            const text = getText(children);
            const id = slugifyHeading(text);
            return (
                <h4 id={id} {...props}>
                    {children}
                </h4>
            );
        },

        ...components,
    };
}
