"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H1, H3 } from "./ui/heading";
import { Button } from "./ui/button";
import Hero from "@/components/images/hero1.jpeg";
import TeamSection from "./teamSection";
import { Story, Team } from "./types/api";
import { ArrowRight, Globe, Users, HeartHandshake, Award } from "lucide-react";

interface AboutProps {
  teams: Team[];
  popularStories?: Story[];
}

const About = ({ teams, popularStories = [] }: AboutProps) => {
  return (
    <div className="min-h-screen text-stone-900">
      {/* Hero Header */}
      <section className="bg-stone-100/80 border-b border-stone-200/60 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <span className="uppercase text-amber-700 text-xs font-bold tracking-widest">
            Welcome to Seraphé
          </span>
          <H1 className="text-4xl md:text-5xl  font-bold text-stone-900">
            About Seraphé
          </H1>
          <p className="md:text-lg max-w-2xl text-stone-600 leading-relaxed font-light">
            Find everything you need to know about makeup tools, skincare
            science, and professional application techniques straight from
            African beauty experts.
          </p>
        </div>
      </section>

      {/* Community Impact Stats Banner */}
      <section className="bg-boxBg text-primaryBg py-14 px-6 md:px-12 shadow-inner">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-800">
            <div className="space-y-1">
              <div className="flex justify-center text-amber-500 mb-2">
                <Users size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl  font-bold">640+</h2>
              <p className="text-xs uppercase tracking-wider text-black">
                Community Members
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-center text-amber-500 mb-2">
                <Globe size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl  font-bold">13</h2>
              <p className="text-xs uppercase tracking-wider text-black">
                African Countries
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-center text-amber-500 mb-2">
                <HeartHandshake size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl  font-bold">20</h2>
              <p className="text-xs uppercase tracking-wider text-black">
                Countries Worldwide
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-center text-amber-500 mb-2">
                <Award size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl  font-bold">400M+</h2>
              <p className="text-xs uppercase tracking-wider text-black">
                Global Target Market
              </p>
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-center text-sm md:text-base text-black font-light border-t border-slate-800 pt-8">
            Seraphé is building beauty solutions tailored for more than{" "}
            <strong className="text-primaryBg font-semibold">
              350 million indigenous Africans
            </strong>
            , while serving a potential global market of over{" "}
            <strong className="text-primaryBg font-semibold">
              400 million people
            </strong>
            .
          </p>
        </div>
      </section>

      {/* Main Content Grid: Mission + Popular Stories Sidebar */}
      <section className="max-w-7xl mx-auto py-12 md:py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Info Columns (Mission / Vision / Portfolio) */}
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <H3 className=" text-2xl font-bold text-stone-900">
                Our Mission
              </H3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Our goal is to elevate and promote African beauty standards
                through Afro-inspired innovative beauty products, beauty
                technologies, and accessible beauty education.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <H3 className=" text-2xl font-bold text-stone-900">Our Vision</H3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Seraphé will become Africa&apos;s largest beauty science brand,
                reinventing technologies, market trends, and products that
                inspire the world to appreciate beauty from the African
                perspective.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-2xs space-y-4">
              <H3 className=" text-2xl font-bold text-stone-900">
                Our Portfolio
              </H3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Our product and service portfolio spans skincare formulation
                advice, beauty marketing, and modeling. Seraphé is developing
                unique formulas tailored specifically for rich melanin and
                African skin.
              </p>
              <Link href="#contact">
                <Button className="bg-primaryBg hover:bg-primaryText text-white rounded-full px-6">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="bg-boxBg p-8 rounded-2xl border border-amber-200/60 space-y-4">
              <H3 className=" text-2xl font-bold text-stone-900">
                Join Our Communities Across Africa
              </H3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Are you a beauty enthusiast? Do you want to contribute your
                perspective on how Seraphé is innovating skincare and cosmetic
                technology?
              </p>
              <Button className="bg-primaryBg hover:bg-primaryText text-white rounded-full px-6">
                Join Us
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-2xs space-y-4">
              <H3 className=" text-2xl font-bold text-stone-900">
                Our Services
              </H3>
              <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
                Seraphé is dedicated to empowering individuals through skincare
                education and beauty insights. Check out our{" "}
                <Link
                  href="/services"
                  className="text-amber-800 font-medium underline underline-offset-4 hover:text-amber-900 transition-colors"
                >
                  full range of services
                </Link>{" "}
                to learn more about our marketplace, internships, and
                partnerships.
              </p>
            </div>
          </div>

          {/* Sidebar - Dynamic Popular Stories */}
          <aside className="lg:col-span-4 sticky top-24">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-6">
              <div className=" border-b border-stone-100 pb-3">
                <H3 className=" text-xl font-bold text-stone-900">
                  Popular Stories
                </H3>
              </div>

              <div className="space-y-4">
                {popularStories && popularStories.length > 0 ? (
                  popularStories.slice(0, 4).map((story) => (
                    <Link
                      key={story._id || story.slug}
                      href={`/beauty-tips/${story.slug}`}
                      className="group flex gap-3 items-center hover:bg-stone-50 p-2 rounded-xl transition-colors"
                    >
                      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-stone-100 border border-stone-200/60">
                        <Image
                          src={story.images?.[0] || Hero}
                          alt={story.title}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex flex-col justify-center space-y-1">
                        <span className="uppercase text-amber-700 text-[10px] font-bold tracking-wider">
                          {story.category || "Beauty Science"}
                        </span>
                        <h4 className="text-xs font-semibold text-stone-900 line-clamp-2 leading-snug group-hover:text-amber-700 transition-colors">
                          {story.title}
                        </h4>
                        <span className="text-stone-400 text-[10px]">
                          By {story.author || "Seraphé Editor"}
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-xs text-stone-400 py-4 text-center">
                    No stories loaded yet.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Internship CTA Section */}
      <section className="bg-white border-t border-stone-200/80 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="uppercase text-amber-700 text-xs font-bold tracking-widest">
            Careers & Growth
          </span>
          <H1 className="text-3xl md:text-4xl  font-bold text-stone-900">
            Beauty Writing Internships
          </H1>
          <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light max-w-2xl mx-auto">
            Are you a medical writer or beauty enthusiast? Receive direct beauty
            science mentorship and earn a Certificate in Beauty Science
            Communication from Seraphé.
          </p>

          <Button className="bg-primaryBg hover:bg-primaryText text-white rounded-full px-8 py-3 text-sm">
            Apply Here
          </Button>

          <div className="pt-8 relative aspect-21/9 w-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={Hero}
              alt="Seraphé internship program"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <TeamSection teams={teams} />
      </section>
    </div>
  );
};

export default About;
