"use client";

import React, { useState } from "react";
import { H1 } from "./ui/heading";
import { Tips, TipsCategory } from "./types/api";
import BlogCard from "./ui/blogCard";
import { useRouter, useSearchParams } from "next/navigation";

export default function TipsPage({
  tips,
  categories,
}: {
  tips: Tips[];
  categories: TipsCategory[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "All Tips";

  const filteredTips = activeCategory
    ? tips
    : tips.filter((tip) => tip.categorySlug === activeCategory);

  return (
    <main className="min-h-screen text-black py-10 md:py-16  md:px-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 border-b pb-8 border-slate-200">
          <H1>
            {" "}
            {activeCategory === "All Tips"
              ? "Beauty Tips & Guide"
              : (categories.find((c) => c.slug === activeCategory)?.name ??
                "Beauty Tips")}
          </H1>
          <p className="mt-4 md:text-lg text-base text-darkText max-w-2xl mx-auto">
            Expert-backed advice and routines tailored to your unique skin
            concerns.
          </p>
        </div>

        {/* Categorical Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => router.push("/beauty-tips")}
            className={`px-5 py-2.5 border text-xs md:text-sm transition-all ${
              activeCategory === "All Tips"
                ? "bg-primaryBg text-white border-primaryBg"
                : "border-stone-300 hover:border-black"
            }`}
          >
            All Tips
          </button>
          {categories
            .filter((category) => category.slug !== "all")
            .map((category) => (
              <button
                key={category.slug}
                onClick={() =>
                  router.push(
                    `/beauty-tips?category=${encodeURIComponent(category.slug)}`,
                  )
                }
                className={`px-5 py-2.5 border text-xs md:text-sm transition-all ${
                  activeCategory === category.slug
                    ? "bg-primaryBg text-white border-primaryBg"
                    : "border-stone-300 hover:border-black"
                }`}
              >
                {category.name}
              </button>
            ))}
        </div>

        {/* Directory Grid */}
        <div className="py-6 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredTips.map((tip) => (
            <BlogCard
              key={tip._id}
              title={tip.title}
              category={tip.category}
              author={tip.author}
              image={tip.images[0]}
              href={`/beauty-tips/${tip.slug}`}
              buttonText="Read Tip"
            />
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-darkText">
              No tips found in this category right now.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
