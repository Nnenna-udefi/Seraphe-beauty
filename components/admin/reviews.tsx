"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { authManager } from "../lib/auth";
import { api } from "../lib/api";
import { Product, Review } from "../types/api";
import { toast } from "sonner";
import { Loader2, Star } from "lucide-react";

export default function AdminReviews() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!authManager.isAuthenticated()) {
      router.push("/admin");
      return;
    }
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [reviewsData, productsData] = await Promise.all([
          api.adminShop.getProductReviews(),
          api.adminShop.getProducts(),
        ]);
        if (isMounted) {
          setReviews(reviewsData);
          setProducts(productsData);
        }
      } catch (error: unknown) {
        if (isMounted) {
          const errMsg =
            error instanceof Error ? error.message : "An error occurred";
          toast.error(`Failed to load Reviews: ${errMsg}`);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const getProductName = (productId: string) => {
    const product = products.find((p) => p._id === productId);
    return product ? product.name : "Unknown Product";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold">
          Store Product Reviews Log
        </h1>
        <p className="text-sm text-gray-500">
          Monitor incoming product ratings and newsletter subscription updates.
        </p>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden text-sm max-w-xl shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-10 w-10 animate-spin text-black" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="p-8 text-center text-gray-500 font-medium">
            No reviews yet.
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b text-xs text-gray-400 uppercase font-bold">
                <th className="p-4">Name</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {reviews.map((review) => (
                <tr
                  key={review._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-medium text-gray-800">
                    {getProductName(review.product)}
                  </td>
                  <td className="p-4 font-medium text-gray-800">
                    {review.name}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`h-4 w-4 ${
                            index < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-4 font-medium text-gray-800">
                    {review.email}
                  </td>
                  <td className="p-4 font-medium text-gray-800">
                    {review.reviewText}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
