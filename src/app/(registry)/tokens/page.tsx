"use client";

import type React from "react";

import { ColorBlock } from "./color-block";
import { TypographyBlock } from "./typography-block";
import { BorderBlock } from "./border-block";
import { SpacingBlock } from "./spacing-block";
import { ShadowBlock } from "./shadow-block";

export default function TokensPage() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="font-bold text-3xl tracking-tight">Design Tokens</h1>
        <p className="mt-1 text-muted-foreground">
          A comprehensive overview of all design tokens used in the ROUTE06 UI design system
        </p>
      </div>

      {/* Font Family */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Font Family</h2>
        <p className="mb-6 text-muted-foreground">
          System font stack for optimal performance and native look across platforms.
        </p>
        <div className="rounded border p-6">
          <div className="mb-4">
            <p className="text-foreground mb-2" style={{ fontFamily: 'var(--font-family-base)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <code className="block font-mono text-muted-foreground text-xs mb-4 break-all">
              --font-family-base: -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
            </code>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Brand Colors</h2>
        <p className="mb-6 text-muted-foreground">
          The primary brand colors that define the ROUTE06 UI identity.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ColorBlock name="Primary" className="bg-[#1068eb]" />
          <ColorBlock name="Secondary" className="bg-[#303d60]" />
          <ColorBlock name="Primary Hover" className="bg-[#295fd6]" />
          <ColorBlock name="Primary Selected" className="bg-[rgba(20,110,245,.12)]" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Extended Palette</h2>
        <p className="mb-6 text-muted-foreground">
          A comprehensive color palette with 12 color families, each with 7 shades.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Neutral Palette</h2>
        <p className="mb-6 text-muted-foreground">
          A 11-level neutral color scale from white to black.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <ColorBlock name="Neutral 0" className="bg-[#ffffff]" />
          <ColorBlock name="Neutral 1" className="bg-[#f8f9fa]" />
          <ColorBlock name="Neutral 2" className="bg-[#f1f3f5]" />
          <ColorBlock name="Neutral 3" className="bg-[#e9ecef]" />
          <ColorBlock name="Neutral 4" className="bg-[#dee2e6]" />
          <ColorBlock name="Neutral 5" className="bg-[#ced4da]" />
          <ColorBlock name="Neutral 6" className="bg-[#adb5bd]" />
          <ColorBlock name="Neutral 7" className="bg-[#6a7178]" />
          <ColorBlock name="Neutral 8" className="bg-[#4f575e]" />
          <ColorBlock name="Neutral 9" className="bg-[#272b30]" />
          <ColorBlock name="Neutral 10" className="bg-[#101213]" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Semantic Colors</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used to convey meaning and provide feedback to users.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ColorBlock name="Error Light" className="bg-[#fceaea]" />
          <ColorBlock name="Error" className="bg-[#dc2020]" />
          <ColorBlock name="Warning Light" className="bg-[#fdf6e5]" />
          <ColorBlock name="Warning" className="bg-[#e9a100]" />
          <ColorBlock name="Success Light" className="bg-[#eaf3eb]" />
          <ColorBlock name="Success" className="bg-[#29823b]" />
          <ColorBlock name="Info Light" className="bg-[#e5f5fc]" />
          <ColorBlock name="Info" className="bg-[#017aad]" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Typography (Font Sizes)</h2>
        <p className="mb-6 text-muted-foreground">
          Responsive font size scale for different text hierarchies.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <TypographyBlock name="Display" className="font-size-display" type="size" />
          <TypographyBlock name="Heading 1" className="heading1" type="size" />
          <TypographyBlock name="Heading 2" className="heading2" type="size" />
          <TypographyBlock name="Heading 3" className="heading3" type="size" />
          <TypographyBlock name="Heading 4" className="heading4" type="size" />
          <TypographyBlock name="Heading 5" className="heading5" type="size" />
          <TypographyBlock name="Heading 6" className="heading6" type="size" />
          <TypographyBlock name="Base" className="font-size-base" type="size" />
          <TypographyBlock name="Small" className="font-size-s" type="size" />
          <TypographyBlock name="Extra Small" className="font-size-xs" type="size" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Typography (Font Weights)</h2>
        <p className="mb-6 text-muted-foreground">
          Font weight variations for emphasis and hierarchy.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TypographyBlock name="Light (300)" className="font-light" type="weight" />
          <TypographyBlock name="Regular (400)" className="font-regular" type="weight" />
          <TypographyBlock name="Semi Bold (600)" className="font-semi-bold" type="weight" />
          <TypographyBlock name="Bold (700)" className="font-bold" type="weight" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Border Radius</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <BorderBlock name="None" className="rounded-none" type="radius" />
          <BorderBlock name="Soft" className="rounded-md" type="radius" />
          <BorderBlock name="Rounded" className="rounded-xl" type="radius" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Border Size</h2>
        <p className="mb-6 text-muted-foreground">
          Border width scale for different emphasis levels.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <BorderBlock name="None" className="border-size-none" type="size" />
          <BorderBlock name="Small" className="border-size-s" type="size" />
          <BorderBlock name="Medium" className="border-size-m" type="size" />
          <BorderBlock name="Large" className="border-size-l" type="size" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Spacing Scale</h2>
        <p className="mb-6 text-muted-foreground">
          8px-based spacing scale for consistent layout and positioning.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SpacingBlock name="None (0px)" size="none" />
          <SpacingBlock name="XS (4px)" size="xs" />
          <SpacingBlock name="S (8px)" size="s" />
          <SpacingBlock name="Base (16px)" size="base" />
          <SpacingBlock name="M (24px)" size="m" />
          <SpacingBlock name="L (32px)" size="l" />
          <SpacingBlock name="XL (40px)" size="xl" />
          <SpacingBlock name="XXL (48px)" size="xxl" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Shadow Scale</h2>
        <p className="mb-6 text-muted-foreground">
          Elevation levels for creating depth and hierarchy.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ShadowBlock name="None" className="shadow-none" />
          <ShadowBlock name="Extra Small" className="shadow-xs" />
          <ShadowBlock name="Small" className="shadow-s" />
          <ShadowBlock name="Medium" className="shadow-m" />
          <ShadowBlock name="Large" className="shadow-l" />
          <ShadowBlock name="Extra Large" className="shadow-xl" />
        </div>
      </section>
    </div>
  );
}
