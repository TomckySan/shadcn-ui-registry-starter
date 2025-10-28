"use client";

import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import React, { type ReactNode, useState } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import type { NavigationCategory } from "@/components/registry/navigation-bar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { getBlocks, getOutSystemsComponentsByCategory, getUIPrimitives } from "@/lib/registry";

import "@/app/globals.css";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const MontserratSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <body>
        <div className="flex min-h-screen w-full flex-col">
          {/* ヘッダ（full-width） */}
          <BrandHeader onMenuClick={() => setSidebarOpen(true)} />

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
      </body>
    </html>
  );
}
