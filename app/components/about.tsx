import React from "react";
import { H1, H3 } from "./ui/heading";
import { Button } from "./ui/button";
import { blogDummy } from "../lib/constants";
import Image from "next/image";

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
            <p className="text-black pt-3 md:text-base text-sm">
              Our goal is to elevate and promote African beauty standards
              through Afro-inspired innovative beauty products, beauty
              technologies and beauty education.
            </p>
          </div>

          <div className="py-4">
            <H3>Our Vision</H3>
            <p className="text-black pt-3 md:text-base text-sm">
              Seraphe will become Africa&apos;s largest beauty science brand,
              reinventing technologies, market trends adn products that inspire
              the world to appreciate beauty from the African perspective.
            </p>
          </div>

          <div className="py-4">
            <H3>Our Portfolio</H3>
            <p className="text-black pt-3 pb-6 md:text-base text-sm">
              Our product and service portfolio cuts across skincare formula
              advice, beauty products marketing and beauty modeling. Seraphe is
              developing unique skincare formulas tailored for the African skin.
              Be a part of our journey to achieve this.
            </p>

            <Button>Contact Us</Button>
          </div>

          <div className="py-4">
            <H3>Join Our teeming communities across Africa</H3>
            <p className="text-black pt-3 pb-6 md:text-base text-sm">
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
    </div>
  );
};

export default About;
