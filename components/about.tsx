"use client";
import React from "react";
import { H1, H3 } from "./ui/heading";
import { Button } from "./ui/button";
import { blogDummy } from "./lib/constants";
import Image from "next/image";
import Hero from "@/components/images/hero1.jpeg";
import TeamSection from "./teamSection";
import { Team } from "./types/api";

const About = ({ teams }: { teams: Team[] }) => {
  return (
    <div className="min-h-screen">
      <div className=" mx-auto">
        <div className="bg-boxBg">
          <div className="flex max-w-8xl flex-col gap-6  py-10 md:py-16 md:px-12 px-6">
            <H1>About Seraphé</H1>
            <p className="md:text-base lg:w-[60%]  w-full text-sm text-darkText">
              Find everything you need to know about the best makeup tools and
              helpful application techniques straight from the pros. Read on for
              tips and tricks no matter your skill level
            </p>
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-primaryBg">
          <div className="max-w-8xl  text-white py-12 px-6 md:px-12">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h2 className="text-4xl font-bold">640+</h2>
                <p className="mt-2 text-sm uppercase tracking-wider">
                  Community Members
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">13</h2>
                <p className="mt-2 text-sm uppercase tracking-wider">
                  African Countries
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">20</h2>
                <p className="mt-2 text-sm uppercase tracking-wider">
                  Countries Worldwide
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">400M+</h2>
                <p className="mt-2 text-sm uppercase tracking-wider">
                  Global Target Market
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-8xl mx-auto text-center text-sm md:text-base text-white/90">
              Seraphé is building beauty solutions for more than{" "}
              <strong>350 million indigenous Africans</strong>, while serving a
              potential market of over{" "}
              <strong>400 million people globally</strong>.
            </p>
          </div>
        </div>
        {/* mission */}
        <div className="max-w-8xl py-10 md:px-12 md:py-16 px-6 flex md:flex-row flex-col gap-6">
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
                Seraphé will become Africa&apos;s largest beauty science brand,
                reinventing technologies, market trends adn products that
                inspire the world to appreciate beauty from the African
                perspective.
              </p>
            </div>

            <div className="py-4">
              <H3>Our Portfolio</H3>
              <p className="text-black py-4 md:py-6 md:text-base text-sm">
                Our product and service portfolio cuts across skincare formula
                advice, beauty products marketing and beauty modeling. Seraphé
                is developing unique skincare formulas tailored for the African
                skin. Be a part of our journey to achieve this.
              </p>

              <Button>Contact Us</Button>
            </div>

            <div className="py-4">
              <H3>Join Our teeming communities across Africa</H3>
              <p className="text-black py-4 md:py-6 md:text-base text-sm">
                Are you a beauty enthusiast? Do you want to contribute your
                perspective on how Seraphé is innovating skincare?
              </p>

              <Button>Join Us</Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-6">
            <H3>Popular Stories</H3>

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

        <div className="max-w-8xl pt-10 md:px-12 md:pt-16 flex flex-col px-6 justify content items-center text-center">
          <H1>Beauty Writing Internships</H1>
          <p className="text-black py-6 md:w-[80%] w-full text-center pb-6 md:text-base text-sm">
            Are you a medical writer or beauty enthusiast? Do you want to
            contribute your perspective to the largest advancements in beauty
            science? During your internship, you will receive beauty science and
            medical writer mentorship, and a certificate of experience in Beauty
            Science Communication from Seraphé
          </p>

          <Button>Apply Here</Button>

          <div className="py-4">
            <Image
              src={Hero}
              alt="model"
              width={300}
              height={0}
              className="w-full"
            />
          </div>
        </div>

        {/* team */}
        <div className="max-w-8xl">
          <TeamSection teams={teams} />{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
