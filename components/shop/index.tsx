"use client";
import React from "react";
import { H1, H3 } from "../ui/heading";
import { productCardBlock, shopItems } from "../lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

const ShopSeraphe = () => {
  const pathname = usePathname();
  return (
    <main className="min-h-screen  py-12 px-4 md:px-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <H1>Shop</H1>
        <div>
          <h3 className="font-cantataOne py-4 text-lg md:text-lg">
            Shop by category:
          </h3>
          <div className="flex flex-wrap gap-3">
            {shopItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`px-5 py-2.5 rounded-full border text-xs md:text-sm transition-all duration-200 flex items-center gap-2 tracking-wide font-medium ${
                    isActive
                      ? "bg-[#2E0F0A] border-[#2E0F0A] text-white"
                      : "border-stone-300 text-foreground hover:border-black"
                  }`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="font-cantataOne text-xl pb-4 md:text-3xl text-black font-normal">
            Featured Products
          </h2>
          <div className="max-w-full w-full md:w-100">
            {productCardBlock.map((product) => (
              <div key={product.id} className="flex flex-col gap-1">
                <div className=" pt-2">
                  <Image
                    src={product.img}
                    alt="model"
                    width={300}
                    height={0}
                    className="max-w-full  "
                  />
                </div>
                <div>
                  <h3 className="uppercase text-yellowText text-sm pt-2">
                    {product.category}
                  </h3>
                  <H3>{product.name}</H3>
                  <p className=" text-darkText text-sm py-2">
                    {product.descSum}
                  </p>
                  <Button className="max-w-full">{product.price}</Button>
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
