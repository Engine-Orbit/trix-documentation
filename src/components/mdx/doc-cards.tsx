import { cn } from "@/lib/utils";

export function DocCardGrid({ children }: { children: React.ReactNode }) {
    return <div className="my-6 grid gap-4 md:grid-cols-3">{children}</div>;
}

export function DocCard({
    title,
    description,
    className,
}: {
    title: string;
    description: string;
    className?: string;
}) {
    return (
        <div className={cn("rounded-2xl border bg-card p-5", className)}>
            <div className="font-semibold">{title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{description}</div>
        </div>
    );
}
