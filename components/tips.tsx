"use client";

import React, { useState } from "react";
import { H1 } from "./ui/heading";

const TIPS_CATEGORIES = [
  "All",
  "Acne",
  "Hyperpigmentation",
  "Skin Aging",
  "Hydration",
];

const SKINCARE_TIPS = [
  {
    id: 1,
    title: "Managing Hormonal Acne Breakouts",
    category: "Acne",
    summary:
      "A targeted guide on using salicylic acid and niacinamide effectively without stripping the skin barrier.",
    readTime: "4 min read",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Fading Stubborn Dark Spots",
    category: "Hyperpigmentation",
    summary:
      "How to layer Vitamin C, Alpha Arbutin, and daily SPF to effectively treat post-inflammatory hyperpigmentation.",
    readTime: "5 min read",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "The Golden Rules of Retinoids",
    category: "Skin Aging",
    summary:
      "Introduce retinol safely into your evening routine to minimize fine lines while avoiding irritation and purging.",
    readTime: "6 min read",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Restoring a Damaged Moisture Barrier",
    category: "Hydration",
    summary:
      "When your skin feels tight and irritated, strip back your routine to ceramides, hyaluronic acid, and glycerin.",
    readTime: "3 min read",
    difficulty: "Beginner",
  },
];

export default function Tips() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTips =
    activeCategory === "All"
      ? SKINCARE_TIPS
      : SKINCARE_TIPS.filter((tip) => tip.category === activeCategory);

  return (
    <main className="min-h-screen text-black py-10 md:py-16 md:px-12 px-6">
      <div className="max-w-5xl mx-auto">
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
          {TIPS_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-darkText text-white border-black shadow-sm"
                  : "bg-white text-darkText border-slate-200 hover:border-slate-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Directory Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredTips.map((tip) => (
            <article
              key={tip.id}
              className="bg-white border border-boxBg rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-boxBg text-foreground">
                    {tip.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {tip.difficulty}
                  </span>
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
                  {tip.readTime}
                </span>
                <button className="text-sm font-medium text-black hover:underline">
                  Read Guide &rarr;
                </button>
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
