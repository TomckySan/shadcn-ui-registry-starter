"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

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
  categories: NavigationCategory[];
}

export function BrandSidebar({ categories }: BrandSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="none">
      <SidebarContent>
        <div className="space-y-4 p-4">
          {categories.map((category) => {
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
      </SidebarContent>
    </Sidebar>
  );
}
