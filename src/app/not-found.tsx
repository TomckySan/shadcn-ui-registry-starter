import Link from "next/link";

import { RegistryHeader } from "@/components/registry/registry-header";
import { RegistrySidebar } from "@/components/registry/registry-sidebar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

export default function NotFound() {
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

        {/* 右サイド: 404メッセージ */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">
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
