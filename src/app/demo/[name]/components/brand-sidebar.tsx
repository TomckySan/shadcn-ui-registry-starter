"use client";

import { BrandSidebar } from "@/components/brand-sidebar";
import type { NavigationCategory } from "@/components/registry/navigation-bar";
import { getBlocks, getOutSystemsComponentsByCategory, getUIPrimitives } from "@/lib/registry";

const Demo = () => {
  const blockItems = getBlocks();
  const osComponentsByCategory = getOutSystemsComponentsByCategory();
  const uiItems = getUIPrimitives();

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

  return <BrandSidebar categories={categories} />;
};

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: <Demo />,
  },
};
