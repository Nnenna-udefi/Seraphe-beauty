"use client";

import React, { useState } from "react";
import { H1 } from "./ui/heading";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const TRENDS = [
  {
    id: 1,
    title: "The Rise of Neurocosmetics",
    subtitle: "Connecting Mind and Skin Barrier",
    description:
      "Explore how topicals formulated to address skin-stress responses are changing the high-end beauty industry.",
    date: "June 2026",
    status: "Trending Now",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1679750866883-b1c549f65da9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imgLink:
      "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imgLink:
      "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-rose-50 to-purple-50",
  },
];

// Regional African Hashtags
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

interface BeautyTrendsProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function Trends({
  tags,
  selectedTag,
  onTagSelect,
}: BeautyTrendsProps) {
  const [africanBeautyOpen, setAfricanBeautyOpen] = useState(false);

  const handleTagClick = (tag: string) => {
    if (tag === "African Beauty") {
      setAfricanBeautyOpen((prev) => !prev);
    } else {
      setAfricanBeautyOpen(false);
    }
    onTagSelect(selectedTag === tag ? null : tag);
  };
  return (
    <main className="min-h-screen  text-foreground py-12 px-4 md:px-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-12">
          <span className="text-xs font-semibold tracking-widest text-yellowText uppercase">
            Seraphé Editorial
          </span>
          <H1>Skincare Movements & Trends</H1>

          <p className="mt-4 text-lg text-darkText max-w-3xl">
            A look into the future of clean beauty, ingredient biotechnology,
            and cultural shifts in skin wellness.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-stone-100 mb-12">
          <p className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">
            Filter content by focus area:
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-5 py-2.5 rounded-full border text-xs md:text-sm transition-all duration-200 flex items-center gap-2 tracking-wide font-medium ${
                    isSelected
                      ? "bg-[#2E0F0A] border-[#2E0F0A] text-white"
                      : "border-stone-300 text-stone-800 hover:border-black"
                  }`}
                >
                  {tag}
                  {tag === "African Beauty" && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${africanBeautyOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Sub-drawer for African Beauty Regional Hashtags */}
          <AnimatePresence>
            {africanBeautyOpen && (
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
                <span className="text-sm font-medium text-yellowText">
                  {trend.date}
                </span>
                <span className="text-xs font-bold text-foreground tracking-wider uppercase md:mt-1">
                  {trend.status}
                </span>
              </div>

              {/* Main visual & descriptive column */}
              <div className="md:col-span-9">
                {/* <div
                  className={`w-full h-48 rounded-2xl bg-linear-to-r ${trend.gradient} mb-6 transition-transform duration-300 group-hover:scale-[1.01]`}
                /> */}
                <div className="w-full rounded-2xl mb-6">
                  <Image
                    src={trend.imgLink}
                    alt=""
                    width={500}
                    height={0}
                    className="h-75 object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-black tracking-tight mb-1 group-hover:text-slate-700 cursor-pointer">
                  {trend.title}
                </h2>
                <h3 className="text-sm font-medium text-foreground italic mb-3">
                  {trend.subtitle}
                </h3>
                <p className="text-darkText leading-relaxed max-w-3xl mb-4">
                  {trend.description}
                </p>
                <button className="text-sm font-semibold text-primaryBg hover:text-darkText flex items-center gap-1">
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
