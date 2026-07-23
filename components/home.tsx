"use client";
import React from "react";
import Image from "next/image";
import model from "@/components/images/model.jpeg";
import flower from "@/components/images/flower-girl.jpeg";
import { H1 } from "./ui/heading";
import { BlogDetailsBlock, blogDummy, shopDummy } from "./lib/constants";
import Carousel from "./ui/carousel";
import Community from "./ui/community";
import Link from "next/link";

const featuredBlogs = BlogDetailsBlock.slice(0, 3);
const Home = () => {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="max-w-8xl mx-auto">
        <div className="px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index: number) => {
            const isFirst = index === 0;

            return (
              <div
                key={index}
                className={`${
                  isFirst
                    ? "md:col-span-2 md:row-span-2 flex flex-col"
                    : "md:col-span-1 border-b border-gray-100 md:border-b-0 pb-6 md:pb-0"
                }`}
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  className={`flex flex-col h-full w-full ${
                    isFirst ? "" : "md:flex-col md:items-start gap-6"
                  }`}
                >
                  {/* Image Wrapper Container */}
                  <div
                    className={`overflow-hidden relative w-full shrink-0 ${
                      isFirst
                        ? "h-80 md:h-112.5 md:w-full"
                        : "h-48 md:w-3/5 md:h-44"
                    }`}
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content Area */}
                  <div
                    className={`flex flex-col ${isFirst ? "pt-4" : "flex-1 md:pt-0"}`}
                  >
                    <h3 className="text-yellowText md:text-sm text-xs uppercase tracking-wider font-medium">
                      {blog.category}
                    </h3>

                    <h2
                      className={`my-2 font-serif text-black leading-tight ${
                        isFirst ? "md:text-3xl text-xl" : "md:text-xl text-lg"
                      }`}
                    >
                      {blog.title}
                    </h2>

                    <p className="uppercase text-darkText text-xs tracking-wide">
                      BY {blog.author}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* beauty tips */}

        <Carousel
          title="Beauty Tips"
          data={blogDummy}
          className="py-4"
          renderItem={(item) => (
            <div className="flex flex-col h-full ">
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
        />

        {/* trends */}

        <Carousel
          title="Latest Trends"
          data={blogDummy}
          className="bg-boxBg py-4"
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
              Top 3 Regina Daniels Beauty Secret that will leave your Skin
              Glowing
            </h1>
            <p className="uppercase text-darkText text-sm">
              By Ogunmola Gbemisola
            </p>
          </div>
        </div>
        {/* md:w-125 md:h-125 */}
        {/* lifestyle */}
        <div className="px-6  md:px-12 py-10  md:py-16">
          <H1>Lifestyle</H1>
          <div className="py-6 flex md:flex-row flex-col gap-3 justify-between ">
            <div className="pb-6">
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
                <h1 className="md:text-3xl text-xl py-2 md:w-[80%] w-full">
                  Top 3 Regina Daniels Beauty Secret that will leave your Skin
                  Glowing
                </h1>
                <p className="uppercase text-darkText text-sm">
                  By Ogunmola Gbemisola
                </p>
              </div>
            </div>

            <div className="flex gap-4 flex-col py-6 md:py-0">
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
        </div>
        {/* Join our community */}
        <Community />

        {/* sellers */}
        <div className="px-6  md:px-12 py-10 md:py-16">
          <H1>Best Sellers for a reason</H1>
          <p className="md:text-base text-sm py-3">
            Shop editor-approved picks and great beauty sales.
          </p>

          <div className="py-6 grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-4">
            {shopDummy.map((item) => (
              <div key={item.id} className="pt-6 md:pt-0">
                <div className=" ">
                  <Image
                    src={item.img}
                    alt="model"
                    width={300}
                    height={0}
                    className="w-full md:w-75"
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
              </div>
            ))}
          </div>
        </div>
        {/* skincare */}

        <Carousel
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
        />
      </div>
    </div>
  );
};

export default Home;
