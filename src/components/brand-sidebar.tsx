"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export interface NavigationItem {
  name: string;
  title: string;
  disabled?: boolean;
}

export interface NavigationCategory {
  title: string;
  name?: string;
  items: NavigationItem[];
  pathPrefix?: string;
}

interface BrandSidebarProps {
  categories?: NavigationCategory[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DEFAULT_CATEGORIES: NavigationCategory[] = [
  {
    title: "Getting Started",
    items: [
      { name: "/", title: "Home" },
    ],
  },
];

export function BrandSidebar({ categories, open, onOpenChange }: BrandSidebarProps) {
  const pathname = usePathname();
  const navigationCategories = categories || DEFAULT_CATEGORIES;

  const navigationContent = (
    <div className="space-y-4">
      {navigationCategories.map((category) => {
        // itemsが空の場合、カテゴリタイトル自体をリンクとして表示
        if (category.items.length === 0 && category.name) {
          const categoryPath = category.pathPrefix
            ? `${category.pathPrefix}/${category.name}`
            : category.name;
          const isActive = pathname === categoryPath;

          return (
            <Link
              key={category.title}
              href={categoryPath}
              className={cn(
                "block text-sm hover:text-blue-600 hover:underline",
                isActive
                  ? "font-medium text-blue-600"
                  : "text-foreground"
              )}
            >
              {category.title}
            </Link>
          );
        }

        // itemsがある場合は階層表示
        return (
          <div key={category.title}>
            <div className="mb-2 text-sm font-semibold text-muted-foreground">
              {category.title}
            </div>
            <div className="space-y-1">
              {category.items.map((item) => {
                const itemPath = category.pathPrefix
                  ? `${category.pathPrefix}/${item.name}`
                  : item.name;
                const isActive = pathname === itemPath;
                const isDisabled = item.disabled;

                return (
                  <Link
                    key={item.name}
                    href={isDisabled ? "#" : itemPath}
                    onClick={(e) => {
                      if (isDisabled) {
                        e.preventDefault();
                      }
                    }}
                    className={cn(
                      "block pl-4 text-sm",
                      isDisabled
                        ? "cursor-not-allowed text-muted-foreground/50 opacity-50"
                        : isActive
                        ? "font-medium text-blue-600"
                        : "text-foreground hover:text-blue-600 hover:underline"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  const sidebarContent = (
    <ScrollArea className="h-full">
      <div className="py-4">
        {navigationContent}
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
