import { formatDate } from "@/components/helper/formatDate";
import { api } from "@/components/lib/api";
import Breadcrumb from "@/components/ui/breadCrumbs";
// import Carousel from "@/components/ui/carousel";
import Community from "@/components/ui/community";
import { H1, H3 } from "@/components/ui/heading";
import ProductCard from "@/components/ui/productCard";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TrendDetails({ params }: Props) {
  const { slug } = await params;

  const [trend, allTrends] = await Promise.all([
    api.publicShop.getTrendsBySlug(slug),
    api.publicShop.getTrends(),
  ]);

  const related = allTrends
    .filter((t) => t.slug !== slug && t.focusAreaSlug === trend.focusAreaSlug)
    .slice(0, 3);

  return (
    <div className="py-10 md:px-12 min-h-screen md:py-16">
      <div className="max-w-8xl mx-auto px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Trends", href: "/trends" },
            {
              label: trend.focusArea,
              href: `/trends/${trend.focusAreaSlug}`,
            },
            { label: trend.title },
          ]}
        />
        <h3 className="uppercase text-yellowText text-sm py-2">
          {trend.focusArea}
        </h3>
        <H1 className="py-3">{trend.title}</H1>
        <p className="text-[#484646] flex gap-1 items-center text-sm py-2">
          <span>By {""}</span>
          <span>{trend.author}</span> <span>.</span>{" "}
          {formatDate(trend.createdAt)}
        </p>

        <div>
          {trend.label}•{trend.readTimeMinutes} min read
        </div>

        <div className="py-3">
          <Image
            src={trend.featureImage}
            alt={trend.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <div className="py-10 md:py-16 flex md:flex-row flex-col gap-6">
          <div className="flex-1">
            <div className="text-black flex flex-col md:text-base text-sm gap-4">
              <div
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{
                  __html: trend.content,
                }}
              />

              <div className="flex gap-2 flex-wrap">
                {trend.images.map((image) => (
                  <Image
                    key={trend.title}
                    src={image}
                    alt={trend.title}
                    width={1200}
                    height={600}
                    className="w-full object-cover"
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {trend.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-boxBg px-3 py-1 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Recommended Products */}
            <div className="py-6 md:py-8">
              <H3>Recommended Products</H3>
              <p className="py-2">
                Shop editor-approved picks and great beauty science innovation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>

          {/* Sidebar - Related Stories */}
          <div className="flex flex-col gap-3 md:w-1/3">
            <H3>Related Stories</H3>
            <div className="flex gap-4 flex-col pt-6 md:pt-0">
              {related && related.length > 0 ? (
                related.map((item) => (
                  <div key={item._id} className="flex gap-2">
                    <Image
                      src={item.featureImage}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                    <div>
                      <h3 className="uppercase text-yellowText text-xs">
                        {item.focusArea}
                      </h3>
                      <h1 className="text-sm font-medium py-1">{item.title}</h1>
                      <p className="uppercase text-darkText text-xs">
                        {item.author}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No related stories available.</p>
              )}
            </div>
          </div>
        </div>

        <Community />
        {/* 
        <Carousel
          title="Read More"
          data={trend}
          className="bg-boxBg"
          renderItem={(item) => (
            <div className="flex flex-col h-full">
              <div className="overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={0}
                  className="w-full h-75 object-cover"
                />
              </div>
              <div className="flex flex-col grow">
                <h3 className="uppercase text-yellowText text-sm pt-4">
                  {item.category}
                </h3>
                <h4 className="md:text-xl text-base py-2 font-normal text-black">
                  {item.title}
                </h4>
                <p className="uppercase text-darkText text-sm mt-auto">
                  {item.author}
                </p>
              </div>
            </div>
            
          )}
        /> */}
      </div>
    </div>
  );
}
