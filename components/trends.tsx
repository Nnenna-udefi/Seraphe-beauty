"use client";

import React, { useState } from "react";
import { H1 } from "./ui/heading";
import Image from "next/image";
import { Trends, TrendsFocus } from "./types/api";
import Link from "next/link";
import { formatDate } from "./helper/formatDate";
import BlogCard from "./ui/blogCard";
import { useRouter, useSearchParams } from "next/navigation";

export default function TrendsPage({
  trends,
  focusAreas,
}: {
  trends: Trends[];
  focusAreas: TrendsFocus[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeFocus = searchParams.get("category");

  const filteredTrends = activeFocus
    ? trends
    : trends.filter((trend) => trend.focusAreaSlug === activeFocus);
  // const [africanBeautyOpen, setAfricanBeautyOpen] = useState(false);

  // const handleTagClick = (tag: string) => {
  //   if (tag === "African Beauty") {
  //     setAfricanBeautyOpen((prev) => !prev);
  //   } else {
  //     setAfricanBeautyOpen(false);
  //   }
  //   onTagSelect(selectedTag === tag ? null : tag);
  // };
  return (
    <main className="min-h-screen  text-foreground py-12 md:py-12 px-4 md:px-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b text-center flex flex-col items-center justify-center border-slate-200 pb-8 mb-12">
          <span className="text-xs font-semibold tracking-widest text-yellowText uppercase">
            Seraphé Editorial
          </span>
          <H1>
            {" "}
            {activeFocus === "All Trends"
              ? "Skincare Movements & Trends"
              : (focusAreas.find((c) => c.slug === activeFocus)?.name ??
                "Trends")}
          </H1>

          <p className="mt-4 text-lg text-center text-darkText max-w-3xl">
            A look into the future of clean beauty, ingredient biotechnology,
            and cultural shifts in skin wellness.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {/* <p className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">
            Filter content by focus area:
          </p> */}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => router.push("/trends")}
              className={`px-5 py-2.5 rounded-full border text-xs md:text-sm transition-all ${
                activeFocus === "All Trends"
                  ? "bg-[#2E0F0A] text-white border-[#2E0F0A]"
                  : "border-stone-300 hover:border-black"
              }`}
            >
              All Trends
            </button>
            {focusAreas.map((focusArea) => (
              <button
                key={focusArea.slug}
                onClick={() =>
                  router.push(
                    `/trends?category=${encodeURIComponent(focusArea.slug)}`,
                  )
                }
                className={`px-5 py-2.5 rounded-full border text-xs md:text-sm transition-all ${
                  activeFocus === focusArea.slug
                    ? "bg-[#2E0F0A] text-white border-[#2E0F0A]"
                    : "border-stone-300 hover:border-black"
                }`}
              >
                {focusArea.name}
              </button>
            ))}
          </div>

          {/* Sub-drawer for African Beauty Regional Hashtags
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
          </AnimatePresence> */}
        </div>

        <div className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-">
          {trends.map((trend) => (
            <BlogCard
              key={trend._id}
              title={trend.title}
              category={trend.focusArea}
              author={trend.author}
              image={trend.featureImage}
              href={`/trends/${trend.slug}`}
              buttonText="Explore Trend"
            />
          ))}
        </div>
        {filteredTrends.length === 0 && (
          <div className="text-center py-12">
            <p className="text-darkText">
              No trends found in this category right now.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

// {/* Editorial Feed */}
// <div className="space-y-12">
//   {trends.map((trend) => (
//     <div
//       key={trend._id}
//       className="group grid md:grid-cols-12 gap-6 items-start pb-12 border-b border-slate-100 last:border-none"
//     >
//       {/* Metainfo column */}
//       <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-2">
//         <span className="text-sm font-medium text-yellowText">
//           {formatDate(trend.createdAt)}
//         </span>
//         <span className="text-xs font-bold text-foreground tracking-wider uppercase md:mt-1">
//           {trend.label}
//         </span>
//       </div>

//       {/* Main visual & descriptive column */}
//       <div className="md:col-span-9">

//         <div className="w-full rounded-2xl mb-6">
//           <Image
//             src={trend.featureImage}
//             alt=""
//             width={500}
//             height={0}
//             className="h-75 object-cover"
//           />
//         </div>
//         <h2 className="text-2xl font-bold text-black tracking-tight mb-1 group-hover:text-slate-700 cursor-pointer">
//           {trend.title}
//         </h2>
//         <h3 className="text-sm font-medium text-foreground italic mb-3">
//           {trend.subtitle}
//         </h3>
//         <p className="text-darkText leading-relaxed max-w-3xl mb-4">
//           {trend.excerpt}
//         </p>
//         <Link href={`/trends/${trend.slug}`}>
//           <button className="text-sm font-semibold text-primaryBg hover:text-darkText flex items-center gap-1">
//             Explore Analysis
//             <span className="transform transition-transform group-hover:translate-x-1">
//               &rarr;
//             </span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   ))}
//    </div>
