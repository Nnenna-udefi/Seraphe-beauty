"use client";

import React, { useState } from "react";
import { H1 } from "./heading";
import { api } from "../lib/api";
import { Check } from "lucide-react";

const Community = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    try {
      setLoading(true);

      await api.publicShop.createSubscriber({
        name,
        email,
      });

      setName("");
      setEmail("");
      setShowSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Community Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-yellowText text-xs md:text-sm mb-3">
            Stay in the know
          </p>

          <H1 className="text-center">
            Join our Community
          </H1>

          <p className="text-sm md:text-base text-[#484646] mt-3 max-w-xl mx-auto leading-relaxed">
            Be the first to discover our latest stories, beauty insights,
            skincare trends and exclusive updates from Seraphé.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="flex-1 border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-[#333] outline-none transition focus:border-primaryBg focus:bg-white"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-[#333] outline-none transition focus:border-primaryBg focus:bg-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="md:w-32 bg-primaryBg text-white px-6 py-3.5 text-sm uppercase tracking-wider font-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Joining..." : "Sign Up"}
              </button>
            </div>

            <p className="text-[11px] text-gray-400 mt-4">
              By subscribing, you agree to receive updates from Seraphé.
            </p>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-6 backdrop-blur-sm"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative w-full max-w-md bg-white px-8 py-12 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                <Check
                  size={40}
                  strokeWidth={3}
                  className="text-white"
                />
              </div>
            </div>

            <p className="uppercase tracking-[0.25em] text-yellowText text-xs mb-3">
              Welcome to Seraphé
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-black">
              You&apos;re officially subscribed!
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
              Thank you for joining our community. We&apos;ll keep you
              updated with the latest beauty stories, trends and insights.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-8 bg-primaryBg px-8 py-3 text-sm uppercase tracking-wider text-white transition hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Community;

