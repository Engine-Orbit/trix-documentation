"use client";

export function SearchCommand() {
    return (
        <div className="hidden md:flex w-[420px] items-center rounded-xl border bg-card px-3 py-2 text-sm text-muted-foreground">
            Search… <span className="ml-auto text-xs">Ctrl K</span>
        </div>
    );
}
