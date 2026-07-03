"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/components/images/hero2.jpeg";
import { H1, H3 } from "./ui/heading";
import { BlogDetailsBlock, blogDummy } from "./lib/constants";
import Community from "./ui/community";
import Carousel from "./ui/carousel";
import ProductCard from "./ui/productCard";

const BlogDetails = () => {
  return (
    <div className="py-10  md:px-12 min-h-screen md:py-16 ">
      <div className="max-w-6xl mx-auto">
        <div className="px-6">
          {BlogDetailsBlock.map((blog, index: number) => (
            <div className="px-6" key={index}>
              <h3 className="uppercase text-yellowText text-sm py-2">
                {blog.category}
              </h3>
              <H1 className="py-3">{blog.title}</H1>
              <p className="text-[#484646] text-sm py-2">{blog.author}</p>
              <div className="py-3">
                <Image
                  src={blog.img}
                  alt="model"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
              <div className="py-10 md:py-16 px-6 flex md:flex-row flex-col gap-6">
                <div>
                  <div className="text-black flex flex-col md:text-base text-sm">
                    <p>{blog.para1}</p>

                    <p className="py-4">{blog.para2}</p>

                    <h4 className="font-medium pt-6 pb-2">{blog.heading1}</h4>
                    <p>{blog.para3}</p>

                    {blog.lists.map((list, index: number) => (
                      <ol key={index}>
                        <li>{list}</li>
                      </ol>
                    ))}

                    <h4 className="font-medium py-4">{blog.heading2}</h4>
                    <p>{blog.para4}</p>

                    {blog.lists2.map((list, index: number) => (
                      <ul key={index}>
                        <li>{list}</li>
                      </ul>
                    ))}

                    <h4 className="font-medium py-4">{blog.heading3}</h4>
                    <p>{blog.para5}</p>

                    <h4 className="font-medium pt-4">{blog.subPara1}</h4>
                    <p>{blog.para6}</p>

                    <h4 className="font-medium pt-4">{blog.subPara2}</h4>
                    <p>{blog.para7}</p>

                    <h4 className="font-medium py-4">{blog.heading4}</h4>
                    <p>{blog.para8}</p>
                  </div>
                  {/* product */}
                  <div className="py-6 md:py-8">
                    <H3>Recommended Products</H3>
                    <p className="py-2">
                      Shop editor-approved picks and great beauty sales
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <H3>Related Stories</H3>

                  <div className="flex gap-4 ml-6 flex-col pt-6 md:pt-0">
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
                          <h1 className="md:text-xl text-base py-2 ">
                            {item.topic}
                          </h1>
                          <p className="uppercase text-darkText text-sm">
                            {item.author}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join our community */}
        <Community />

        <Carousel
          title="Read More"
          data={blogDummy}
          className="bg-boxBg"
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

export default BlogDetails;
