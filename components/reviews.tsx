"use client";
import { Mail, Star, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { api } from "./lib/api";
import { toast } from "sonner";

import { Review } from "./types/api";

const Reviews = ({ productSlug }: { productSlug: string }) => {
  // const { subscriber } = useSite();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  // const email = subscriber.find(
  //   (s) => s.email === localStorage.getItem("newsletterEmail"),
  // )?.email;

  const [reviewerEmail, setReviewerEmail] = useState(() => {
    if (typeof window === "undefined") return "";

    return (
      localStorage.getItem("newsletterEmail") ||
      localStorage.getItem("userEmail") ||
      ""
    );
  });

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await api.publicShop.getProductReviewsBySlug(productSlug);

        setReviews(data.slice(0, 10));
      } catch {
        toast.error("Unable to load reviews.");
      } finally {
        setLoadingReviews(false);
      }
    };

    loadReviews();
  }, [productSlug]);

  const handleReviewPreSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!reviewText || !reviewerName || !reviewerEmail) {
      toast.error("Please fill in all the fields.");
      return;
    }

    const hasNewsletter = !!localStorage.getItem("newsletterEmail");

    if (hasNewsletter) {
      handleFinalSubmit(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleFinalSubmit = async (shouldSubscribe: boolean) => {
    setIsSubmitting(true);

    const reviewPayload = {
      product: productSlug,
      rating,
      email: reviewerEmail,
      reviewText,
      name: reviewerName,
    };

    try {
      await api.publicShop.postProductReviewsBySlug(productSlug, reviewPayload);

      if (shouldSubscribe) {
        console.log(
          `Adding ${reviewerEmail} to the Seraphé newsletter list...`,
        );
        // Persist email locally so future forms also auto-fill
        localStorage.setItem("newsletterEmail", reviewerEmail);
        // await fetch('/api/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email: reviewerEmail }) })
      }

      // Simulated API Response Delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Thank you! Your review has been submitted successfully.");

      // Reset Form fields
      setReviewText("");
      setReviewerName("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mt-12 border-t border-gray-100 pt-10 text-darkText">
      <h3 className="text-xl font-bold mb-6">Review this Product</h3>

      <form onSubmit={handleReviewPreSubmit} className="space-y-4">
        {/* Rating Selector */}
        {/* Interactive Star Rating Selector */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase font-semibold tracking-wider text-gray-500">
            Rating
          </label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((starIndex) => {
              const activeRating = hoverRating ?? rating;
              const isFilled = starIndex <= activeRating;

              return (
                <button
                  key={starIndex}
                  type="button"
                  onClick={() => setRating(starIndex)}
                  onMouseEnter={() => setHoverRating(starIndex)}
                  onMouseLeave={() => setHoverRating(null)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                  aria-label={`Rate ${starIndex} out of 5 stars`}
                >
                  <Star
                    className={`w-6 h-6 transition-colors ${
                      isFilled
                        ? "fill-amber-400 text-amber-400"
                        : "fill-transparent text-gray-300"
                    }`}
                  />
                </button>
              );
            })}
            <span className="text-xs font-semibold text-gray-500 ml-2">
              ({hoverRating ?? rating} / 5)
            </span>
          </div>
        </div>

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold tracking-wider text-gray-500">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Jane Doe"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              className="border p-2.5 text-sm rounded bg-white border-gray-300 focus:outline-none focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase font-semibold tracking-wider text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="jane@example.com"
              value={reviewerEmail}
              onChange={(e) => setReviewerEmail(e.target.value)}
              className="border p-2.5 text-sm rounded bg-white border-gray-300 focus:outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Review Comments Box */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase font-semibold tracking-wider text-gray-500">
            Review Text
          </label>
          <textarea
            rows={4}
            required
            placeholder="Share your thoughts about this beauty formula..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="border p-2.5 text-sm rounded bg-white border-gray-300 focus:outline-none focus:border-black resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded text-xs font-semibold uppercase tracking-widest hover:bg-opacity-80 transition-opacity"
        >
          Submit Review
        </button>
      </form>

      <div className="mt-14 border-t pt-10">
        <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>

        {loadingReviews ? (
          <p>Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-500">Be the first to review this product.</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review._id} className="border rounded-lg p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{review.name}</p>

                    <p className="text-xs text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {review.reviewText}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CONFIRMATION POP-UP MODAL (Renders conditionally) */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl border border-gray-100 text-center relative">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-yellowText flex items-center justify-center mx-auto mb-4 text-xl">
              <Mail />
            </div>

            <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
              Join the Seraphé Circle?
            </h4>

            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Before we post your review, would you like to receive insider
              beauty tips, clinical updates, and exclusive discount rewards at{" "}
              <span className="font-semibold text-gray-800">
                {reviewerEmail}
              </span>
              ?
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleFinalSubmit(true)}
                disabled={isSubmitting}
                className="bg-black text-white w-full py-3 rounded font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting
                  ? "Processing..."
                  : "Yes, Subscribe & Submit Review"}
              </button>

              <button
                onClick={() => handleFinalSubmit(false)}
                disabled={isSubmitting}
                className="text-gray-500 w-full py-2 rounded text-xs font-medium uppercase tracking-wider hover:text-gray-900 transition-colors"
              >
                No thanks, just submit my review
              </button>
            </div>

            {/* Optional Close button to cancel submission entirely */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Reviews;
