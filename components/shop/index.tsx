"use client";
import React, { useState } from "react";
import { H1 } from "../ui/heading";
import { useSite } from "../helper/siteContext";
import { Product } from "../types/api";
import ProductCard from "../ui/productCard";

const ShopSeraphe = ({ products }: { products: Product[] }) => {
  const { categories } = useSite();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category.slug === activeCategory);
  return (
    <main className="min-h-screen  py-12 md:px-12 px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <H1>Shop</H1>
        <div>
          <h3 className="font-cantataOne py-4 text-lg md:text-lg">
            Shop by category:
          </h3>
          <div className="flex flex-wrap gap-3 pb-10">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-5 py-2.5 rounded-full border text-xs md:text-sm transition-all ${
                  activeCategory === category.slug
                    ? "bg-[#2E0F0A] text-white border-[#2E0F0A]"
                    : "border-stone-300 hover:border-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="font-cantataOne text-xl py-4 md:text-3xl text-black font-normal">
            Featured Products
          </h2>
          <div className="py-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopSeraphe;
