"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { RegistryLogo } from "@/components/registry/registry-logo";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export function RegistryHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            semantic="cancel"
            size="small"
            shape="soft"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="size-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <RegistryLogo />
          </Link>
        </div>
      </div>
    </header>
  );
}
