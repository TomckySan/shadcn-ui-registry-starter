"use client";

import type { ReactNode } from "react";

import { RegistryHeader } from "@/components/registry/registry-header";
import { RegistrySidebar } from "@/components/registry/registry-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col">
        <RegistryHeader />

        <div className="flex flex-1 gap-6 p-6">
          <aside className="hidden h-[calc(100vh-8.5rem)] w-52 shrink-0 overflow-hidden lg:block">
            <RegistrySidebar />
          </aside>

          <main className="h-[calc(100vh-8.5rem)] flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
