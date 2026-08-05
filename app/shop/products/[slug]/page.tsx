import Image from "next/image";
import Link from "next/link";
import { Star, ExternalLink, ShieldCheck, Tag } from "lucide-react";

import { H1 } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/reviews";
import { api } from "@/components/lib/api";
import Breadcrumb from "@/components/ui/breadCrumbs";
import ProductGallery from "@/components/ui/productGallery";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reviews = await api.publicShop.getProductReviewsBySlug(slug);

  let product;

  try {
    product = await api.publicShop.getProductBySlug(slug);
  } catch {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-xl font-medium text-stone-800">
          Product non trouvable / Not Found
        </h2>
        <p className="text-stone-500 mt-2 text-sm">
          The product you are looking for might have been moved or updated.
        </p>
        <Link
          href="/shop"
          className="mt-4 text-sm font-semibold text-yellowText hover:underline"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const hasDiscount = Boolean(
    product.discountPrice && product.discountPrice < product.price,
  );
  const affiliateUrl = product.productLink ?? "#";

  return (
    <div className="py-8 md:py-16 min-h-screen bg-stone-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            {
              label: product.category.name,
              href: `/shop?category=${product.category.slug}`,
            },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-5 bg-white p-4 md:p-6 rounded-2xl border border-stone-200/80 shadow-xs">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Right Column: Affiliate Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 sticky top-8 bg-white p-6 md:p-8 rounded-2xl border border-stone-200/80 shadow-xs">
            <div>
              <span className="uppercase text-yellowText text-xs font-semibold tracking-widest">
                {product.category.name}
              </span>
              <H1 className="mt-2 text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
                {product.name}
              </H1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center text-amber-400">
                  <Star className="fill-amber-400 text-amber-400" size={18} />
                </div>
                {reviews.length > 0 ? (
                  <span className="text-sm font-medium text-stone-700">
                    {averageRating.toFixed(1)}{" "}
                    <span className="text-stone-400 font-normal">
                      ({reviews.length} customer reviews)
                    </span>
                  </span>
                ) : (
                  <span className="text-xs text-stone-400">No reviews yet</span>
                )}
              </div>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100">
              <span className="md:text-3xl text-lg font-bold text-stone-900">
                ${product.discountPrice ?? product.price}
              </span>
              {hasDiscount && (
                <span className="md:text-lg text-sm text-stone-400 line-through">
                  ${product.price}
                </span>
              )}
              {hasDiscount && (
                <span className="ml-auto text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  Save $
                  {(product.price - (product.discountPrice ?? 0)).toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="text-sm leading-relaxed text-stone-600 space-y-3">
              <p>{product.description}</p>
            </div>

            {/* Affiliate CTA Box */}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full py-6 text-base font-semibold shadow-md flex items-center justify-center gap-2">
                  Buy from Retailer <ExternalLink size={18} />
                </Button>
              </a>

              {/* Trust Badge / Disclosure */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 text-center">
                <ShieldCheck size={14} className="text-stone-400 shrink-0" />
                <span>
                  We may earn a commission from verified partner links.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-stone-200 pt-12 mt-16">
          <div className="max-w-3xl">
            <Reviews productSlug={product.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
