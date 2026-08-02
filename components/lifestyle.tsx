"use client";

import React, { useState } from "react";
// import { blogDummy, shopDummy } from "./lib/constants";
import Image from "next/image";
// import model from "@/components/images/model.jpeg";
import Community from "./ui/community";
import { Lifestyle, LifestyleCategory } from "./types/api";
import Link from "next/link";
import { Button } from "./ui/button";
import BlogCard from "./ui/blogCard";
import { lifestyleCategories } from "./lib/constants";
import { useSearchParams, useRouter } from "next/navigation";

export default function LifestyleAdmin({
  lifestyle,
}: {
  lifestyle: Lifestyle[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeCategory = searchParams.get("category") || "All Lifestyle";

  const filteredLifestyle =
    activeCategory === "All Lifestyle"
      ? lifestyle
      : lifestyle.filter((item) => item.category === activeCategory);
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 items-center border-b border-slate-200 pb-8 mb-12">
          <h1 className="font-contataOne text-black md:text-5xl text-3xl font-normal">
            {activeCategory === "All Lifestyle" ? "Lifestyle" : activeCategory}
          </h1>
          <p className="md:text-lg text-base text-center lg:w-[60%] py-4 w-full text-darkText">
            Find everything you need to know about the best makeup tools and
            helpful application techniques straight from the pros. Read on for
            tips and tricks no matter your skill level.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <div className="flex flex-wrap justify-center gap-6 uppercase">
            {lifestyleCategories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  router.push(
                    `/lifestyle?category=${encodeURIComponent(category)}`,
                  )
                }
                className={`px-5 py-2.5 border text-xs md:text-sm transition-all ${
                  activeCategory === category
                    ? "bg-primaryBg text-white border-primaryBg"
                    : "border-stone-300 hover:border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* first section */}
        <div className="px-6 md:px-12 py-10 md:py-16">
          <div className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {filteredLifestyle.map((item) => (
              <BlogCard
                key={item._id}
                title={item.title}
                category={item.category}
                author={item.author}
                image={item.image}
                href={`/lifestyle/${item.slug}`}
                buttonText="Explore Lifestyle"
              />
            ))}
          </div>
        </div>

        {/* second section */}
        {/* <div className="px-6 md:px-12 py-10  md:py-16">
          <div className="py-6 flex md:flex-row gap-3 flex-col justify-between ">
            <div>
              <div className="">
                <Image
                  src={model}
                  alt="model"
                  width={300}
                  height={0}
                  className="w-75 h-75 md:w-100 md:h-100"
                />
              </div>
              <div>
                <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
                <h1 className="md:text-4xl text-2xl py-2 md:w-[80%] w-full">
                  Top 3 Regina Daniels Beauty Secret that will leave your Skin
                  Glowing
                </h1>
                <p className="uppercase text-darkText text-sm">
                  By Ogunmola Gbemisola
                </p>
              </div>
            </div>

            <div className="flex gap-4 flex-col pt-3 md:pt-0">
              {blogDummy.map((item) => (
                <div key={item.id} className="flex gap-2">
                  <div className=" ">
                    <Image
                      src={item.img}
                      alt="model"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <h3 className="uppercase text-yellowText text-sm">
                      {item.category}
                    </h3>
                    <h1 className="md:text-xl text-base py-2 ">{item.topic}</h1>
                    <p className="uppercase text-darkText text-sm">
                      {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* third section */}
        {/* <div className="px-6 md:px-12 py-10 md:py-16">
          <div className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {shopDummy.map((item) => (
              <div key={item.id} className="pt-6 md:pt-0">
                <div className=" ">
                  <Image
                    src={item.img}
                    alt="model"
                    width={300}
                    height={0}
                    className="w-full h-75 md:w-75 md:h-75"
                  />
                </div>
                <div>
                  <h3 className="uppercase text-yellowText text-sm pt-2">
                    {item.category}
                  </h3>
                  <h1 className="md:text-xl text-base py-2 ">{item.topic}</h1>
                  <p className="uppercase text-darkText text-sm">
                    {item.author}
                  </p>
                </div>
                <Link href={`/lifestyle}`}>
                  <button className="text-sm font-semibold text-primaryBg hover:text-darkText flex items-center gap-1">
                    Explore Lifestyle
                    <span className="transform transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div> */}
        {filteredLifestyle.length === 0 && (
          <div className="text-center py-12">
            <p className="text-darkText">
              No lifestyles found in this category.
            </p>
          </div>
        )}

        {/* Join our community */}

        <Community />
      </div>
    </div>
  );
}
