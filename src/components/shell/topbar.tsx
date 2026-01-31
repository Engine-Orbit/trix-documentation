"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchCommand } from "@/components/search-command";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";

import { Menu, X } from "lucide-react";
import { Sidebar } from "./sidebar";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Topbar() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4">
                {/* Mobile menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>

                    {/* IMPORTANT: showCloseButton={false} removes the default close button */}
                    <SheetContent side="left" showCloseButton={false} className="w-[320px] p-0">
                        {/* Accessible title required by Radix */}
                        <VisuallyHidden>
                            <SheetTitle>Documentation navigation</SheetTitle>
                        </VisuallyHidden>

                        <div className="relative p-4 pt-12">
                            {/* Custom close button */}
                            <SheetClose asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 top-4 rounded-xl"
                                    aria-label="Close menu"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </SheetClose>

                            <Sidebar />
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {mounted && (
                        <Image
                            src={resolvedTheme === "dark" ? "/trix-logo-white.png" : "/trix-logo-black.png"}
                            alt="Trix"
                            width={28}
                            height={28}
                            priority
                        />
                    )}
                </Link>

                {/* Search */}
                <div className="ml-2 flex-1">
                    <SearchCommand />
                </div>

                {/* Right actions */}
                <div className="ml-auto flex items-center gap-2">
                    <Link
                        href="#"
                        className="hidden sm:block text-sm text-muted-foreground hover:text-foreground"
                    >
                        Support
                    </Link>

                    <Button
                        className="
              rounded-xl
              bg-black text-white
              dark:bg-white dark:text-black
              hover:opacity-90
            "
                    >
                        Dashboard
                    </Button>

                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}
