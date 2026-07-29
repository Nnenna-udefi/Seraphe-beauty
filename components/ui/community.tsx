"use client";
import React, { useState } from "react";
import { H1 } from "./heading";
import { toast } from "sonner";
import { api } from "../lib/api";

const Community = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
  toast.error("Please enter your name and email.");
  return;
}
    try {
      setLoading(true);
     await api.publicShop.createSubscriber({ name, email });
      toast.success("Thank you for subscribing!");
      setEmail(""); // Clear the email input after successful subscription
      setName(""); // Clear the name input after successful subscription

    } catch (error) {
       toast.error(
      error instanceof Error
        ? error.message
        : "Unable to subscribe."
    );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col md:px-12 px-6 py-10 justify-center items-center gap-4">
      <H1 className="text-center">Join our Community</H1>
      <p className="md:text-base text-sm text-[#484646]">
        Stay up to date with our latest stories
      </p>

      <form className="flex py-4 w-full md:w-[50%]"     onSubmit={handleSubmit}>

        <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
    className="py-2 px-3 bg-gray-200 w-full text-sm md:text-base text-[#525252]"
    required
  />
        <input
          type="email"
             value={email}
    onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="py-2 px-3 bg-gray-200 w-full text-sm md:text-base text-[#525252] placeholder:text-[#525252]"
        />
     <button
    type="submit"
    disabled={loading}
    className="w-25 text-white p-2 bg-primaryBg disabled:opacity-50"
>
    {loading ? "Signing Up..." : "Sign Up"}
</button>
      </form>
    </div>
  );
};

export default Community;
