"use client";

import { BrandSidebar } from "@/components/brand-sidebar";
import type { NavigationCategory } from "@/components/registry/navigation-bar";
import { getBlocks, getOutSystemsComponentsByCategory, getUIPrimitives } from "@/lib/registry";

const Demo = () => {
  const blockItems = getBlocks().sort((a, b) => a.title.localeCompare(b.title));
  const osComponentsByCategory = getOutSystemsComponentsByCategory();
  const uiItems = getUIPrimitives().sort((a, b) => a.title.localeCompare(b.title));

  const gettingStartedItems = [
    { name: "/", title: "Home" },
    { name: "/tokens", title: "Design Tokens" },
  ];

  const categories: NavigationCategory[] = [
    {
      title: "Getting Started",
      items: gettingStartedItems,
    },
    {
      title: "Blocks",
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
      items: osComponentsByCategory.primitives.sort((a, b) => a.title.localeCompare(b.title)),
      pathPrefix: "/registry",
    });
  }

  if (osComponentsByCategory.layout.length > 0) {
    categories.push({
      title: "Layout",
      items: osComponentsByCategory.layout.sort((a, b) => a.title.localeCompare(b.title)),
      pathPrefix: "/registry",
    });
  }

  if (osComponentsByCategory.patterns.length > 0) {
    categories.push({
      title: "Patterns",
      items: osComponentsByCategory.patterns.sort((a, b) => a.title.localeCompare(b.title)),
      pathPrefix: "/registry",
    });
  }

  if (osComponentsByCategory.templates.length > 0) {
    categories.push({
      title: "Templates",
      items: osComponentsByCategory.templates.sort((a, b) => a.title.localeCompare(b.title)),
      pathPrefix: "/registry",
    });
  }

  return <BrandSidebar categories={categories} />;
};

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: <Demo />,
  },
};
