"use client";

import type { NavigationCategory } from "@/components/brand-sidebar";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { getBlocks, getUIPrimitives, getComponents } from "@/lib/registry";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const blockItems = getBlocks();
const componentItems = getComponents();
const uiItems = getUIPrimitives();

const gettingStartedItems = [
  { name: "/", title: "Home" },
];

export function RegistrySidebar() {
  const pathname = usePathname();

  const categories: NavigationCategory[] = [
    {
      title: "Getting Started",
      items: gettingStartedItems,
    },
    {
      title: "Layouts",
      items: blockItems,
      pathPrefix: "/registry",
    },
  ];

  if (componentItems.length > 0) {
    categories.push({
      title: "Components",
      items: componentItems.filter((item) => item.name !== "brand-sidebar"),
      pathPrefix: "/registry",
    });
  }

  if (uiItems.length > 0) {
    categories.push({
      title: "UI Primitives",
      items: uiItems,
      pathPrefix: "/registry",
    });
  }

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
      </SidebarContent>
    </Sidebar>
  );
}
