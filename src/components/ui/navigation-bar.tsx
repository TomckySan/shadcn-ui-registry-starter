"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export interface NavigationItem {
  name: string;
  title: string;
}

export interface NavigationCategory {
  title: string;
  name?: string;
  items: NavigationItem[];
  pathPrefix?: string;
}

export interface NavigationBarProps {
  categories: NavigationCategory[];
}

export function NavigationBar({ categories }: NavigationBarProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-4">
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

                return (
                  <Link
                    key={item.name}
                    href={itemPath}
                    className={cn(
                      "block pl-4 text-sm hover:text-blue-600 hover:underline",
                      isActive
                        ? "font-medium text-blue-600"
                        : "text-foreground"
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
}
