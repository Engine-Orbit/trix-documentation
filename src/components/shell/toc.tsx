import { TocItem } from "@/lib/toc";

export function Toc({ items }: { items: TocItem[] }) {
    return (
        <div className="rounded-2xl border bg-card p-4">
            <div className="text-xs font-semibold text-muted-foreground">On this page</div>

            <div className="mt-3 space-y-2">
                {items.length === 0 ? (
                    <div className="text-sm text-muted-foreground">—</div>
                ) : (
                    items.map((h) => (
                        <a
                            key={h.id}
                            href={`#${h.id}`}
                            className="block text-sm text-muted-foreground hover:text-foreground"
                            style={{ paddingLeft: Math.max(0, (h.level - 2) * 10) }}
                        >
                            {h.text}
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}
