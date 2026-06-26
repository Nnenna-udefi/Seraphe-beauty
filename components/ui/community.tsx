import React from "react";
import { H1 } from "./heading";

const Community = () => {
  return (
    <div className="flex flex-col md:px-12 px-6 py-10 justify-center items-center gap-4">
      <H1 className="text-center">Join our Community</H1>
      <p className="md:text-base text-sm text-[#484646]">
        Stay up to date with our latest stories
      </p>

      <form className="flex py-4 w-full md:w-[50%]">
        <input
          type="email"
          placeholder="Enter your email address"
          className="py-2 px-3 bg-gray-200 w-full text-sm md:text-base text-[#525252] placeholder:text-[#525252]"
        />
        <button type="submit" className="w-25 text-white p-2 bg-primaryBg">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Community;
