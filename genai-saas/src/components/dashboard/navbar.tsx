"use client";

import { ModeToggle } from "@/components/theme-Toggle";
import { Button } from "@/components/ui/button";

export function DashboardNavbar() {
  return (
    <header className="w-full h-16 border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button variant="outline" size="sm">
          Logout
        </Button>
      </div>
    </header>
  );
}
