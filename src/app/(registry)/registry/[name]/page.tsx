import { notFound } from "next/navigation";

import { ComponentCard } from "@/components/registry/component-card";
import { getRegistryItem, getRegistryItems } from "@/lib/registry";
import { getPrompt } from "@/lib/utils";

export async function generateStaticParams() {
  const components = getRegistryItems();

  return components.map(({ name }) => ({
    name,
  }));
}

export default async function RegistryItemPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="font-bold text-3xl tracking-tight">
          {component.title}
        </h1>
      </div>

      <ComponentCard
        component={component}
        baseUrl={process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""}
        prompt={getPrompt()}
      />
    </div>
  );
}
