"use client";

import Link from "next/link";
import { Home, Upload, FileText, Settings } from "lucide-react";

export function Sidebar() {
  const links = [
    { label: "Dashboard", icon: Home, href: "/dashboard" },
    { label: "Upload / Summarize", icon: Upload, href: "/dashboard/upload" },
    { label: "Saved Summaries", icon: FileText, href: "/dashboard/summary" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-card p-4 flex flex-col gap-4 min-h-screen">
      <h2 className="text-xl font-bold text-center mb-6">MySummary</h2>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex items-center gap-2 p-2 rounded hover:bg-accent hover:text-accent-foreground"
        >
          <link.icon size={20} />
          {link.label}
        </Link>
      ))}
    </aside>
  );
}
