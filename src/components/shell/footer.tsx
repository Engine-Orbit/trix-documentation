export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-[1400px] px-4 py-4">
                <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
                    <div>
                        © {new Date().getFullYear()} Trix. All rights reserved.
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-foreground">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-foreground">
                            Terms
                        </a>
                        <a href="#" className="hover:text-foreground">
                            Support
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
