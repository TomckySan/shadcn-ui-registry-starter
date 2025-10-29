import { ArrowRight, Blocks, Box, Component, Layout, Layers, Square } from "lucide-react";
import Link from "next/link";

import { MCPTabs } from "@/components/registry/mcp-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlocks } from "@/lib/registry";

const blockItems = getBlocks().slice(0, 5);

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight md:text-4xl">
            OutSystems UI Registry
          </h1>
          <p className="text-muted-foreground">
            Distribute your design system tokens, custom components, hooks,
            pages, and other files to any React project.
          </p>
        </div>
      </div>

{/*
      <Card className="mb-4 shadow-none">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle>Blocks</CardTitle>
            <div className="rounded-md bg-primary p-1">
              <Blocks className="size-5 text-primary-foreground" />
            </div>
          </div>
          <CardDescription>
            Pre-built blocks kits for consistent, repeatable generations
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">
            {blockItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <Link
                  href={`/registry/${item.name}`}
                  className="text-sm hover:underline"
                >
                  {item.title}
                </Link>
                <ArrowRight className="size-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
*/}

{/*
      <div className="mb-4 rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">MCP</h2>
          <p className="mb-4 text-muted-foreground">
            Integrate this registry with AI IDEs using Model Context Protocol
            (MCP) using the following configuration. This utilizes this
            Registry's theme tokens and CSS variables with the Shadcn CLI. To
            ensure this works, double check that the{" "}
            <Link href="/r/registry.json">
              <code className="inline text-sm tabular-nums underline">
                style:theme
              </code>
            </Link>{" "}
            contains the same colors as your{" "}
            <code className="inline text-sm tabular-nums">tokens.css</code>
          </p>

          <MCPTabs rootUrl={process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""} />
        </div>
      </div>
*/}

      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">About</h2>
          <p className="text-muted-foreground">
            このレジストリは、<a href="https://outsystemsui.outsystems.com/" className="underline" target="_blank" rel="noreferrer">OutSystems UI</a>をベースとしたコンポーネントを提供しています。<br />
            各コンポーネントとブロックには例とドキュメントが含まれており、カテゴリー別にコンポーネントを閲覧できます。<br />
          </p>
          <p className="mt-2 text-muted-foreground">
            使い始めるには <a href="/registry/dashboard" className="underline">Dashboard Block</a> ページを開き、<span className="font-bold">Open in v0</span>ボタンをクリックしてください。<br />
          </p>

          <p className="mt-4 text-[#1B1F23] dark:text-white">
            <a href="/#">
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                role="graphics-symbol"
                className="mr-1 inline size-4 fill-[#1B1F23] dark:fill-white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                />
              </svg>
              <span className="underline">GitHub Repository</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
