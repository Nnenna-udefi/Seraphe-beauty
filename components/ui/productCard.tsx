"use client";

import Image from "next/image";
import Link from "next/link";
// import { Star } from "lucide-react";

import { Product } from "../types/api";
import { Button } from "./button";
import { H3 } from "./heading";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // const reviews = product.reviews ?? [];

  // const reviewCount = reviews.length;

  // const averageRating =
  //   reviewCount > 0
  //     ? (
  //         reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount
  //       ).toFixed(1)
  //     : null;

  return (
    <div className="group rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={500}
          height={500}
          className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs uppercase tracking-wider text-yellowText">
          {product.category.name}
        </span>

        <H3 className="mt-3 line-clamp-2">{product.name}</H3>

        <p className="line-clamp-3 text-sm text-darkText mt-2">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-semibold">
            ${product.discountPrice ?? product.price}
          </p>
          {/* 
          <div className="flex items-center gap-1 text-sm">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            {averageRating ? (
              <>
                <span>{averageRating}</span>
                <span className="text-gray-400">
                  ({reviewCount})
                </span>
              </>
            ) : (
              <span className="text-gray-400">
                No reviews
              </span>
            )}
          </div> */}
        </div>

        <Link href={`/shop/products/${product.slug}`}>
          <Button className="mt-5 w-full">View Details</Button>
        </Link>
      </div>
    </div>
  );
}
