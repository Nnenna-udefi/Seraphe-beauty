import React from "react";
import Link from "next/link";
import {
  BookOpen,
  ShoppingBag,
  Star,
  GraduationCap,
  Handshake,
  Megaphone,
  Users2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Seraphé Beauty & Fashion",
  description:
    "Discover our beauty education, curated marketplace, writing internships, and brand collaboration opportunities.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen  text-black py-12 md:py-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4 mb-16">
        <div className="text-xs uppercase tracking-widest text-yellowText font-semibold">
          What We Offer
        </div>
        <h1 className="text-2xl md:text-4xl font-medium ">Our Services</h1>
        <p className="text-foreground text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Elevating African beauty through education, product innovation,
          creative storytelling, and empowered community experiences.
        </p>
      </section>

      {/* Main Grid Offerings */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-mustard/60 flex items-center justify-center text-primaryBg">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold ">
              Beauty Education & Resources
            </h2>
            <p className="text-foreground text-sm leading-relaxed font-light">
              Well-researched guides covering skincare routines, UV/SPF
              awareness, acne management, hyperpigmentation, and ingredient
              science.
            </p>
          </div>
          <Link
            href="/beauty-tips"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primaryBg hover:underline pt-2"
          >
            <span>Explore Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-mustard/60 flex items-center justify-center text-primaryBg">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold ">Curated Marketplace</h2>
            <p className="text-foreground text-sm leading-relaxed font-light">
              Carefully vetted sunscreens, skincare essentials, beauty tools,
              and fashion accessories sourced from quality-focused vendors.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primaryBg hover:underline pt-2"
          >
            <span>Visit Shop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-mustard/60 flex items-center justify-center text-primaryBg">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold ">Reviews & Recommendations</h2>
            <p className="text-foreground text-sm leading-relaxed font-light">
              Transparent product testing, comparisons, and skin-type buying
              guides helping you discover what works for your routine.
            </p>
          </div>
          {/* <Link
            href="/beauty-tips"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primaryBg hover:underline pt-2"
          >
            <span>Read Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link> */}
        </div>

        {/* Card 4 - Featured Internship */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-md space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-yellowText">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-yellowText">
              Mentorship Program
            </span>
            <h2 className="text-2xl font-bold text-white">
              Beauty Writing Internship
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Practical experience for aspiring medical and beauty writers.
              Learn SEO content production, research, and earn editorial
              certification.
            </p>
          </div>
          <Link
            href="/about#internship"
            className="inline-flex items-center justify-center bg-primaryBg hover:underline text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors w-full"
          >
            <span>Apply For Internship</span>
          </Link>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-mustard/60 flex items-center justify-center text-primaryBg">
              <Handshake className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold ">Brand Collaborations</h2>
            <p className="text-foreground text-sm leading-relaxed font-light">
              Strategic partnerships including sponsored showcases, giveaways,
              affiliate initiatives, and beauty/fashion storytelling.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primaryBg hover:underline pt-2"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-mustard/60 flex items-center justify-center text-primaryBg">
              <Megaphone className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold ">Advertising & Placements</h2>
            <p className="text-foreground text-sm leading-relaxed font-light">
              Sponsored articles, newsletter spots, marketplace promotions, and
              targeted campaign visibility for aligned brands.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primaryBg hover:underline pt-2"
          >
            <span>Request Media Kit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Community Banner Callout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="bg-amber-50/60 border border-mustard/60 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-primaryBg text-xs font-bold uppercase tracking-widest">
              <Users2 className="w-4 h-4" />
              <span>Community First</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold ">
              Community Engagement & Events
            </h3>
            <p className="text-foreground text-sm md:text-base leading-relaxed font-light">
              We regularly host skincare awareness campaigns, interactive
              discussions, and learning experiences across Africa and beyond.
            </p>
          </div>
          <Link
            href="/join-community"
            className="bg-primaryBg hover:bg-stone-800 text-white text-xs font-semibold px-8 py-3.5 rounded-full shrink-0 transition-colors"
          >
            Join The Community
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto text-center px-6 space-y-6">
        <h2 className="text-3xl font-bold ">Work With Us</h2>
        <p className="text-foreground text-sm md:text-base leading-relaxed font-light">
          Whether you&apos;re looking to learn, shop, collaborate, advertise, or
          contribute to the beauty industry, Seraphé offers a platform where
          opportunity comes together.
        </p>
        <div className="pt-2">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primaryBg hover:bg-primaryBg text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
