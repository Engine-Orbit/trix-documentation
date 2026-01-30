"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

type Item = { title: string; href: string };

export function SearchCommand() {
    const [open, setOpen] = React.useState(false);
    const [items, setItems] = React.useState<Item[]>([]);
    const router = useRouter();

    React.useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((v) => !v);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    React.useEffect(() => {
        fetch("/api/search")
            .then((r) => r.json())
            .then((data) => setItems(Array.isArray(data) ? data : []))
            .catch(() => setItems([]));
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="hidden md:flex w-[420px] items-center gap-2 rounded-xl border bg-card px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
            >
                <span>Search…</span>
                <span className="ml-auto text-xs">Ctrl K</span>
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search docs..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Pages">
                        {items.map((it) => (
                            <CommandItem
                                key={it.href}
                                value={it.title}
                                onSelect={() => {
                                    setOpen(false);
                                    router.push(it.href);
                                }}
                            >
                                {it.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
