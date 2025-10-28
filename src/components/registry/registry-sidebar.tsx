"use client";

import { NavigationBar, type NavigationCategory } from "@/components/registry/navigation-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getBlocks, getOutSystemsComponentsByCategory, getUIPrimitives } from "@/lib/registry";

const blockItems = getBlocks();
const osComponentsByCategory = getOutSystemsComponentsByCategory();
const uiItems = getUIPrimitives();

const gettingStartedItems = [
  { name: "/", title: "Home" },
  { name: "/tokens", title: "Design Tokens" },
];

export function RegistrySidebar() {
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

  if (uiItems.length > 0) {
    categories.push({
      title: "UI",
      items: uiItems,
      pathPrefix: "/registry",
    });
  }

  if (osComponentsByCategory.primitives.length > 0) {
    categories.push({
      title: "Primitives",
      items: osComponentsByCategory.primitives,
      pathPrefix: "/registry",
    });
  }

  if (osComponentsByCategory.layout.length > 0) {
    categories.push({
      title: "Layout",
      items: osComponentsByCategory.layout,
      pathPrefix: "/registry",
    });
  }

  if (osComponentsByCategory.patterns.length > 0) {
    categories.push({
      title: "Patterns",
      items: osComponentsByCategory.patterns,
      pathPrefix: "/registry",
    });
  }

  if (osComponentsByCategory.templates.length > 0) {
    categories.push({
      title: "Templates",
      items: osComponentsByCategory.templates,
      pathPrefix: "/registry",
    });
  }

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
