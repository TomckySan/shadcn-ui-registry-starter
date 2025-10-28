"use client";

import { NavigationBar, type NavigationCategory } from "@/components/ui/navigation-bar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getBlocks, getOutSystemsComponentsByCategory, getUIPrimitives } from "@/lib/registry";

const blockItems = getBlocks().filter((item) => item.name !== "blank");
const osComponentsByCategory = getOutSystemsComponentsByCategory();
const uiItems = getUIPrimitives();

const gettingStartedItems = [
  { name: "/", title: "Home" },
  { name: "/tokens", title: "Design Tokens" },
];

export function RegistrySidebarCard() {
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
    <Card className="sticky top-0 h-[calc(100vh-8.5rem)] overflow-hidden">
      <CardContent className="h-full p-0">
        <ScrollArea className="h-full">
          <div className="p-4">
            <NavigationBar categories={categories} />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
