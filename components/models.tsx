"use client";
import Image from "next/image";
import { H1 } from "./ui/heading";

import React, { useState } from "react";

// Categories inspired by premier high-fashion directory structures
const DIRECTORY_CATEGORIES = [
  "All",
  "Top Icons",
  "The Hot List",
  "New Faces",
  "Runway Elite",
];

const Seraphé_MODELS = [
  {
    id: 1,
    name: "Amina Bello",
    category: "Top Icons",
    rank: "Industry Icon",
    stats: {
      height: "179 cm / 5'10.5\"",
      bust: "81 cm",
      waist: "60 cm",
      hips: "88 cm",
    },
    motherAgency: "Seraphé Elite (Lagos)",
    featuredIn: "Vogue, Chanel, Seraphé Editorial Autumn",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    id: 2,
    name: "Elena Rostova",
    category: "The Hot List",
    rank: "Trending",
    stats: {
      height: "180 cm / 5'11\"",
      bust: "82 cm",
      waist: "59 cm",
      hips: "89 cm",
    },
    motherAgency: "Seraphé Milan",
    featuredIn: "Prada, Dior, Harper's Bazaar Cover",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    id: 3,
    name: "Chidi Okafor",
    category: "Runway Elite",
    rank: "Top Tier",
    stats: {
      height: "188 cm / 6'2\"",
      chest: "96 cm",
      waist: "76 cm",
      collar: "38 cm",
    },
    motherAgency: "Seraphé Elite (Lagos)",
    featuredIn: "Louis Vuitton, Balenciaga, Paris Fashion Week",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    id: 4,
    name: "Maya Lin",
    category: "New Faces",
    rank: "Rising Star",
    stats: {
      height: "177 cm / 5'9.5\"",
      bust: "79 cm",
      waist: "58 cm",
      hips: "86 cm",
    },
    motherAgency: "Seraphé Tokyo",
    featuredIn: "Seraphé Cruise 2026, Dazed Magazine",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600&h=800",
  },
];

export default function Models() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredModels =
    activeCategory === "All"
      ? Seraphé_MODELS
      : Seraphé_MODELS.filter((model) => model.category === activeCategory);

  return (
    <main className="min-h-screen text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Editorial Brand Header */}
        <div className="text-center mb-16 border-b border-neutral-200 pb-12">
          <span className="text-xs uppercase tracking-widest text-yellowText font-semibold">
            Seraphé Collective
          </span>
          <H1>Seraphé Models</H1>
          <p className="mt-4 text-md font-light text-neutral-500 max-w-xl mx-auto uppercase tracking-wide">
            Curating global breakthroughs and generation-defining faces.
          </p>
        </div>

        {/* Navigation Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {DIRECTORY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Roster Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredModels.map((model) => (
            <article
              key={model.id}
              className="group bg-white border border-neutral-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-neutral-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-3/4 w-full bg-neutral-100 overflow-hidden">
                <Image
                  src={model.imagePlaceholder}
                  alt={model.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-neutral-950/90 text-white backdrop-blur-xs">
                    {model.rank}
                  </span>
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mb-1">
                    {model.category}
                  </div>
                  <h2 className="text-xl font-serif font-normal text-neutral-950 mb-4 group-hover:text-neutral-700 cursor-pointer transition-colors duration-200">
                    {model.name}
                  </h2>

                  {/* Quick Stats Grid */}
                  <div className="border-t border-b border-neutral-100 py-3 my-3 text-[11px] text-neutral-500 font-mono tracking-tight space-y-1">
                    <div>
                      <span className="text-neutral-400 uppercase font-sans font-bold inline-block w-12">
                        HT:
                      </span>{" "}
                      {model.stats.height}
                    </div>
                    <div>
                      <span className="text-neutral-400 uppercase font-sans font-bold inline-block w-12">
                        {model.stats.bust ? "BUST:" : "CHEST:"}
                      </span>
                      {model.stats.bust || model.stats.chest}
                    </div>
                    <div>
                      <span className="text-neutral-400 uppercase font-sans font-bold inline-block w-12">
                        WAIST:
                      </span>{" "}
                      {model.stats.waist}
                    </div>
                  </div>

                  <p className="text-neutral-400 text-[11px] leading-relaxed mb-4 italic line-clamp-1">
                    {model.featuredIn}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-50">
                  <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                    {model.motherAgency}
                  </span>
                  <button className="text-xs font-bold uppercase tracking-widest text-white p-2 bg-primaryBg hover:text-neutral-500 transition-colors duration-200">
                    View Portfolio &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State Exception handling */}
        {filteredModels.length === 0 && (
          <div className="text-center py-20 border border-dashed border-neutral-200 bg-white">
            <p className="text-neutral-400 text-sm tracking-wider uppercase">
              No active placements found in this placement tier.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
