"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/content/docs-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="rounded-2xl border bg-card">
            <div className="px-4 py-3">
                <div className="text-sm font-semibold">User Guide</div>
                <div className="text-xs text-muted-foreground">Docs • Help & Support</div>
            </div>

            <Separator />

            <ScrollArea className="h-[calc(100vh-140px)]">
                <div className="p-2">
                    {docsNav.map((group) => (
                        <div key={group.title} className="mb-4">
                            <div className="px-2 py-2 text-xs font-semibold text-muted-foreground">
                                {group.title}
                            </div>

                            <div className="space-y-1">
                                {group.items.map((item) => {
                                    const active = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "block rounded-xl px-2 py-2 text-sm transition-colors",
                                                active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
