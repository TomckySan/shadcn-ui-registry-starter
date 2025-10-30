"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar, type NavigationCategory } from "@/components/brand-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";

export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const blockItems = getBlocks().sort((a, b) => a.title.localeCompare(b.title));
  const componentItems = getComponents()
    .map((item) => ({
      ...item,
      disabled: ["login", "logo", "brand-sidebar"].includes(item.name),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
  const enabledUIPrimitives = [
    "accordion", "alert", "avatar", "badge", "breadcrumb",
    "button", "card", "checkbox", "input", "radio", "select", "separator",
    "tabs", "textarea", "toggle-group", "tooltip", 
  ];
  const uiItems = getUIPrimitives()
    .map((item) => ({
      ...item,
      disabled: !enabledUIPrimitives.includes(item.name),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  const gettingStartedItems = [
    { name: "/", title: "Home" },
    // { name: "/tokens", title: "Design Tokens" },
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

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* ヘッダ（full-width） */}
      <BrandHeader
        title="OutSystems UI Registry"
        showUser={false}
        onMenuClick={() => setSidebarOpen(true)}
      />

      {/* メインコンテンツエリア */}
      <div className="flex flex-1 gap-6 p-6">
        {/* 左サイド: ナビゲーション */}
        <aside className="hidden w-52 shrink-0 lg:block">
          <BrandSidebar
            categories={categories}
            open={sidebarOpen}
            onOpenChange={setSidebarOpen}
          />
        </aside>

        {/* 右サイド: メインエリア */}
        <main className="h-[calc(100vh-8.5rem)] flex-1 overflow-auto">{children}</main>
      </div>

      <Toaster />
    </div>
  );
}
