"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/toc";

export function Toc({ items }: { items: TocItem[] }) {
    const [activeId, setActiveId] = React.useState<string>("");

    React.useEffect(() => {
        if (!items.length) return;

        const headings = items
            .map((i) => document.getElementById(i.id))
            .filter(Boolean) as HTMLElement[];

        if (!headings.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // pick the most visible intersecting heading
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

                if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
            },
            {
                root: null,
                // top offset: treat heading as "active" a bit after it passes the top bar
                rootMargin: "-96px 0px -70% 0px",
                threshold: [0.1, 0.2, 0.4, 0.6, 0.8, 1],
            }
        );

        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, [items]);

    return (
        <div className="rounded-2xl border bg-card p-4">
            <div className="text-xs font-semibold text-muted-foreground">On this page</div>

            <div className="mt-3 space-y-2">
                {items.length === 0 ? (
                    <div className="text-sm text-muted-foreground">—</div>
                ) : (
                    items.map((h) => {
                        const isActive = h.id === activeId;
                        return (
                            <a
                                key={h.id}
                                href={`#${h.id}`}
                                className={cn(
                                    "block text-sm transition-colors",
                                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                                style={{ paddingLeft: Math.max(0, (h.level - 2) * 10) }}
                            >
                                {h.text}
                            </a>
                        );
                    })
                )}
            </div>
        </div>
    );
}
