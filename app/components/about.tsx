"use client";
import React from "react";
import { H1, H3 } from "./ui/heading";
import { Button } from "./ui/button";
import { blogDummy, teamDummy } from "../lib/constants";
import Image from "next/image";
import Hero from "@/app/images/hero1.jpeg";

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 bg-boxBg py-10 md:py-16 md:px-12 px-6">
        <H1>About Seraphe</H1>
        <p className="md:text-base lg:w-[60%]  w-full text-sm text-darkText">
          Find everything you need to know about the best makeup tools and
          helpful application techniques straight from the pros. Read on for
          tips and tricks no matter your skill level
        </p>
      </div>

      {/* mission */}
      <div className="py-10 md:py-16 md:px-12 px-6 flex md:flex-row flex-col gap-6">
        <div>
          <div className="py-4">
            <H3>Our Mission</H3>
            <p className="text-black py-3 md:py-6 md:text-base text-sm">
              Our goal is to elevate and promote African beauty standards
              through Afro-inspired innovative beauty products, beauty
              technologies and beauty education.
            </p>
          </div>

          <div className="py-4">
            <H3>Our Vision</H3>
            <p className="text-black py-3 md:py-6 md:text-base text-sm">
              Seraphe will become Africa&apos;s largest beauty science brand,
              reinventing technologies, market trends adn products that inspire
              the world to appreciate beauty from the African perspective.
            </p>
          </div>

          <div className="py-4">
            <H3>Our Portfolio</H3>
            <p className="text-black py-3 md:py-6 md:text-base text-sm">
              Our product and service portfolio cuts across skincare formula
              advice, beauty products marketing and beauty modeling. Seraphe is
              developing unique skincare formulas tailored for the African skin.
              Be a part of our journey to achieve this.
            </p>

            <Button>Contact Us</Button>
          </div>

          <div className="py-4">
            <H3>Join Our teeming communities across Africa</H3>
            <p className="text-black py-3 md:py-6 md:text-base text-sm">
              Are you a beauty enthusiast? Do you want to contribute your
              perspective on how Seraphe is innovating skincare?
            </p>

            <Button>Join Us</Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <H3>Popular Stories</H3>

          <div className="flex gap-4 flex-col pt-6 md:pt-0">
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

      <div className="py-4 flex flex-col justify content items-center text-center">
        <H1>Beauty Writing Internships</H1>
        <p className="text-black py-3 md:py-6 md:w-[80%] w-full text-center pb-6 md:text-base text-sm">
          Are you a medical writer or beauty enthusiast? Do you want to
          contribute your perspective to the largest advancements in beauty
          science? During your internship, you will receive beauty science and
          medical writer mentorship, and a certificate of experience in Beauty
          Science Communication from Seraphe
        </p>

        <Button>Apply Here</Button>

        <div>
          <Image src={Hero} alt="model" width={300} height={300} />
        </div>
      </div>

      {/* team */}
      <div className="py-10 md:py-16 md:px-12 px-6 ">
        <H1 className="py-6">Meet the Seraphe Team</H1>
        <div>
          <div className="border-y border-[#c6c6c6] py-6">
            <H3 className="text-primaryBg py-6">Beauty Science Team</H3>
            <div className="flex gap-4 flex-col  md:flex-row pt-3 md:pt-0">
              {teamDummy.map((item) => (
                <div key={item.id}>
                  <div className=" ">
                    <Image
                      src={item.img}
                      alt="model"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <h1 className="md:text-xl text-base py-2 ">{item.name}</h1>
                    <p className="uppercase text-darkText text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-[#c6c6c6] py-6">
            <H3 className="text-primaryBg py-6">Technical Team</H3>
            <div className="flex gap-4 flex-col  md:flex-row pt-3 md:pt-0">
              {teamDummy.map((item) => (
                <div key={item.id}>
                  <div className=" ">
                    <Image
                      src={item.img}
                      alt="model"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <h1 className="md:text-xl text-base py-2 ">{item.name}</h1>
                    <p className="uppercase text-darkText text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <H3 className="text-primaryBg py-6">Project Leadership</H3>
            <div className="flex gap-4 md:flex-row flex-col pt-3 md:pt-0">
              {teamDummy.map((item) => (
                <div key={item.id} className="">
                  <div className=" ">
                    <Image
                      src={item.img}
                      alt="model"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <h1 className="md:text-xl text-base py-2 ">{item.name}</h1>
                    <p className="uppercase text-darkText text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
