import Image from "next/image";
import { H1 } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/reviews";
import { api } from "@/components/lib/api";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let product;

  try {
    product = await api.publicShop.getProductBySlug(slug);
  } catch {
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
          <div className="w-full">
            <Image
              src={product.images?.[0] || "/placeholder.jpg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="uppercase text-yellowText text-sm">
              {product.category.name}
            </h3>

            <H1>{product.name}</H1>
            <p>★★★★☆ 4.8 (23 reviews)</p>

            <p className="text-base leading-8 text-darkText">
              {product.description}
            </p>

            <p className="text-3xl font-semibold">${product.price}</p>

            <div className="flex flex-col gap-2">
              <p>In Stock:</p>
              <p>Quantity: {product.stock}</p>
            </div>

            <Button className="w-fit">Buy Now</Button>
          </div>
        </div>

        <div className="border-t border-boxBg pt-12 mt-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-serif font-bold mb-2">
              Customer Feedback
            </h2>

            <Reviews productSlug={product.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
