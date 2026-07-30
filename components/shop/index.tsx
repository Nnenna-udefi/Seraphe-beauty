"use client";
import React, { useState } from "react";
import { H1 } from "../ui/heading";
import { useSite } from "../helper/siteContext";
import { Product } from "../types/api";
import ProductCard from "../ui/productCard";
import { useRouter, useSearchParams } from "next/navigation";

const ShopSeraphe = ({ products }: { products: Product[] }) => {
  const { categories } = useSite();

  const searchParams = useSearchParams();
  const router = useRouter();

  const activeCategory = searchParams.get("category");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((product) => product.category.slug === activeCategory);
  return (
    <main className="min-h-screen  py-10 md:py-12 md:px-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 border-b pb-8 border-slate-200">
          <H1>
            {" "}
            {activeCategory === "All Products"
              ? "Shop"
              : `${categories.find((c) => c.slug === activeCategory)?.name} Products`}
          </H1>

          <p className="mt-4 md:text-lg text-base text-darkText max-w-2xl mx-auto">
            Shop by category
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() =>
              router.push(
                `/shop?category=${encodeURIComponent("All Products")}`,
              )
            }
            className={`px-5 py-2.5 rounded-full border text-xs md:text-sm transition-all ${
              activeCategory === "All Products"
                ? "bg-[#2E0F0A] text-white border-[#2E0F0A]"
                : "border-stone-300 hover:border-black"
            }`}
          >
            All Products
          </button>

          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() =>
                router.push(
                  `/shop?category=${encodeURIComponent(category.slug)}`,
                )
              }
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

        <div className="space-y-12">
          {/* <h2 className="font-cantataOne text-xl py-4 md:text-3xl text-black font-normal">
            Featured Products
          </h2> */}
          <div className="py-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-darkText">
              No products found in this category right now.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ShopSeraphe;
