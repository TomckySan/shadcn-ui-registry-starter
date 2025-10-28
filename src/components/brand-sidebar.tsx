"use client";

import { NavigationBar, type NavigationCategory } from "@/components/ui/navigation-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface BrandSidebarProps {
  categories: NavigationCategory[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function BrandSidebar({ categories, open, onOpenChange }: BrandSidebarProps) {
  const sidebarContent = (
    <ScrollArea className="h-full">
      <div className="py-4">
        <NavigationBar categories={categories} />
      </div>
    </ScrollArea>
  );

  return (
    <>
      {/* デスクトップ表示 */}
      <div className="sticky top-0 hidden h-[calc(100vh-8.5rem)] overflow-hidden lg:block">
        {sidebarContent}
      </div>

      {/* モバイル表示（Sheet） */}
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="h-full pt-12">
            {sidebarContent}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
