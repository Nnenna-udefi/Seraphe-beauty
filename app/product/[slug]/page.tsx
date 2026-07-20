import Image from "next/image";
import { H1 } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/reviews";
import { api } from "@/components/lib/api";
import { notFound } from "next/navigation";

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
    notFound();
  }

  return (
    <div className="py-10 md:px-12 min-h-screen md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="uppercase text-yellowText text-sm">
              {product.category.name}
            </h3>

            <H1>{product.name}</H1>

            <p className="text-darkText text-xl md:text-2xl py-2">
              {product.description}
            </p>

            <p>{product.price}</p>

            <div>
              <p>In stock:</p>
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

// 5. Fallback check: If the id doesn't match anything, don't let it crash
// if (!product) {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-gray-500">Product not found.</p>
//     </div>
//   );
// }
