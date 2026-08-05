"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/carousel";
import Community from "./ui/community";
import ProductCard from "./ui/productCard";
import { H1 } from "./ui/heading";
import { useSite } from "./helper/siteContext";
import { HomeBlog } from "./types/api";

const Home = () => {
  const { tips, trends, products, lifestyle } = useSite();

  const featuredLifestyle = lifestyle[0];
  const sideLifestyle = lifestyle.slice(1, 3);

  const readersFavourite =
    lifestyle.find((post) => post.isFeatured) ?? lifestyle[0];

  const featuredBlogs: HomeBlog[] = [
    ...tips.map((tip) => ({
      id: tip._id,
      slug: tip.slug,
      title: tip.title,
      author: tip.author,
      createdAt: tip.createdAt,
      image: tip.images?.[0],
      category: tip.category,
      type: "tips" as const,
    })),
    ...trends.map((trend) => ({
      id: trend._id,
      slug: trend.slug,
      title: trend.title,
      author: trend.author,
      createdAt: trend.createdAt,
      image: trend.images[0],
      category: trend.focusArea,
      type: "trends" as const,
    })),
    ...lifestyle.map((post) => ({
      id: post._id,
      slug: post.slug,
      title: post.title,
      author: post.author,
      createdAt: post.createdAt,
      image: post.image,
      category: post.category,
      type: "lifestyle" as const,
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 3);

  const getBlogLink = (blog: HomeBlog) => {
    switch (blog.type) {
      case "tips":
        return `/beauty-tips/${blog.slug}`;
      case "trends":
        return `/trends/${blog.slug}`;
      case "lifestyle":
        return `/lifestyle/${blog.slug}`;
    }
  };

  return (
    <div className="min-h-screen py-16 md:py-20 space-y-16">
      {/* 1. Hero Grid (Featured Top Stories) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={blog.id}
                className={
                  isFirst
                    ? "md:col-span-2 md:row-span-2"
                    : "md:col-span-1 border-b border-gray-100 md:border-b-0"
                }
              >
                <Link
                  href={getBlogLink(blog)}
                  className="group flex flex-col h-full gap-4"
                >
                  <div
                    className={`relative overflow-hidden rounded-lg bg-gray-100 ${
                      isFirst ? "h-72 md:h-105" : "h-48 md:h-44"
                    }`}
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <span className="text-yellowText uppercase text-xs font-semibold tracking-wider">
                      {blog.category}
                    </span>

                    <h2
                      className={`font-semibold my-1 text-gray-900 group-hover:text-primaryBg transition-colors ${
                        isFirst ? "text-lg md:text-3xl" : "text-lg md:text-xl"
                      }`}
                    >
                      {blog.title}
                    </h2>

                    <p className="uppercase text-xs text-gray-500 mt-2">
                      By {blog.author}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Beauty Tips Carousel */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <Carousel
          title="Beauty Tips"
          data={tips}
          getKey={(item) => item.slug}
          renderItem={(item) => (
            <Link
              href={`/beauty-tips/${item.slug}`}
              className="group block h-full"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-64 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.images?.[0]}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col grow pt-4">
                  <span className="uppercase text-yellowText text-xs font-semibold tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-lg py-2 font-medium text-gray-900 group-hover:text-primaryBg transition-colors">
                    {item.title}
                  </h4>
                  <p className="uppercase text-gray-500 text-xs mt-auto">
                    By {item.author}
                  </p>
                </div>
              </div>
            </Link>
          )}
        />
      </section>

      {/* 3. Trends Section (Full-width Tinted Background) */}
      <section className="bg-boxBg py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Carousel
            title="Latest Trends"
            data={trends}
            getKey={(item) => item.slug}
            renderItem={(item) => (
              <Link
                href={`/trends/${item.slug}`}
                className="group block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col grow pt-4">
                    <span className="uppercase text-yellowText text-xs font-semibold tracking-wider">
                      {item.focusArea}
                    </span>
                    <h4 className="text-lg py-2 font-medium text-gray-900 group-hover:text-primaryBg transition-colors">
                      {item.title}
                    </h4>
                    <p className="uppercase text-gray-500 text-xs mt-auto">
                      By {item.author}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          />
        </div>
      </section>

      {/* 4. Reader's Favourite Banner */}
      {readersFavourite && (
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            href={`/lifestyle/${readersFavourite.slug}`}
            className="group block"
          >
            <div className="relative rounded-xl overflow-hidden bg-gray-900 text-white">
              <div className="relative h-80 md:h-112 opacity-75">
                <Image
                  src={readersFavourite.image}
                  alt={readersFavourite.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-end p-6 md:p-12 text-center">
                <span className="uppercase text-yellowText text-xs font-semibold tracking-widest mb-2">
                  Reader&apos;s Favourite
                </span>
                <h1 className="text-2xl md:text-4xl font-bold max-w-3xl leading-tight mb-3">
                  {readersFavourite.title}
                </h1>
                <p className="uppercase text-xs text-gray-300">
                  By {readersFavourite.author}
                </p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 5. Lifestyle Feature & Sidebar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <H1>Lifestyle</H1>
        <div className="mt-6 flex flex-col md:flex-row gap-8">
          {featuredLifestyle && (
            <div className="flex-1">
              <Link
                href={`/lifestyle/${featuredLifestyle.slug}`}
                className="group block"
              >
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={featuredLifestyle.image}
                    alt={featuredLifestyle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="uppercase text-yellowText text-xs font-semibold tracking-wider block mt-4">
                  {featuredLifestyle.category}
                </span>
                <h2 className="text-xl md:text-3xl font-semibold py-2 group-hover:text-primaryBg transition-colors">
                  {featuredLifestyle.title}
                </h2>
                <p className="uppercase text-gray-500 text-xs">
                  By {featuredLifestyle.author}
                </p>
              </Link>
            </div>
          )}

          <div className="flex flex-col gap-6 md:w-[38%]">
            {sideLifestyle.map((item) => (
              <Link
                key={item._id}
                href={`/lifestyle/${item.slug}`}
                className="group flex gap-4 items-center"
              >
                <div className="relative w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="uppercase text-yellowText text-xs font-semibold tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-medium py-1 line-clamp-2 group-hover:text-primaryBg transition-colors">
                    {item.title}
                  </h3>
                  <p className="uppercase text-gray-500 text-[10px]">
                    By {item.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Community Banner */}
      <Community />

      {/* 7. Best Sellers Carousel */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <Carousel
          title="Best Sellers for a Reason"
          data={products}
          getKey={(product) => product._id}
          renderItem={(product) => <ProductCard product={product} />}
        />
      </section>
    </div>
  );
};

export default Home;
