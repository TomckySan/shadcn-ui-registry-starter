"use client";

import { BrandSidebar, type NavigationCategory } from "@/components/brand-sidebar";
import { getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";

const Demo = () => {
  const blockItems = getBlocks().sort((a, b) => a.title.localeCompare(b.title));
  const componentItems = getComponents().sort((a, b) => a.title.localeCompare(b.title));
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

  if (componentItems.length > 0) {
    categories.push({
      title: "Components",
      items: componentItems,
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

  return <BrandSidebar categories={categories} />;
};

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: <Demo />,
  },
};
