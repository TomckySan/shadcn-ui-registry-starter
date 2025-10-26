#!/usr/bin/env node

/**
 * OutSystems UI Registry Generator
 *
 * このスクリプトは outsystems-patterns.json から registry.json を自動生成します
 *
 * 使い方:
 *   node scripts/generate-registry.js
 */

const fs = require('fs');
const path = require('path');

// ファイルパス
const PATTERNS_FILE = path.join(__dirname, 'outsystems-patterns.json');
const REGISTRY_FILE = path.join(__dirname, '..', 'registry.json');
const GLOBALS_CSS_FILE = path.join(__dirname, '..', 'src', 'app', 'globals.css');

// パターン定義を読み込む
function loadPatterns() {
  const data = fs.readFileSync(PATTERNS_FILE, 'utf8');
  return JSON.parse(data);
}

// 既存のregistry.jsonを読み込む
function loadRegistry() {
  const data = fs.readFileSync(REGISTRY_FILE, 'utf8');
  return JSON.parse(data);
}

// テーマアイテムを生成
function generateThemeItem(themeConfig) {
  const { light, dark } = themeConfig.colors;

  // 既存のベースカラーを維持しつつ、プライマリ系を上書き
  const baseLight = {
    "background": "oklch(0.97 0.01 80.72)",
    "foreground": "oklch(0.3 0.04 30.2)",
    "card": "oklch(0.97 0.01 80.72)",
    "card-foreground": "oklch(0.3 0.04 30.2)",
    "popover": "oklch(0.97 0.01 80.72)",
    "popover-foreground": "oklch(0.3 0.04 30.2)",
    "muted": "oklch(0.94 0.01 74.42)",
    "muted-foreground": "oklch(0.45 0.05 39.21)",
    "destructive": "oklch(0.54 0.19 26.72)",
    "destructive-foreground": "oklch(1.0 0 0)",
    "border": "oklch(0.88 0.02 74.64)",
    "input": "oklch(0.88 0.02 74.64)",
    "radius": "0.5rem"
  };

  const baseDark = {
    "background": "oklch(0.15 0.01 74.42)",
    "foreground": "oklch(0.95 0.02 80.72)",
    "card": "oklch(0.12 0.01 80.72)",
    "card-foreground": "oklch(0.95 0.02 80.72)",
    "popover": "oklch(0.12 0.01 80.72)",
    "popover-foreground": "oklch(0.95 0.02 80.72)",
    "muted": "oklch(0.18 0.01 74.42)",
    "muted-foreground": "oklch(0.65 0.03 74.42)",
    "destructive": "oklch(0.62 0.22 26.72)",
    "destructive-foreground": "oklch(0.95 0.02 80.72)",
    "border": "oklch(0.22 0.02 74.64)",
    "input": "oklch(0.22 0.02 74.64)",
    "radius": "0.5rem"
  };

  return {
    "name": "theme",
    "type": "registry:theme",
    "title": themeConfig.name,
    "description": themeConfig.description,
    "cssVars": {
      "light": {
        ...baseLight,
        "primary": light.primary,
        "primary-foreground": "oklch(1.0 0 0)",
        "secondary": light.secondary,
        "secondary-foreground": "oklch(0.52 0.12 250)",
        "accent": light.accent,
        "accent-foreground": "oklch(0.52 0.12 250)",
        "ring": light.primary,
        "chart-1": "oklch(0.72 0.18 250)",
        "chart-2": "oklch(0.65 0.16 250)",
        "chart-3": "oklch(0.58 0.15 250)",
        "chart-4": "oklch(0.48 0.12 250)",
        "chart-5": "oklch(0.35 0.08 250)",
        "sidebar": "oklch(0.94 0.01 74.42)",
        "sidebar-foreground": "oklch(0.3 0.04 30.2)",
        "sidebar-primary": light.primary,
        "sidebar-primary-foreground": "oklch(1.0 0 0)",
        "sidebar-accent": light.accent,
        "sidebar-accent-foreground": "oklch(0.52 0.12 250)",
        "sidebar-border": "oklch(0.88 0.02 74.64)",
        "sidebar-ring": light.primary
      },
      "dark": {
        ...baseDark,
        "primary": dark.primary,
        "primary-foreground": "oklch(0.09 0.01 80.72)",
        "secondary": dark.secondary,
        "secondary-foreground": "oklch(0.70 0.15 250)",
        "accent": dark.accent,
        "accent-foreground": "oklch(0.70 0.15 250)",
        "ring": dark.primary,
        "chart-1": "oklch(0.75 0.20 250)",
        "chart-2": "oklch(0.68 0.18 250)",
        "chart-3": "oklch(0.65 0.18 250)",
        "chart-4": "oklch(0.55 0.14 250)",
        "chart-5": "oklch(0.40 0.10 250)",
        "sidebar": "oklch(0.15 0.01 74.42)",
        "sidebar-foreground": "oklch(0.95 0.02 80.72)",
        "sidebar-primary": dark.primary,
        "sidebar-primary-foreground": "oklch(0.09 0.01 80.72)",
        "sidebar-accent": dark.accent,
        "sidebar-accent-foreground": "oklch(0.70 0.15 250)",
        "sidebar-border": "oklch(0.22 0.02 74.64)",
        "sidebar-ring": dark.primary
      }
    },
    "dependencies": ["radix-ui"],
    "files": [
      {
        "path": "src/app/globals.css",
        "type": "registry:style",
        "target": "app/globals.css"
      },
      {
        "path": "postcss.config.mjs",
        "type": "registry:file",
        "target": "postcss.config.mjs"
      }
    ]
  };
}

// パターンアイテムを生成
function generatePatternItem(pattern, registry) {
  const registryUrl = registry.homepage || 'https://shadcn-ui-registry-starter-gray.vercel.app';

  return {
    "name": pattern.name,
    "type": "registry:component",
    "title": pattern.title,
    "description": pattern.description,
    "registryDependencies": [
      pattern.baseComponent !== "custom" ? pattern.baseComponent : null,
      `${registryUrl}/r/theme.json`
    ].filter(Boolean),
    "files": [
      {
        "path": `src/components/${pattern.name}.tsx`,
        "type": "registry:component"
      }
    ]
  };
}

// registry.jsonを生成
function generateRegistry() {
  console.log('📋 Loading patterns...');
  const patternsData = loadPatterns();

  console.log('📖 Loading existing registry...');
  const existingRegistry = loadRegistry();

  console.log('🎨 Generating theme item...');
  const themeItem = generateThemeItem(patternsData.theme);

  console.log('🔨 Generating pattern items...');
  const patternItems = [];
  patternsData.patterns.forEach(category => {
    category.items.forEach(pattern => {
      patternItems.push(generatePatternItem(pattern, existingRegistry));
    });
  });

  // 新しいregistry.jsonを構築
  const newRegistry = {
    "$schema": "https://ui.shadcn.com/schema/registry.json",
    "name": existingRegistry.name,
    "homepage": existingRegistry.homepage,
    "items": [
      themeItem,
      ...patternItems,
      // 既存のUIコンポーネント（accordion, alert等）を保持
      ...existingRegistry.items.filter(item =>
        item.type === "registry:ui" ||
        item.type === "registry:block" ||
        (item.name !== "theme" && !patternItems.find(p => p.name === item.name))
      )
    ]
  };

  console.log('💾 Writing registry.json...');
  fs.writeFileSync(
    REGISTRY_FILE,
    JSON.stringify(newRegistry, null, 2),
    'utf8'
  );

  console.log('✅ Registry generated successfully!');
  console.log(`   - Theme: ${themeItem.title}`);
  console.log(`   - Patterns: ${patternItems.length} items`);
  console.log(`   - Total items: ${newRegistry.items.length}`);
}

// メイン実行
try {
  generateRegistry();
} catch (error) {
  console.error('❌ Error generating registry:', error.message);
  process.exit(1);
}
