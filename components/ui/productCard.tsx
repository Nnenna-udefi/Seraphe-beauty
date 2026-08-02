"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { Product } from "../types/api";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const reviewCount = product.reviewCount;
  const averageRating = product.averageRating;
  // const averageRating =
  //   reviewCount > 0
  //     ? (
  //         reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount
  //       ).toFixed(1)
  //     : null;

  const hasDiscount = Boolean(
    product.discountPrice && product.discountPrice < product.price,
  );

  return (
    <div className="group relative flex flex-col rounded-2xl border border-stone-200/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Badge */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-yellowText shadow-xs">
          {product.category.name}
        </span>
        {hasDiscount && (
          <span className="rounded-full bg-rose-500 text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider w-fit shadow-xs">
            Sale
          </span>
        )}
      </div>

      {/* Image Container */}
      <Link
        href={`/shop/products/${product.slug}`}
        className="relative h-64 w-full overflow-hidden bg-stone-50"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Body Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-2">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          {averageRating ? (
            <span className="font-medium text-stone-800">
              {averageRating}{" "}
              <span className="text-stone-400 font-normal">
                ({reviewCount})
              </span>
            </span>
          ) : (
            <span className="text-stone-400">Editor's Pick</span>
          )}
        </div>

        <Link
          href={`/shop/products/${product.slug}`}
          className="group-hover:text-yellowText transition-colors"
        >
          <h3 className="font-semibold text-stone-900 text-base line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        {product.shortDescription && (
          <p className="line-clamp-2 text-xs text-stone-500 mt-2 leading-relaxed">
            {product.shortDescription}
          </p>
        )}

        {/* Pricing & CTA */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-stone-100">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-stone-900">
              ${product.discountPrice ?? product.price}
            </span>
            {hasDiscount && (
              <span className="text-xs text-stone-400 line-through">
                ${product.price}
              </span>
            )}
          </div>

          <Link
            href={`/shop/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-yellowText hover:opacity-80 transition-opacity"
          >
            Review <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
