"use client";

import { useEffect } from "react";
import Link from "next/link";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import type { NavigationCategory } from "@/components/registry/navigation-bar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { getBlocks, getOutSystemsComponentsByCategory, getUIPrimitives } from "@/lib/registry";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* ヘッダ（full-width） */}
      <BrandHeader title="OutSystems UI Registry" showUser={false} />

      {/* メインコンテンツエリア */}
      <div className="flex flex-1 gap-6 p-6">
        {/* 左サイド: ナビゲーション */}
        <aside className="w-64 shrink-0">
          <BrandSidebar categories={categories} />
        </aside>

        {/* 右サイド: エラーメッセージ */}
        <main className="flex h-[calc(100vh-8.5rem)] flex-1 flex-col items-center justify-center overflow-auto text-center">
          <h1 className="font-bold text-6xl text-muted-foreground tracking-tight md:text-8xl">
            500
          </h1>
          <h2 className="mt-4 font-bold text-2xl tracking-tight md:text-3xl">
            Something went wrong
          </h2>
          <div className="mt-6 flex gap-3">
            <Button onClick={reset}>Try Again</Button>
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
