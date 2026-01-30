import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

type CalloutType = "info" | "warning" | "success";

const styles: Record<CalloutType, string> = {
    info: "border-blue-500/20 bg-blue-500/10",
    warning: "border-yellow-500/20 bg-yellow-500/10",
    success: "border-emerald-500/20 bg-emerald-500/10",
};

const icons: Record<CalloutType, any> = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle2,
};

export function Callout({
    type = "info",
    title,
    children,
}: {
    type?: CalloutType;
    title?: string;
    children: React.ReactNode;
}) {
    const Icon = icons[type];
    return (
        <div className={cn("my-6 rounded-2xl border p-4", styles[type])}>
            <div className="flex gap-3">
                <Icon className="mt-0.5 h-5 w-5" />
                <div>
                    {title && <div className="font-semibold">{title}</div>}
                    <div className="mt-1 text-sm text-muted-foreground">{children}</div>
                </div>
            </div>
        </div>
    );
}
