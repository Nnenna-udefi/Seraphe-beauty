"use client";
import React from "react";
import Image from "next/image";
import flower from "@/components/images/flower-girl.jpeg";
import { H1 } from "./ui/heading";
import Carousel from "./ui/carousel";
import Community from "./ui/community";
import Link from "next/link";
import { useSite } from "./helper/siteContext";
import ProductCard from "./ui/productCard";
import { HomeBlog } from "./types/api";

const Home = () => {
  const { tips, trends, products, lifestyle } = useSite();

  const featuredLifestyle = lifestyle[0];
  const sideLifestyle = lifestyle.slice(1, 3);

  const readersFavourite =
    lifestyle.find((lifestyle) => lifestyle.isFeatured) ?? lifestyle[0];

  const featuredBlogs: HomeBlog[] = [
    ...tips.map((tip) => ({
      id: tip._id,
      slug: tip.slug,
      title: tip.title,
      author: tip.author,
      createdAt: tip.createdAt,
      image: tip.image,
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
    <div className="min-h-screen py-10 md:py-16">
      <div className="max-w-8xl mx-auto">
        <div className="px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={blog.id}
                className={
                  isFirst
                    ? "md:col-span-2 md:row-span-2 flex flex-col"
                    : "md:col-span-1 border-b border-gray-100 md:border-b-0 pb-6 md:pb-0"
                }
              >
                <Link
                  href={getBlogLink(blog)}
                  className={`flex flex-col h-full ${isFirst ? "" : "gap-6"}`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      isFirst ? "h-80 md:h-112.5" : "h-48 md:h-44"
                    }`}
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={isFirst ? "pt-4" : "flex-1"}>
                    <h3 className="text-yellowText uppercase text-sm">
                      {blog.category}
                    </h3>

                    <h2 className={`my-2 ${isFirst ? "text-3xl" : "text-xl"}`}>
                      {blog.title}
                    </h2>

                    <p className="uppercase text-xs">By {blog.author}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* beauty tips */}

        <Carousel
          title="Beauty Tips"
          data={tips}
          getKey={(tips) => tips.slug}
          className="py-4"
          renderItem={(item) => (
            <Link href={`/beauty-tips/${item.slug}`}>
              <div className="flex flex-col h-full ">
                <div className="overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={0}
                    className="w-full h-75 object-cover"
                  />
                </div>
                <div className="flex flex-col grow">
                  <h3 className="uppercase text-yellowText text-sm pt-4">
                    {item.category}
                  </h3>
                  <h4 className="md:text-xl text-base py-2 font-normal text-black">
                    {item.title}
                  </h4>
                  <p className="uppercase text-darkText text-sm mt-auto">
                    By {item.author}
                  </p>
                </div>
              </div>
            </Link>
          )}
        />

        {/* trends */}

        <Carousel
          title="Latest Trends"
          data={trends}
          getKey={(trends) => trends.slug}
          className="bg-boxBg py-4"
          renderItem={(item) => (
            <Link href={`/trends/${item.slug}`}>
              <div className="flex flex-col h-full">
                <div className="overflow-hidden bg-gray-100">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={300}
                    height={0}
                    className="w-full h-75 object-cover"
                  />
                </div>
                <div className="flex flex-col grow">
                  <h3 className="uppercase text-yellowText text-sm pt-4">
                    {item.focusArea}
                  </h3>
                  <h4 className="md:text-xl text-base py-2 font-normal text-black">
                    {item.title}
                  </h4>
                  <p className="uppercase text-darkText text-sm mt-auto">
                    By {item.author}
                  </p>
                </div>
              </div>
            </Link>
          )}
        />

        {/* readers favourite */}

        <div className="px-6  md:px-12 py-10  md:py-16">
          <div>
            <Image
              src={flower}
              alt="flower girl"
              width={500}
              height={0}
              className="w-full md:h-100 h-auto object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="uppercase text-yellowText text-sm pt-2">
              Reader&apos;s Favourite
            </h3>
            <h1 className="md:text-4xl text-center text-xl py-2 md:w-[80%] w-full">
              {readersFavourite.title}
            </h1>
            <p className="uppercase text-darkText text-sm">
              By {readersFavourite.author}
            </p>
          </div>
        </div>

        {/* md:w-125 md:h-125 */}
        {/* lifestyle */}
        <div className="px-6  md:px-12 py-10  md:py-16">
          <H1>Lifestyle</H1>
          <div className="py-6 flex flex-col md:flex-row gap-6">
            {featuredLifestyle && (
              <div className="flex-1">
                <Link href={`/lifestyle/${featuredLifestyle.slug}`}>
                  <Image
                    src={featuredLifestyle.image}
                    alt={featuredLifestyle.title}
                    width={600}
                    height={600}
                    className="w-full h-96 object-cover"
                  />

                  <h3 className="uppercase text-yellowText text-sm pt-2">
                    {featuredLifestyle.category}
                  </h3>

                  <h1 className="text-2xl md:text-4xl py-2">
                    {featuredLifestyle.title}
                  </h1>

                  <p className="uppercase text-darkText text-sm">
                    By {featuredLifestyle.author}
                  </p>
                </Link>
              </div>
            )}

            <div className="flex flex-col gap-4 md:w-[35%]">
              {sideLifestyle.map((item) => (
                <div key={item._id} className="flex gap-3">
                  <Link href={`/lifestyle/${item.slug}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="object-cover"
                    />

                    <div>
                      <h3 className="uppercase text-yellowText text-xs">
                        {item.category}
                      </h3>

                      <h2 className="text-base py-1">{item.title}</h2>

                      <p className="uppercase text-darkText text-xs">
                        By {item.author}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Join our community */}
        <Community />

        {/* sellers */}
        <div className="px-6  md:px-12 py-10 md:py-16">
          <H1>Best Sellers for a reason</H1>
          <p className="md:text-base text-sm py-3">
            Shop editor-approved picks and great beauty sales.
          </p>

          <div className="py-6 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
        {/* skincare */}

        {/* <Carousel
          title="Skincare"
          data={blogDummy}
          renderItem={(item) => (
            <div className="flex flex-col h-full">
              <div className="overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.topic}
                  width={300}
                  height={0}
                  className="w-full h-75 object-cover"
                />
              </div>
              <div className="flex flex-col grow">
                <h3 className="uppercase text-yellowText text-sm pt-4">
                  {item.category}
                </h3>
                <h4 className="md:text-xl text-base py-2 font-normal text-black">
                  {item.topic}
                </h4>
                <p className="uppercase text-darkText text-sm mt-auto">
                  {item.author}
                </p>
              </div>
            </div>
          )}
        /> */}
      </div>
    </div>
  );
};

export default Home;
