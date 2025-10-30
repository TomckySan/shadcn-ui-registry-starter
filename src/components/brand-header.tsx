"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

import { Logo } from "./logo";

interface BrandHeaderProps {
  title?: string;
  showUser?: boolean;
}

export function BrandHeader({ title, showUser = true }: BrandHeaderProps) {
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
            {title ? (
              <h1 className="text-xl font-bold">{title}</h1>
            ) : (
              <Logo />
            )}
          </Link>
        </div>

        {showUser && (
          <div className="flex items-center gap-3">
            <div className="hidden flex-col items-end sm:flex">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
            <Avatar className="size-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </header>
  );
}
