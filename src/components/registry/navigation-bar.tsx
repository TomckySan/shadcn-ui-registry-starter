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
      {categories.map((category) => (
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
      ))}
    </div>
  );
}
