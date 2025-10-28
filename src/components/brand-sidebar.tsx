"use client";

import { NavigationBar, type NavigationCategory } from "@/components/registry/navigation-bar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BrandSidebarProps {
  categories: NavigationCategory[];
}

export function BrandSidebar({ categories }: BrandSidebarProps) {
  return (
    <div className="sticky top-0 h-[calc(100vh-8.5rem)] overflow-hidden">
      <ScrollArea className="h-full">
        <div className="py-4">
          <NavigationBar categories={categories} />
        </div>
      </ScrollArea>
    </div>
  );
}
