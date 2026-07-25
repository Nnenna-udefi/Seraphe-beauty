"use client";
import React, { useState } from "react";
import { H1, H3 } from "../ui/heading";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useSite } from "../helper/siteContext";
import { Product } from "../types/api";
import { Star } from "lucide-react";

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
              <div
                key={product.name}
                className="group rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className=" pt-2">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs uppercase tracking-wider text-yellowText">
                    {product.category.name}
                  </span>
                  <H3 className="mt-3 line-clamp-2">{product.name}</H3>
                  <p className="line-clamp-3 text-sm text-darkText">
                    {product.shortDescription}
                  </p>
                  <div className="flex py-3 justify-between">
                    <p className="text-xl font-semibold">${product.price}</p>
                    <Star className="fill-yellow-400 text-yellow-400" />
                    4.8
                  </div>

                  <Link href={`/shop/products/${product.slug}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopSeraphe;
