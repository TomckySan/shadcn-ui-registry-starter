import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[name]/index";

import { Renderer } from "@/app/demo/[name]/renderer";
import { getRegistryItem } from "@/lib/registry";

export async function generateStaticParams() {
  return Object.keys(demos).map((name) => ({
    name,
  }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  // Check if demo exists for this component
  const demo = demos[name];

  if (!demo) {
    // Component exists in registry but demo is not yet implemented
    return (
      <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-4 bg-card p-8">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold">{component.title || name}</h1>
          <p className="text-muted-foreground">
            {component.description || "Demo page for this component is coming soon."}
          </p>
          <div className="rounded-lg border bg-muted/50 p-4 text-sm">
            <p className="font-mono">Component: {name}</p>
            <p className="text-muted-foreground mt-2">
              The component is registered but the demo implementation is not yet available.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { components } = demo;

  return (
    <div className="flex h-[100vh] w-full flex-col gap-4 bg-card">
      {components &&
        Object.entries(components).map(([key, node]) => (
          <div className="relative w-full" key={key}>
            <Renderer>{node}</Renderer>
          </div>
        ))}
    </div>
  );
}
