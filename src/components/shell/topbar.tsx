"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchCommand } from "@/components/search-command";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export function Topbar() {
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
                    <SheetContent side="left" className="w-[320px] p-4">
                        <Sidebar />
                    </SheetContent>
                </Sheet>

                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <div className="grid h-7 w-7 place-items-center rounded-lg border bg-card">
                        T
                    </div>
                    Trix
                </Link>

                <div className="ml-2 flex-1">
                    <SearchCommand />
                </div>

                <div className="ml-auto flex items-center gap-2">
                    <Link href="#" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground">
                        Support
                    </Link>
                    <Button variant="secondary" className="rounded-xl">
                        Dashboard
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}
