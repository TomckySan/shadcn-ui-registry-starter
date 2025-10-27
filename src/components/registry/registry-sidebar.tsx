"use client";

import {
  Blocks,
  Box,
  ChevronDown,
  Component,
  Home,
  Layout,
  Layers,
  Menu,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { RegistryLogo } from "@/components/registry/registry-logo";
import { ModeToggle } from "@/components/registry/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { getBlocks, getOutSystemsComponentsByCategory, getUIPrimitives } from "@/lib/registry";

const blockItems = getBlocks();
const osComponentsByCategory = getOutSystemsComponentsByCategory();
const uiItems = getUIPrimitives();

export const gettingStartedItems = [
  { title: "Home", path: "/" },
  { title: "Design Tokens", path: "/tokens" },
];

export function MobileSidebarTrigger() {
  const { setOpenMobile } = useSidebar();

  return (
    <div className="absolute top-8 right-4 md:hidden">
      <Button aria-label="Open menu" onClick={() => setOpenMobile(true)}>
        <Menu className="size-5" />
      </Button>
    </div>
  );
}

export function RegistrySidebar() {
  const pathname = usePathname();

  const { setOpenMobile } = useSidebar();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlocks, setFilteredBlocks] = useState(blockItems);
  const [filteredUIPrimitives, setFilteredUIPrimitives] = useState(uiItems);
  const [filteredOSPrimitives, setFilteredOSPrimitives] = useState(osComponentsByCategory.primitives);
  const [filteredOSLayout, setFilteredOSLayout] = useState(osComponentsByCategory.layout);
  const [filteredOSPatterns, setFilteredOSPatterns] = useState(osComponentsByCategory.patterns);
  const [filteredOSTemplates, setFilteredOSTemplates] = useState(osComponentsByCategory.templates);

  useEffect(() => {
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      setFilteredBlocks(
        blockItems.filter((item) => item.title.toLowerCase().includes(search)),
      );
      setFilteredUIPrimitives(
        uiItems.filter((item) => item.title.toLowerCase().includes(search)),
      );
      setFilteredOSPrimitives(
        osComponentsByCategory.primitives.filter((item) => item.title.toLowerCase().includes(search)),
      );
      setFilteredOSLayout(
        osComponentsByCategory.layout.filter((item) => item.title.toLowerCase().includes(search)),
      );
      setFilteredOSPatterns(
        osComponentsByCategory.patterns.filter((item) => item.title.toLowerCase().includes(search)),
      );
      setFilteredOSTemplates(
        osComponentsByCategory.templates.filter((item) => item.title.toLowerCase().includes(search)),
      );
    } else {
      setFilteredBlocks(blockItems);
      setFilteredUIPrimitives(uiItems);
      setFilteredOSPrimitives(osComponentsByCategory.primitives);
      setFilteredOSLayout(osComponentsByCategory.layout);
      setFilteredOSPatterns(osComponentsByCategory.patterns);
      setFilteredOSTemplates(osComponentsByCategory.templates);
    }
  }, [searchTerm]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between px-2 py-2">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <RegistryLogo />
          </Link>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setOpenMobile(false)}
          >
            <X />
          </Button>
        </div>
        <div className="px-2 py-2 opacity-100 transition-all duration-200">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="h-full w-full pr-2">
          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="flex min-w-0 items-center">
                    <Home className="size-4 flex-shrink-0" />
                    <span className="ml-2 opacity-100 transition-all duration-200">
                      Getting Started
                    </span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 opacity-100 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {gettingStartedItems.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.path}
                        >
                          <Link
                            onClick={() => setOpenMobile(false)}
                            href={item.path}
                          >
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* Blocks */}
          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="flex min-w-0 items-center">
                    <Blocks className="size-4 flex-shrink-0" />
                    <span className="ml-2 transition-all duration-200">
                      Blocks
                    </span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredBlocks.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.name}
                        >
                          <Link
                            onClick={() => setOpenMobile(false)}
                            href={`/registry/${item.name}`}
                          >
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* UI */}
          {filteredUIPrimitives.length > 0 && (
            <Collapsible defaultOpen={true} className="group/collapsible">
              <SidebarGroup>
                <CollapsibleTrigger className="w-full">
                  <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                    <div className="flex min-w-0 items-center">
                      <Component className="size-4 flex-shrink-0" />
                      <span className="ml-2 transition-all duration-200">UI</span>
                    </div>
                    <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {filteredUIPrimitives.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}

          {/* Primitives */}
          {filteredOSPrimitives.length > 0 && (
            <Collapsible defaultOpen={true} className="group/collapsible">
              <SidebarGroup>
                <CollapsibleTrigger className="w-full">
                  <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                    <div className="flex min-w-0 items-center">
                      <Box className="size-4 flex-shrink-0" />
                      <span className="ml-2 transition-all duration-200">Primitives</span>
                    </div>
                    <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {filteredOSPrimitives.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}

          {/* Layout */}
          {filteredOSLayout.length > 0 && (
            <Collapsible defaultOpen={true} className="group/collapsible">
              <SidebarGroup>
                <CollapsibleTrigger className="w-full">
                  <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                    <div className="flex min-w-0 items-center">
                      <Layout className="size-4 flex-shrink-0" />
                      <span className="ml-2 transition-all duration-200">Layout</span>
                    </div>
                    <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {filteredOSLayout.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}

          {/* Patterns */}
          {filteredOSPatterns.length > 0 && (
            <Collapsible defaultOpen={true} className="group/collapsible">
              <SidebarGroup>
                <CollapsibleTrigger className="w-full">
                  <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                    <div className="flex min-w-0 items-center">
                      <Layers className="size-4 flex-shrink-0" />
                      <span className="ml-2 transition-all duration-200">Patterns</span>
                    </div>
                    <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {filteredOSPatterns.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}

          {/* Templates */}
          {filteredOSTemplates.length > 0 && (
            <Collapsible defaultOpen={true} className="group/collapsible">
              <SidebarGroup>
                <CollapsibleTrigger className="w-full">
                  <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                    <div className="flex min-w-0 items-center">
                      <Component className="size-4 flex-shrink-0" />
                      <span className="ml-2 transition-all duration-200">Templates</span>
                    </div>
                    <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {filteredOSTemplates.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )}

        </ScrollArea>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
