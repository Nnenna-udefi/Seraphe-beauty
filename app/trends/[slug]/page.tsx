import { formatDate } from "@/components/helper/formatDate";
import { api } from "@/components/lib/api";
import Breadcrumb from "@/components/ui/breadCrumbs";
import Community from "@/components/ui/community";
import { H1, H3 } from "@/components/ui/heading";
import ProductCard from "@/components/ui/productCard";
import Image from "next/image";
import Link from "next/link";
import * as cheerio from "cheerio";
import { Clock, List, User } from "lucide-react";
import BlogImageCarousel from "@/components/ui/blogImageCarousel";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TrendDetails({ params }: Props) {
  const { slug } = await params;

  const [trend, allTrends, products] = await Promise.all([
    api.publicShop.getTrendsBySlug(slug),
    api.publicShop.getTrends(),
    api.publicShop.getProducts(),
  ]);

  const related = allTrends
    .filter((t) => t.slug !== slug && t.focusAreaSlug === trend.focusAreaSlug)
    .slice(0, 3);

  const $ = cheerio.load(trend.content);

  const headings = $("h1,h2,h3")
    .map((_, el) => ({
      id: $(el).attr("id") ?? "",
      text: $(el).text(),
      level: el.tagName,
    }))
    .get();

  return (
    <div className="py-8 md:py-16 min-h-screen text-stone-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Trends", href: "/trends" },
            { label: trend.title },
          ]}
        />
        {/* Article Header */}
        <header className="max-w-4xl mt-6">
          <span className="uppercase text-yellowText text-xs md:text-sm font-semibold tracking-widest">
            {trend.focusArea}
          </span>

          <H1 className="py-3 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {trend.title}
          </H1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-stone-500  py-3 border-y border-stone-200 my-4">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-yellowText" />
              <span>By {trend.author}</span>
            </div>
            <span>•</span>
            <time>{formatDate(trend.createdAt)}</time>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-yellowText" />
              <span>{trend.readTimeMinutes} min read</span>
            </div>
          </div>
        </header>

        {/* Dynamic Table of Contents */}
        {headings.length > 0 && (
          <nav className="my-6 p-5 rounded-xl bg-stone-50 border border-stone-200 max-w-4xl">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wider text-stone-700 ">
              <List className="w-4 h-4 text-yellowText" />
              <span>In This Article</span>
            </div>
            <ul className="space-y-2 text-sm">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={
                    heading.level === "h2"
                      ? "pl-3"
                      : heading.level === "h3"
                        ? "pl-6 text-xs text-stone-500"
                        : "font-medium"
                  }
                >
                  <a
                    href={`#${heading.id}`}
                    className="hover:text-yellowText transition-colors line-clamp-1"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="relative w-full aspect-21/9 my-8 rounded-xl overflow-hidden bg-stone-100">
          <Image
            src={trend.featureImage}
            alt={trend.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          <div className="flex-1 max-w-4xl">
            <div className="text-black flex flex-col md:text-base text-sm gap-4">
              <div
                className="prose prose-neutral  max-w-none text-base md:text-lg leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: trend.content,
                }}
              />

              {trend.images?.length > 1 && (
                <div className="mt-8">
                  <BlogImageCarousel
                    images={trend.images.slice(1)}
                    title={trend.title}
                  />
                </div>
              )}

              {/* Tags */}
              {trend.hashtags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-12 pt-6 border-t border-stone-200">
                  {trend.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-stone-100 px-3.5 py-1 text-xs font-medium text-stone-600 "
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Recommended Products */}
            {products?.length > 0 && (
              <section className="mt-14 pt-8 border-t border-stone-200">
                <H3>Recommended Products</H3>
                <p className="text-stone-500 text-sm mt-1 mb-6">
                  Shop editor-approved picks and beauty science innovations
                  featured in this story.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.slice(0, 2).map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - Related Stories */}
          <aside className="lg:w-80 shrink-0 space-y-6">
            <div className="sticky top-24 p-6 rounded-xl bg-stone-50 border border-stone-200">
              <H3 className="text-lg font-bold mb-4">Related Stories</H3>
              <div className="flex flex-col gap-5">
                {related && related.length > 0 ? (
                  related.map((item) => (
                    <Link
                      key={item._id}
                      href={`/beauty-Lifestyles/${item.slug}`}
                      className="group flex gap-3 items-center"
                    >
                      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-stone-200">
                        <Image
                          src={item.featureImage}
                          alt={item.title}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <span className="uppercase text-yellowText text-[10px] tracking-wider font-semibold">
                          {item.focusArea}
                        </span>
                        <h4 className="text-xs font-semibold line-clamp-2 my-1 group-hover:text-yellowText transition-colors">
                          {item.title}
                        </h4>
                        <span className="uppercase text-stone-400 text-[10px]">
                          By {item.author}
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-stone-500">
                    No related stories available.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>

        <Community />
      </div>
    </div>
  );
}
