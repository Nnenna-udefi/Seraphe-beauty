"use client";

import React, { useState } from "react";
import { H1 } from "./ui/heading";
import { Tips, TipsCategory } from "./types/api";
import Link from "next/link";

export default function TipsPage({
  tips,
  categories,
}: {
  tips: Tips[];
  categories: TipsCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTips =
    activeCategory === "all"
      ? tips
      : tips.filter((tip) => tip.categorySlug === activeCategory);

  return (
    <main className="min-h-screen text-black py-10 md:py-16  md:px-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <H1>Beauty Tips & Guide</H1>
          <p className="mt-4 text-lg text-darkText max-w-2xl mx-auto">
            Expert-backed advice and routines tailored to your unique skin
            concerns.
          </p>
        </div>

        {/* Categorical Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {/* <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full border text-xs md:text-sm transition-all ${
              activeCategory === "all"
                ? "bg-[#2E0F0A] text-white border-[#2E0F0A]"
                : "border-stone-300 hover:border-black"
            }`}
          /> */}

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
          {/* {TIPS_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-boxBg text-black border-darkText shadow-sm"
                  : "bg-white text-darkText border-slate-200 hover:border-slate-400"
              }`}
            >
              {category}
            </button>
          ))} */}
        </div>

        {/* Directory Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredTips.map((tip) => (
            <article
              key={tip.title}
              className="bg-white border border-boxBg rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-boxBg text-foreground">
                    {tip.category}
                  </span>
                  {/* <span className="text-xs text-slate-400 font-medium">
                    {tip.difficulty}
                  </span> */}
                </div>
                <h2 className="text-xl font-semibold text-black mb-2 hover:darkText cursor-pointer">
                  {tip.title}
                </h2>
                <p className="text-darkText text-sm leading-relaxed mb-6">
                  {tip.summary}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <span className="text-xs text-darkText font-medium">
                  {tip.readTimeMinutes} min read
                </span>
                <Link href={`/beauty-tips/${tip.slug}`}>
                  <button className="text-sm bg-primaryBg p-2 font-medium text-white hover:underline">
                    Read Guide &rarr;
                  </button>
                </Link>
              </div>
            </article>
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
