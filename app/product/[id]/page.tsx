"use client";
import { productCardBlock } from "@/components/lib/constants";
import React, { use } from "react";
import Image from "next/image";
import { H1 } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/reviews";

interface Props {
  params: Promise<{ id: number }>;
}

const ProductDetailsPage = ({ params }: Props) => {
  const { id } = use(params);

  // 4. Find the product
  const product = productCardBlock.find((p) => p.id === Number(id));

  // 5. Fallback check: If the id doesn't match anything, don't let it crash
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="py-10 md:px-12 min-h-screen md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <Image
              src={product.img}
              alt={product.name}
              width={500}
              height={0}
              className="w-full "
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase text-yellowText text-sm">
              {product.category}
            </h3>
            <H1>{product.name}</H1>
            <p className=" text-darkText text-xl md:text-2xl py-2">
              {product.description}
            </p>
            <p>{product.price}</p>
            <Button className="w-fit">Buy Now</Button>
          </div>
        </div>

        {/* review */}
        <div className="border-t border-boxBg pt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-serif font-bold mb-2 text-black">
              Customer Feedback
            </h2>

            {/* Mount the interactive Client Component here */}
            <Reviews productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
