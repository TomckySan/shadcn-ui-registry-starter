"use client";

import { NavigationBar, type NavigationCategory } from "@/components/registry/navigation-bar";

// フラットなメニュー（親項目のみ）
const flatMenuItems: NavigationCategory[] = [
  { title: "Dashboard", name: "#dashboard", items: [] },
  { title: "Requests", name: "#requests", items: [] },
  { title: "Settings", name: "#settings", items: [] },
];

// 階層メニュー（カテゴリ + 子項目）
const hierarchicalMenuItems: NavigationCategory[] = [
  {
    title: "Getting Started",
    items: [
      { name: "/", title: "Home" },
      { name: "/tokens", title: "Design Tokens" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "#button", title: "Button" },
      { name: "#card", title: "Card" },
      { name: "#input", title: "Input" },
    ],
  },
];

const FlatDemo = () => {
  return (
    <div className="w-64 rounded-md border p-4">
      <h3 className="mb-4 font-semibold text-sm">Flat Menu</h3>
      <NavigationBar categories={flatMenuItems} />
    </div>
  );
};

const HierarchicalDemo = () => {
  return (
    <div className="w-64 rounded-md border p-4">
      <h3 className="mb-4 font-semibold text-sm">Hierarchical Menu</h3>
      <NavigationBar categories={hierarchicalMenuItems} />
    </div>
  );
};

export const navigationBar = {
  name: "navigation-bar",
  components: {
    "Flat Menu": <FlatDemo />,
    "Hierarchical Menu": <HierarchicalDemo />,
  },
};
