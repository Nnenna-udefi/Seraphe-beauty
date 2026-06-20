import React from "react";
import Image from "next/image";
import model from "@/app/images/model.jpeg";
import flower from "@/app/images/flower-girl.jpeg";
import H1 from "./ui/heading";
import { blogDummy, shopDummy } from "../lib/constants";
const Home = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="md:px-12 px-6 flex md:flex-row flex-col justify-between gap-6">
        <div>
          <div className=" ">
            <Image
              src={model}
              alt="model"
              width={500}
              height={500}
              className="w-full h-75 md:w-125 md:h-125"
            />
          </div>
          <div>
            <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
            <h1 className="md:text-4xl text-2xl py-2 ">
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
                height={500}
                className="w-full h-75 md:object-cover object-fill"
              />
            </div>
            <div>
              <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
              <h1 className="md:text-4xl text-2xl py-2">
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
                height={500}
                className="w-full h-75  md:object-cover object-fill"
              />
            </div>
            <div>
              <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
              <h1 className="md:text-4xl text-2xl py-2">
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

      <div className="md:px-12 px-6 py-10 md:py-16">
        <H1>Beauty Tips</H1>

        <div className="flex md:flex-row gap-4 py-6 flex-col">
          {blogDummy.map((item) => (
            <div key={item.id} className="pt-6 md:pt-0">
              <div className=" ">
                <Image
                  src={item.img}
                  alt="model"
                  width={300}
                  height={300}
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

      {/* trends */}
      <div className="bg-[#fdf3ed] md:px-12 px-6 py-10 md:py-16">
        <H1>Latest Trends</H1>

        <div className="flex md:flex-row gap-4 py-6 flex-col">
          {blogDummy.map((item) => (
            <div key={item.id} className="pt-6 md:pt-0">
              <div className=" ">
                <Image
                  src={item.img}
                  alt="model"
                  width={300}
                  height={300}
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

      {/* readers favourite */}

      <div className="md:px-12 px-6 py-10  md:py-16">
        <div>
          <Image
            src={flower}
            alt="flower girl"
            width={500}
            height={300}
            className="w-full h-75"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="uppercase text-yellowText text-sm pt-2">
            Reader&apos;s Favourite
          </h3>
          <h1 className="md:text-4xl text-center text-2xl py-2 md:w-[80%] w-full">
            Top 3 Regina Daniels Beauty Secret that will leave your Skin Glowing
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
          <div>
            <div className="">
              <Image
                src={model}
                alt="model"
                width={300}
                height={300}
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
      </div>
      {/* Join our community */}
      <div className="flex flex-col md:px-12 px-6 py-10 justify-center items-center gap-4">
        <H1 className="text-center">Join our Community</H1>
        <p className="md:text-base text-sm text-[#484646]">
          Stay up to date with our latest stories
        </p>

        <form className="flex py-4 w-full md:w-[50%]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="py-2 px-3 bg-gray-200 w-full text-base text-[#525252] placeholder:text-[#525252]"
          />
          <button type="submit" className="w-25 text-white p-2 bg-primaryBg">
            Sign Up
          </button>
        </form>
      </div>

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
                  height={300}
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
      {/* skincare */}

      <div className="md:px-12 px-6 py-10 md:py-16">
        <H1>Skincare</H1>

        <div className="flex md:flex-row gap-4 py-6 flex-col">
          {blogDummy.map((item) => (
            <div key={item.id}>
              <div className=" ">
                <Image
                  src={item.img}
                  alt="model"
                  width={300}
                  height={300}
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
    </div>
  );
};

export default Home;
