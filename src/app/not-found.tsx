"use client";

import { useState } from "react";
import Link from "next/link";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar, type NavigationCategory } from "@/components/brand-sidebar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { getBlocks, getUIPrimitives } from "@/lib/registry";

export default function NotFound() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const blockItems = getBlocks().sort((a, b) => a.title.localeCompare(b.title));
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

        {/* 右サイド: 404メッセージ */}
        <main className="flex h-[calc(100vh-8.5rem)] flex-1 flex-col items-center justify-center overflow-auto text-center">
          <h1 className="font-bold text-6xl text-muted-foreground tracking-tight md:text-8xl">
            404
          </h1>
          <h2 className="mt-8 font-semibold text-2xl tracking-tight md:text-3xl">
            Page Not Found
          </h2>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/r/registry.json">View Registry</Link>
            </Button>
          </div>
        </main>
      </div>

      <Toaster />
    </div>
  );
}
