"use client";

import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { NavigationCategory } from "@/components/brand-sidebar";

const demoCategories: NavigationCategory[] = [
  {
    title: "Getting Started",
    items: [
      { name: "introduction", title: "Introduction" },
      { name: "installation", title: "Installation" },
      { name: "quick-start", title: "Quick Start" },
    ],
    pathPrefix: "/docs",
  },
  {
    title: "Components",
    items: [
      { name: "button", title: "Button" },
      { name: "card", title: "Card" },
      { name: "dialog", title: "Dialog" },
      { name: "dropdown", title: "Dropdown", disabled: true },
    ],
    pathPrefix: "/components",
  },
  {
    title: "Resources",
    name: "resources",
    items: [],
    pathPrefix: "/docs",
  },
];

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: (
      <div className="w-full h-[600px] p-8">
        <div className="max-w-sm mx-auto h-full border rounded-lg overflow-hidden">
          <SidebarProvider>
            <BrandSidebar categories={demoCategories} />
          </SidebarProvider>
        </div>
      </div>
    ),
  },
};
