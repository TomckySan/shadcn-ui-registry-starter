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
          A comprehensive overview of all design tokens used in the OutSystems UI design system
        </p>
      </div>

      {/* OutSystems UI Brand Colors */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Brand Colors</h2>
        <p className="mb-6 text-muted-foreground">
          The primary brand colors that define the OutSystems UI identity.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ColorBlock name="Primary" className="bg-[#1068eb]" />
          <ColorBlock name="Secondary" className="bg-[#303d60]" />
          <ColorBlock name="Primary Hover" className="bg-[#295fd6]" />
          <ColorBlock name="Primary Selected" className="bg-[rgba(20,110,245,.12)]" />
        </div>
      </section>

      {/* OutSystems UI Extended Palette */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Extended Palette</h2>
        <p className="mb-6 text-muted-foreground">
          A comprehensive color palette with 12 color families, each with 7 shades.
        </p>

        {/* Red */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Red</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#faeaea]" />
            <ColorBlock name="Lighter" className="bg-[#e9aaaa]" />
            <ColorBlock name="Light" className="bg-[#d96a6a]" />
            <ColorBlock name="Red" className="bg-[#c92a2a]" />
            <ColorBlock name="Dark" className="bg-[#ab2424]" />
            <ColorBlock name="Darker" className="bg-[#8d1d1d]" />
            <ColorBlock name="Darkest" className="bg-[#6f1717]" />
          </div>
        </div>

        {/* Pink */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Pink</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#fbebf0]" />
            <ColorBlock name="Lighter" className="bg-[#efadc4]" />
            <ColorBlock name="Light" className="bg-[#e27098]" />
            <ColorBlock name="Pink" className="bg-[#d6336c]" />
            <ColorBlock name="Dark" className="bg-[#b62b5c]" />
            <ColorBlock name="Darker" className="bg-[#96244c]" />
            <ColorBlock name="Darkest" className="bg-[#761c3b]" />
          </div>
        </div>

        {/* Grape */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Grape</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#f7ecfa]" />
            <ColorBlock name="Lighter" className="bg-[#dfb2e9]" />
            <ColorBlock name="Light" className="bg-[#c678d9]" />
            <ColorBlock name="Grape" className="bg-[#ae3ec9]" />
            <ColorBlock name="Dark" className="bg-[#9435ab]" />
            <ColorBlock name="Darker" className="bg-[#7a2b8d]" />
            <ColorBlock name="Darkest" className="bg-[#60226f]" />
          </div>
        </div>

        {/* Violet */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Violet</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#f1edfd]" />
            <ColorBlock name="Lighter" className="bg-[#c6b6f6]" />
            <ColorBlock name="Light" className="bg-[#9b7fef]" />
            <ColorBlock name="Violet" className="bg-[#7048e8]" />
            <ColorBlock name="Dark" className="bg-[#5f3dc5]" />
            <ColorBlock name="Darker" className="bg-[#4e32a2]" />
            <ColorBlock name="Darkest" className="bg-[#3e2880]" />
          </div>
        </div>

        {/* Indigo */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Indigo</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#eceffd]" />
            <ColorBlock name="Lighter" className="bg-[#b3c1f7]" />
            <ColorBlock name="Light" className="bg-[#7b92f1]" />
            <ColorBlock name="Indigo" className="bg-[#4263eb]" />
            <ColorBlock name="Dark" className="bg-[#3854c8]" />
            <ColorBlock name="Darker" className="bg-[#2e45a5]" />
            <ColorBlock name="Darkest" className="bg-[#243681]" />
          </div>
        </div>

        {/* Blue */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Blue</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#e8f2fa]" />
            <ColorBlock name="Lighter" className="bg-[#a3c9ea]" />
            <ColorBlock name="Light" className="bg-[#5fa1db]" />
            <ColorBlock name="Blue" className="bg-[#1a79cb]" />
            <ColorBlock name="Dark" className="bg-[#1667ad]" />
            <ColorBlock name="Darker" className="bg-[#12558e]" />
            <ColorBlock name="Darkest" className="bg-[#0e4370]" />
          </div>
        </div>

        {/* Cyan */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Cyan</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#e7f2f4]" />
            <ColorBlock name="Lighter" className="bg-[#9eccd3]" />
            <ColorBlock name="Light" className="bg-[#56a6b2]" />
            <ColorBlock name="Cyan" className="bg-[#0d8091]" />
            <ColorBlock name="Dark" className="bg-[#0b6d7b]" />
            <ColorBlock name="Darker" className="bg-[#095a66]" />
            <ColorBlock name="Darkest" className="bg-[#074650]" />
          </div>
        </div>

        {/* Teal */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Teal</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#e6f2ef]" />
            <ColorBlock name="Lighter" className="bg-[#9cccbd]" />
            <ColorBlock name="Light" className="bg-[#52a58c]" />
            <ColorBlock name="Teal" className="bg-[#087f5b]" />
            <ColorBlock name="Dark" className="bg-[#076c4d]" />
            <ColorBlock name="Darker" className="bg-[#065940]" />
            <ColorBlock name="Darkest" className="bg-[#044632]" />
          </div>
        </div>

        {/* Green */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Green</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#ebf7ed]" />
            <ColorBlock name="Lighter" className="bg-[#afe0b8]" />
            <ColorBlock name="Light" className="bg-[#73c982]" />
            <ColorBlock name="Green" className="bg-[#37b24d]" />
            <ColorBlock name="Dark" className="bg-[#2f9741]" />
            <ColorBlock name="Darker" className="bg-[#267d36]" />
            <ColorBlock name="Darkest" className="bg-[#1e622a]" />
          </div>
        </div>

        {/* Lime */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Lime</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#f1f8e8]" />
            <ColorBlock name="Lighter" className="bg-[#c7e3a2]" />
            <ColorBlock name="Light" className="bg-[#9ecd5c]" />
            <ColorBlock name="Lime" className="bg-[#74b816]" />
            <ColorBlock name="Dark" className="bg-[#639c13]" />
            <ColorBlock name="Darker" className="bg-[#51810f]" />
            <ColorBlock name="Darkest" className="bg-[#40650c]" />
          </div>
        </div>

        {/* Orange */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Orange</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#fef0e6]" />
            <ColorBlock name="Lighter" className="bg-[#fcc29c]" />
            <ColorBlock name="Light" className="bg-[#f99551]" />
            <ColorBlock name="Orange" className="bg-[#f76707]" />
            <ColorBlock name="Dark" className="bg-[#d25806]" />
            <ColorBlock name="Darker" className="bg-[#ad4805]" />
            <ColorBlock name="Darkest" className="bg-[#883904]" />
          </div>
        </div>

        {/* Yellow */}
        <div className="mb-8">
          <h3 className="mb-3 font-medium">Yellow</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            <ColorBlock name="Lightest" className="bg-[#fef5e5]" />
            <ColorBlock name="Lighter" className="bg-[#fbd999]" />
            <ColorBlock name="Light" className="bg-[#f8bc4c]" />
            <ColorBlock name="Yellow" className="bg-[#f59f00]" />
            <ColorBlock name="Dark" className="bg-[#d08700]" />
            <ColorBlock name="Darker" className="bg-[#ac6f00]" />
            <ColorBlock name="Darkest" className="bg-[#875700]" />
          </div>
        </div>
      </section>

      {/* OutSystems UI Neutral Palette */}
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

      {/* OutSystems UI Semantic Palette */}
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

      {/* OutSystems UI Typography - Font Family */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Typography (Font Family)</h2>
        <p className="mb-6 text-muted-foreground">
          System font stack for optimal performance and native look across platforms.
        </p>
        <div className="rounded border p-6">
          <div className="mb-4">
            <div className="font-medium mb-2">Base Font Family</div>
            <code className="block font-mono text-muted-foreground text-xs mb-4 break-all">
              --font-family-base: -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
            </code>
          </div>
          <div>
            <p className="text-foreground mb-2" style={{ fontFamily: 'var(--font-family-base)' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-foreground" style={{ fontFamily: 'var(--font-family-base)' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            </p>
          </div>
        </div>
      </section>

      {/* OutSystems UI Typography - Font Sizes */}
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

      {/* OutSystems UI Typography - Font Weights */}
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

      {/* OutSystems UI Border Radius */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Border Radius</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <BorderBlock name="None" className="rounded-none" type="radius" />
          <BorderBlock name="Soft" className="rounded-md" type="radius" />
          <BorderBlock name="Rounded" className="rounded-xl" type="radius" />
        </div>
      </section>

      {/* OutSystems UI Border Size */}
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

      {/* OutSystems UI Spacing */}
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

      {/* OutSystems UI Shadow */}
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
