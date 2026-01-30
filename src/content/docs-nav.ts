export type NavItem = { title: string; href: string };
export type NavGroup = { title: string; items: NavItem[] };

export const docsNav: NavGroup[] = [
    {
        title: "Quick Start",
        items: [
            { title: "Welcome to Trix", href: "/docs/user-guides/quick-start/introduction" },
            { title: "Build Your First AI Agent", href: "/docs/user-guides/quick-start/first-agent" },
            { title: "Best Practices", href: "/docs/user-guides/quick-start/best-practices" },
        ],
    },
    {
        title: "AI Agent Management",
        items: [
            { title: "Playground", href: "/docs/user-guides/agent/playground" },
            { title: "Data Sources", href: "/docs/user-guides/agent/data-sources" },
            { title: "Deploy", href: "/docs/user-guides/agent/deploy" },
            { title: "Settings", href: "/docs/user-guides/agent/settings" },
            { title: "Actions", href: "/docs/user-guides/agent/actions" },
            { title: "Contacts", href: "/docs/user-guides/agent/contacts" },
        ],
    },
    {
        title: "Analytics & Monitoring",
        items: [
            { title: "Activity", href: "/docs/user-guides/analytics/activity" },
            { title: "Analytics", href: "/docs/user-guides/analytics/overview" },
        ],
    },
];
