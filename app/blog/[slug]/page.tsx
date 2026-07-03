import React from "react";
import Image from "next/image";
import { H1, H3 } from "@/components/ui/heading";

import Community from "@/components/ui/community";
import Carousel from "@/components/ui/carousel";
import ProductCard from "@/components/ui/productCard";
import { BlogDetailsBlock, blogDummy } from "@/components/lib/constants";

interface Props {
  params: { slug: string };
}

const BlogDetailsPage = ({ params }: Props) => {
  const { slug } = params;

  // 2. Find the SPECIFIC blog instead of mapping an array
  // (Assuming your data objects have a 'slug' or unique identifier)
  const blog =
    BlogDetailsBlock.find((b) => b.slug === slug) || BlogDetailsBlock[0];

  if (!blog) return <div>Post not found</div>;

  // 3. Filter out the current post from the related sidebar / carousel lists
  const relatedStories = blogDummy.filter((item) => item.slug !== slug);

  return (
    <div className="py-10 md:px-12 min-h-screen md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Render only the single blog object properties directly */}
        <h3 className="uppercase text-yellowText text-sm py-2">
          {blog.category}
        </h3>
        <H1 className="py-3">{blog.title}</H1>
        <p className="text-[#484646] flex gap-1 items-center text-sm py-2">
          <span>By {""}</span>
          <span>{blog.author}</span> <span>.</span> <span>{blog.date}</span>
        </p>

        <div className="py-3">
          <Image
            src={blog.img}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="py-10 md:py-16 flex md:flex-row flex-col gap-6">
          <div className="flex-1">
            <div className="text-black flex flex-col md:text-base text-sm gap-4">
              <p>{blog.para1}</p>
              <p>{blog.para2}</p>

              <h4 className="font-medium pt-4 pb-2">{blog.heading1}</h4>
              <p>{blog.para3}</p>

              {blog.lists?.map((list, idx) => (
                <ol key={idx}>
                  <li>{list}</li>
                </ol>
              ))}

              {/* Keep going with your other paragraphs/headings dynamically */}
              <h4 className="font-medium py-2">{blog.heading2}</h4>
              <p>{blog.para4}</p>
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
              {relatedStories.slice(0, 4).map((item) => (
                <div key={item.id} className="flex gap-2">
                  <Image
                    src={item.img}
                    alt={item.topic}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                  <div>
                    <h3 className="uppercase text-yellowText text-xs">
                      {item.category}
                    </h3>
                    <h1 className="text-sm font-medium py-1">{item.topic}</h1>
                    <p className="uppercase text-darkText text-xs">
                      {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Community />

        <Carousel
          title="Read More"
          data={relatedStories}
          className="bg-boxBg"
          renderItem={(item) => (
            <div className="flex flex-col h-full">
              <div className="overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.topic}
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
                  {item.topic}
                </h4>
                <p className="uppercase text-darkText text-sm mt-auto">
                  {item.author}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
