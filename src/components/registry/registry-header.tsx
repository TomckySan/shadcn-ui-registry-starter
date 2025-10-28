"use client";

import Link from "next/link";

import { RegistryLogo } from "@/components/registry/registry-logo";
import { ModeToggle } from "@/components/registry/theme-toggle";

export function RegistryHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <RegistryLogo />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
