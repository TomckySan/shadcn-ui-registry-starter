"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { OSButton } from "@/components/os-button";
import { OSCard } from "@/components/os-card";
import type { Product } from "@/lib/products";

export default function ProductGrid({
  categories,
  products,
}: { categories: string[]; products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <OSButton
          variant={selectedCategory === null ? "primary" : "secondary"}
          onClick={() => setSelectedCategory(null)}
          shape="rounded"
        >
          All
        </OSButton>

        {categories.map((category) => (
          <OSButton
            key={category}
            variant={selectedCategory === category ? "primary" : "secondary"}
            onClick={() => setSelectedCategory(category)}
            shape="rounded"
          >
            {category}
          </OSButton>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <OSCard key={product.id} className="overflow-hidden p-0">
            <Link href={`/products/${product.id}`}>
              <div className="flex aspect-square items-center justify-center bg-white p-6" />
            </Link>

            <div className="p-4">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="line-clamp-2 text-gray-500 text-sm">
                  {product.description}
                </p>
              </Link>
            </div>

            <div className="flex items-center justify-between p-4 pt-0">
              <div className="font-semibold">${product.price.toFixed(2)}</div>
              <OSButton size="small" variant="primary">
                <ShoppingCart className="mr-2 size-4" /> Add
              </OSButton>
            </div>
          </OSCard>
        ))}
      </div>
    </div>
  );
}
