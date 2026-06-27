"use client";

import React, { useState } from "react";
import { H1 } from "./ui/heading";
import { AnimatePresence, motion } from "framer-motion";

const TRENDS = [
  {
    id: 1,
    title: "The Rise of Neurocosmetics",
    subtitle: "Connecting Mind and Skin Barrier",
    description:
      "Explore how topicals formulated to address skin-stress responses are changing the high-end beauty industry.",
    date: "June 2026",
    status: "Trending Now",
    gradient: "from-amber-50 to-orange-50",
  },
  {
    id: 2,
    title: "Customized Biotech Ingredients",
    subtitle: "Lab-Grown Efficacy",
    description:
      "From bio-fermented extracts to plant-based growth factors, discover the pure molecular compounds outperforming traditional botanicals.",
    date: "May 2026",
    status: "Rising Breakthrough",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: 3,
    title: "Skin Streaming Routines",
    subtitle: "The Minimalism Evolution",
    description:
      "Moving past 10-step systems. Consumers are condensing routines down to 3-4 highly effective, multi-functional items.",
    date: "April 2026",
    status: "Macro Trend",
    gradient: "from-rose-50 to-purple-50",
  },
];

const categoriesData = {
  "Beauty Trends": [
    "Melanin Diaries",
    "Beauty Trends",
    "Fashion News",
    "African Beauty",
    "Afro Beauty Actives",
    "Celebrity Gossip",
    "Global Beauty Trends",
  ],
};

const africanBeautyHashtags = [
  "#Nigerianbeauty",
  "#Cameroonbeauty",
  "#Egyptianbeauty",
  "#Ethiopianbeauty",
  "#SouthAfrican",
  "#Kenyanbeauty",
  "#Senegalese",
  "#Ghanabeauty",
  "#Moroccobeauty",
  "#Cotedivoire",
  "#AfroAmerican",
  "#AfroAsian",
];

export default function Trends() {
  const [activeSection, setActiveSection] = useState<"Beauty Trends">();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [africanBeautyOpen, setAfricanBeautyOpen] = useState(false);

  const handleTagClick = (tag: string) => {
    if (tag === "African Beauty") {
      setAfricanBeautyOpen(!africanBeautyOpen);
    }
    setSelectedTag(selectedTag === tag ? null : tag);
  };
  return (
    <main className="min-h-screen  text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-12">
          <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
            Seraphé Editorial
          </span>
          <H1>Skincare Movements & Trends</H1>

          <p className="mt-4 text-lg text-darkText max-w-3xl">
            A look into the future of clean beauty, ingredient biotechnology,
            and cultural shifts in skin wellness.
          </p>
        </div>

        {/* Editorial Feed */}
        <div className="space-y-12">
          {TRENDS.map((trend) => (
            <div
              key={trend.id}
              className="group grid md:grid-cols-12 gap-6 items-start pb-12 border-b border-slate-100 last:border-none"
            >
              {/* Metainfo column */}
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-2">
                <span className="text-sm font-medium text-slate-400">
                  {trend.date}
                </span>
                <span className="text-xs font-bold text-foreground tracking-wider uppercase md:mt-1">
                  {trend.status}
                </span>
              </div>

              <AnimatePresence>
                {activeSection === "Beauty Trends" && africanBeautyOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-stone-100 overflow-hidden"
                  >
                    <p className="text-xs font-bold uppercase text-[#A37B43] tracking-widest mb-3">
                      Regional Spotlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {africanBeautyHashtags.map((hashtag) => (
                        <span
                          key={hashtag}
                          className="px-3 py-1.5 bg-stone-50 border border-stone-200 text-stone-600 text-xs rounded-sm hover:border-[#2E0F0A] cursor-pointer transition-colors"
                        >
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main visual & descriptive column */}
              <div className="md:col-span-9">
                <div
                  className={`w-full h-48 rounded-2xl bg-linear-to-r ${trend.gradient} mb-6 transition-transform duration-300 group-hover:scale-[1.01]`}
                />
                <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1 group-hover:text-slate-700 cursor-pointer">
                  {trend.title}
                </h2>
                <h3 className="text-sm font-medium text-slate-500 italic mb-3">
                  {trend.subtitle}
                </h3>
                <p className="text-darkText leading-relaxed max-w-3xl mb-4">
                  {trend.description}
                </p>
                <button className="text-sm font-semibold text-foreground hover:text-darkText flex items-center gap-1">
                  Explore Analysis
                  <span className="transform transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
