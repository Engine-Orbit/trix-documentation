"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    // Avoid hydration mismatch: render nothing until client mounted
    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled>
                <span className="h-4 w-4" />
            </Button>
        );
    }

    const isDark = (resolvedTheme ?? theme) === "dark";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
    );
}
