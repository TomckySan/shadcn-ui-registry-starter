import type { ReactNode } from "react";

import { RegistryHeader } from "@/components/registry/registry-header";
import { RegistrySidebar } from "@/components/registry/registry-sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* ヘッダ（full-width） */}
      <RegistryHeader />

      {/* メインコンテンツエリア */}
      <div className="flex flex-1 gap-6 p-6">
        {/* 左サイド: ナビゲーション */}
        <aside className="w-64 shrink-0">
          <RegistrySidebar />
        </aside>

        {/* 右サイド: メインエリア */}
        <main className="flex-1">{children}</main>
      </div>

      <Toaster />
    </div>
  );
}
