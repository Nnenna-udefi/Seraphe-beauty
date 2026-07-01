"use client";
import Link from "next/link";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import Community from "./ui/community";
import Image from "next/image";

// Mock data for the social hub grid (Replace images with your actual model/product assets)
const communityGallery = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600&auto=format&fit=crop",
    alt: "Community feature 1",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
    alt: "Community feature 2",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    alt: "Community feature 3",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop",
    alt: "Community feature 4",
  },
];

export default function JoinCommunity() {
  return (
    <div className="text-darkText py-10 md:py-16 md:px-12 px-6">
      {/* SECTION 1: THE CORE PERKS (The "What's in it for me?") */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-b border-darkText">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-cantataOne text-2xl md:text-5xl text-black font-normal mb-4">
            The Perks of Belonging
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            As a part of Seraphé, you gain exclusive access to tailored beauty
            experiences and insider content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="w-12 h-12 rounded-full bg-boxBg flex items-center justify-center text-primaryBg text-lg font-medium">
              01
            </div>
            <h3 className="text-lg md:text-xl font-normal text-black font-cantataOne">
              The Seraphé Edits
            </h3>
            <p className="text-darkText text-sm leading-relaxed">
              Weekly expert skincare routines, ingredient deep-dives, and
              personalized beauty secrets curated exclusively by our editorial
              team.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="w-12 h-12 rounded-full bg-boxBg flex items-center justify-center text-primaryBg text-lg font-medium">
              02
            </div>
            <h3 className="text-lg md:text-xl font-normal text-black font-cantataOne">
              Early Product Access
            </h3>
            <p className="text-darkText text-sm leading-relaxed">
              Be the first to shop our highly anticipated collection drops,
              limited-edition bundles, or rare restocks before they are opened
              to the public.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="w-12 h-12 rounded-full bg-boxBg flex items-center justify-center text-primaryBg text-lg font-medium">
              03
            </div>
            <h3 className="text-lg md:text-xl font-normal text-black font-cantataOne">
              Community Privileges
            </h3>
            <p className="text-darkText text-sm leading-relaxed">
              Enjoy custom birthday rewards, member-only promotional events,
              private seasonal masterclasses, and ongoing complimentary shipping
              perks.
            </p>
          </div>
        </div>
      </section>

      <Community />

      {/* SECTION 2: CHANNELS & SOCIAL HUB */}
      <section className="max-w-6xl mx-auto md:px-12 px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Chat Invite Box */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-primaryBg font-bold">
              Connect In Real Time
            </span>
            <h2 className="font-cantataOne text-3xl md:text-4xl text-black font-normal leading-tight">
              Join Our Private Broadcast Circle
            </h2>
            <p className="text-darkText text-sm md:text-base leading-relaxed">
              Step closer into our inner circle on WhatsApp. Share your morning
              glowing skin journeys, trade honest hair texture tips, and get
              real-time answers to your burning beauty questions.
            </p>

            {/* Elegant Button Matching the Brand Palette */}
            <Link
              href="https://whatsapp.com" /* Replace with actual community invite link */
              target="_blank"
              className="inline-flex items-center gap-3 bg-primaryBg hover:bg-primaryText text-white font-medium py-3.5 px-6 transition-all uppercase tracking-wider text-xs md:text-sm shadow-md group"
            >
              <MessageSquare size={16} />
              Enter the WhatsApp Space
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Right Column: Curated Visual Social Hub Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex md:flex-row flex-col justify-between items-end border-b border-gray-100 pb-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                  Follow Us
                </p>
                <h4 className="font-cantataOne text-lg text-black font-normal mt-0.5">
                  @seraphebeauty
                </h4>
              </div>
              <Link
                href="https://instagram.com/seraphe"
                target="_blank"
                className="text-primaryBg hover:opacity-70 transition-opacity flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold"
              >
                <BsInstagram size={14} /> View Instagram
              </Link>
            </div>

            {/* Visual Mosaic Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {communityGallery.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square w-full bg-boxBg overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle hover overlay to tie into community sharing concept */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <p className="text-center sm:text-right text-xs italic text-gray-400 pt-1">
              Tag{" "}
              <span className="font-semibold not-italic text-stone-600">
                #SerapheBeauty
              </span>{" "}
              to be featured.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
