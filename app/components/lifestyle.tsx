"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { blogDummy, lifestyleList, shopDummy } from "../lib/constants";
import Image from "next/image";
import model from "@/app/images/model.jpeg";
import Community from "./ui/community";

export const Lifestyle = () => {
  const pathname = usePathname();
  return (
    <div className="py-10 md:py-16">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-contataOne text-black md:text-5xl text-3xl font-normal">
          Lifestyle
        </h1>
        <p className="md:text-base text-center lg:w-[60%] py-4 w-full text-sm text-darkText">
          Find everything you need to know about the best makeup tools and
          helpful application techniques straight from the pros. Read on for
          tips and tricks no matter your skill level.
        </p>
      </div>

      <div className="py-4 px-10 border-y border-[#DBDBDB] text-[#484646] md:text-base text-sm">
        <ul className="flex overflow-y-auto justify-center gap-6 uppercase">
          {lifestyleList.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link href={item.link} key={item.id}>
                <li
                  className={`${isActive ? "border-text-yellowText font-medium" : ""} font-normal`}
                >
                  {item.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* first section */}
      <div className="md:px-12 px-6 py-10 md:py-16">
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
                <p className="uppercase text-darkText text-sm">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* second section */}
      <div className="md:px-12 px-6 py-10  md:py-16">
        <div className="py-6 flex md:flex-row flex-col justify-between ">
          <div>
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
                  <Image src={item.img} alt="model" width={300} height={300} />
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
      {/* third section */}
      <div className="md:px-12 px-6 py-10 md:py-16">
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
                <p className="uppercase text-darkText text-sm">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join our community */}

      <Community />
    </div>
  );
};
