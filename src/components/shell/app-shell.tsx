import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { Toc } from "./toc";
import { TocItem } from "@/lib/toc";
import { Footer } from "./footer";

export function AppShell({
    children,
    toc,
}: {
    children: React.ReactNode;
    toc: TocItem[];
}) {
    return (
        <div className="min-h-dvh bg-background flex flex-col">
            {/* Top navigation */}
            <Topbar />

            {/* Main content area */}
            <div className="flex-1">
                <div className="mx-auto max-w-[1400px] px-4">
                    <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-[280px_1fr_260px]">
                        {/* Left sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-20 py-0">
                                <Sidebar />
                            </div>
                        </aside>

                        {/* Main content */}
                        <main className="min-w-0">{children}</main>

                        {/* Right TOC */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-20 py-6">
                                <Toc items={toc} />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
