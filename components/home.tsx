"use client";
import React from "react";
import Image from "next/image";
import model from "@/components/images/model.jpeg";
import flower from "@/components/images/flower-girl.jpeg";
import { H1 } from "./ui/heading";
import { blogDummy, shopDummy } from "./lib/constants";
import Carousel from "./ui/carousel";
import Community from "./ui/community";

const Home = () => {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="md:px-12 px-6 flex md:flex-row flex-col justify-between gap-6">
          <div>
            <div className=" ">
              <Image
                src={model}
                alt="model"
                width={500}
                height={0}
                className="w-full h-75 md:w-125 md:h-125"
              />
            </div>
            <div>
              <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
              <h1 className="md:text-3xl text-xl py-2 ">
                Top 3 Regina Daniels Beauty Secret that will leave your Skin
                Glowing
              </h1>
              <p className="uppercase text-darkText text-sm">
                By Ogunmola Gbemisola
              </p>
            </div>
          </div>

          <div>
            <div>
              <div className=" ">
                <Image
                  src={model}
                  alt="model"
                  width={500}
                  height={0}
                  className="w-full h-75 md:object-cover object-fill"
                />
              </div>
              <div>
                <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
                <h1 className="md:text-3xl text-xl py-2">
                  Top 3 Regina Daniels Beauty Secret that will leave your Skin
                  Glowing
                </h1>
                <p className="uppercase text-darkText text-sm">
                  By Ogunmola Gbemisola
                </p>
              </div>
            </div>

            <div>
              <div className=" pt-6">
                <Image
                  src={model}
                  alt="model"
                  width={500}
                  height={0}
                  className="w-full h-75  md:object-cover object-fill"
                />
              </div>
              <div>
                <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
                <h1 className="md:text-3xl text-xl py-2">
                  Top 3 Regina Daniels Beauty Secret that will leave your Skin
                  Glowing
                </h1>
                <p className="uppercase text-darkText text-sm">
                  By Ogunmola Gbemisola
                </p>
              </div>
            </div>
          </div>
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

        <div className="md:px-12 px-6 py-10  md:py-16">
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

        {/* lifestyle */}
        <div className="md:px-12 px-6 py-10  md:py-16">
          <H1>Lifestyle</H1>
          <div className="py-6 flex md:flex-row flex-col justify-between ">
            <div className="pb-6">
              <div className="">
                <Image
                  src={model}
                  alt="model"
                  width={300}
                  height={0}
                  className="w-75 h-75 md:w-125 md:h-125"
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
        <div className="md:px-12 px-6 py-10 md:py-16">
          <H1>Best Sellers for a reason</H1>
          <p className="md:text-base text-sm py-3">
            Shop editor-approved picks and great beauty sales.
          </p>

          <div className="py-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
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
