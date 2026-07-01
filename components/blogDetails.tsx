"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/components/images/hero2.jpeg";
import { H1, H3 } from "./ui/heading";
import { blogDummy } from "./lib/constants";
import Community from "./ui/community";
import Carousel from "./ui/carousel";
import ProductCard from "./ui/productCard";

const BlogDetails = () => {
  return (
    <div className="py-10  md:px-12 min-h-screen md:py-16 ">
      <div className="max-w-6xl mx-auto">
        <div className="px-6">
          <h3 className="uppercase text-yellowText text-sm py-2">Skin</h3>
          <H1 className="py-3">
            The Silent Skin Saboteur: Why Your Dirty Makeup Brushes Are Ruining
            Your Skin (And How to Fix It)
          </H1>
          <div className="py-3">
            <Image
              src={Hero}
              alt="model"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>

        <div className="py-10 md:py-16 px-6 flex md:flex-row flex-col gap-6">
          <div>
            <div className="text-black flex flex-col md:text-base text-sm">
              <p>
                We invest a lot of time and money into finding the perfect
                skincare products and high-quality makeup. But there is a silent
                saboteur hiding right in your vanity that could be undoing all
                of your hard work. When last did you clean your makeup brushes?
              </p>

              <p className="py-4">
                If you can’t remember, you aren&apos;t alone but you might want
                to read on to find out exactly why your dirty tools are holding
                you back from achieving flawless skin and perfect blending.
              </p>

              <h4 className="font-medium py-6">
                What is Hiding in Your Dirty Makeup Brush?
              </h4>
              <p>
                Every time you use a makeup brush, it doesn&apos;t just deposit
                product onto your skin; it collects things from your face, too.
                Over time, your brushes become a breeding ground for elements
                you definitely don&apos;t want to be painting back onto your
                face:
              </p>
              <ol>
                <li>
                  Dead Skin & Oil: Your brushes trap natural sebum and dead skin
                  cells, which clog your pores instantly upon reuse.
                </li>
                <li>
                  Bacteria & Yeast: The dark, packed environment of brush
                  bristles is the perfect home for microbes that cause
                  infections and stubborn acne.
                </li>
                <li>
                  {" "}
                  Old Makeup: Residual product builds up, cakes, and hardens,
                  leading to streaky, patchy looks during application.
                </li>
              </ol>

              <h4 className="font-medium py-4">
                The Skin Sabotage: Real Consequences
              </h4>
              <p>
                Using dirty brushes does more than just ruin your expensive
                foundation application; it actively damages your skin health.
                The direct consequences include:
              </p>
              <ul>
                <li>
                  Acne & Breakouts: You cannot outrun breakouts if you keep
                  reintroducing uld bacteria to clean skin.
                </li>
                <li>
                  Irritation & Rashes: Stiff, product-caked bristles become
                  abrasive, causing micro-irritation and redness.
                </li>
                <li>
                  Eye Infections: Eye brushes carrying bacteria can easily cause
                  painful conditions like conjunctivitis (pink eye) or styes.
                </li>
                <li>
                  Patchy Makeup: No matter how good your blending technique is,
                  dirty tools make smooth application impossible.
                </li>
              </ul>

              <h4 className="font-medium py-4">
                The Simple Fix: How to Clean Your Brushes
              </h4>
              <p>
                Fortunately, reversing the damage is incredibly simple. You
                don&apos;t need a complicated routine to keep your tools
                pristine, just follow this two-step guide:
              </p>

              <h4 className="font-medium pt-4">Step 1: Deep Clean</h4>
              <p>
                At least once a week, give your brushes a thorough wash. Use
                warm water along with a gentle brush cleanser or mild soap.
                Swirl the bristles gently on a silicone cleaning mat or directly
                in the palm of your hand. Rinse thoroughly, and repeat until the
                water runs completely clear.
              </p>

              <h4 className="font-medium pt-4">Step 2: Dry Properly</h4>
              <p>
                Once clean, gently squeeze out any excess water and reshape the
                bristles with your fingers. Lay the brushes flat on a clean
                towel or hang them upside down to dry completely. NEVER dry them
                upright! When dried vertically, water seeps down into the
                ferrule (the metal part holding the glue), which loosens the
                adhesive and causes your brush bristles to shed.
              </p>

              <h4 className="font-medium py-4">
                Be Honest... When last did you wash your makeup brushes?
              </h4>
              <p>
                Now that you have the knowledge, it&apos;s time to take action!
                Grab your tools, head to the sink, and give your skin the clean
                slate it deserves. If you found this guide helpful, make sure to
                share it with a friend who might be sitting at the &quot;dirty
                brush table&quot; and needs a gentle reminder!
              </p>
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

            <div className="flex gap-4 flex-col pt-6 md:pt-0">
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
