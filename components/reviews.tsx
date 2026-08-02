"use client";

import React, { useEffect, useState } from "react";
import { Mail, Star, X, CheckCircle2, Award } from "lucide-react";
import { api } from "./lib/api";
import { toast } from "sonner";
import { Review } from "./types/api";

interface ReviewsProps {
  productSlug: string;
  editorNote?: string;
  editorRating?: number;
}

const Reviews = ({
  productSlug,
  editorNote = "Formulated with clinical precision. This beauty formula delivers exceptional hydration and leaves a radiant, non-greasy finish after just 3 days of consistent use.",
  editorRating = 4.9,
}: ReviewsProps) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

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
        toast.error("Unable to load reader reviews.");
      } finally {
        setLoadingReviews(false);
      }
    };

    loadReviews();
  }, [productSlug]);

  const handleReviewPreSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment || !reviewerName || !reviewerEmail) {
      toast.error("Please fill in all the required fields.");
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
      comment,
      name: reviewerName,
    };

    try {
      const newReview = await api.publicShop.postProductReviewsBySlug(
        productSlug,
        reviewPayload,
      );

      if (shouldSubscribe) {
        localStorage.setItem("newsletterEmail", reviewerEmail);
      }

      toast.success("Thank you! Your review has been submitted successfully.");
      setIsSubmittedSuccess(true);

      // 1. Instantly append the newly created review to the top of the local state list
      const createdReview = newReview || {
        _id: Date.now().toString(),
        name: reviewerName,
        rating,
        comment,
        createdAt: new Date().toISOString(),
      };

      setReviews((prevReviews) => [createdReview, ...prevReviews]);

      // 2. Reset form fields
      setComment("");
      setReviewerName("");
      setIsModalOpen(false);
      setRating(5);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Average Rating Calculation
  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
        ).toFixed(1)
      : "5.0";

  return (
    <div className="max-w-3xl mt-16 border-t border-stone-200 pt-12 text-stone-900 font-sans">
      {/* Editorial & Community Section Header */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
          Tested & Reviewed
        </span>
        {/* <h2 className="text-3xl font-serif font-bold mt-1 text-stone-900">
          Editor & Reader Feedback
        </h2> */}
      </div>

      {/* Editor's Choice Box */}
      {/* <div className="mb-12 bg-stone-50 border border-stone-200/80 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Editor’s Pick</span>
        </div>

        <p className="font-serif italic text-base md:text-lg text-stone-800 leading-relaxed">
          &ldquo;{editorNote}&rdquo;
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-stone-200/60 pt-4 text-xs text-stone-500">
          <span className="font-medium text-stone-700">
            Seraphé Editorial Team
          </span>
          <div className="flex items-center gap-1 font-semibold text-stone-800">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{editorRating} / 5.0</span>
          </div>
        </div>
      </div> */}

      {/* Rating Overview Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-stone-200 rounded-xl p-6 mb-12 gap-6">
        <div className="text-center md:text-left">
          <p className="text-4xl font-serif font-bold text-stone-900">
            {avgRating}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-1 my-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(Number(avgRating))
                    ? "fill-amber-400 text-amber-400"
                    : "text-stone-300"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-stone-500">
            Based on {reviews.length} reader reviews
          </p>
        </div>

        <a
          href="#write-review"
          className="bg-stone-900 text-white px-5 py-2.5 rounded-lg text-xs font-medium uppercase tracking-wider hover:bg-stone-800 transition-colors"
        >
          Leave Your Feedback
        </a>
      </div>

      {/* Reader Reviews List */}
      <div className="mb-14">
        <h3 className="text-xl font-serif font-bold mb-6 text-stone-900">
          Reader Community ({reviews.length})
        </h3>

        {loadingReviews ? (
          <p className="text-xs text-stone-400 animate-pulse">
            Loading reader responses...
          </p>
        ) : reviews.length === 0 ? (
          <div className="text-center py-8 bg-stone-50/50 rounded-xl border border-dashed border-stone-200">
            <p className="text-sm text-stone-500">
              No reader reviews yet. Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="border border-stone-200 rounded-xl p-5 bg-white transition-shadow hover:shadow-xs"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-stone-900 text-sm">
                        {review.name}
                      </p>
                      <span className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle2 className="w-3 h-3" /> Verified Reader
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {new Date(review.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-stone-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-sm text-stone-700 leading-relaxed font-normal">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Review Submission Form */}
      <div
        id="write-review"
        className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-200"
      >
        <h3 className="text-xl font-serif font-bold mb-2">
          Share Your Reader Review
        </h3>
        <p className="text-xs text-stone-500 mb-6">
          Your feedback helps our community and editorial team evaluate beauty
          formulas.
        </p>
        {isSubmittedSuccess ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-lg font-bold">
              ✓
            </div>
            <h4 className="text-lg font-serif font-bold text-emerald-900">
              Thank you for your feedback!
            </h4>
            <p className="text-xs text-emerald-700">
              Your review has been submitted successfully and will appear
              shortly.
            </p>
            <button
              onClick={() => setIsSubmittedSuccess(false)}
              className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              Write another review
            </button>
          </div>
        ) : (
          <form onSubmit={handleReviewPreSubmit} className="space-y-4">
            {/* Interactive Star Rating Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase font-semibold tracking-wider text-stone-500">
                Your Rating
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
                      className="p-1 focus:outline-hidden transition-transform hover:scale-110"
                      aria-label={`Rate ${starIndex} out of 5 stars`}
                    >
                      <Star
                        className={`w-5 h-5 transition-colors ${
                          isFilled
                            ? "fill-amber-400 text-amber-400"
                            : "fill-transparent text-stone-300"
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="text-xs font-semibold text-stone-500 ml-2">
                  ({hoverRating ?? rating} / 5)
                </span>
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase font-semibold tracking-wider text-stone-500">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  className="border p-2.5 text-sm rounded-lg bg-white border-stone-300 focus:outline-hidden focus:border-stone-900"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase font-semibold tracking-wider text-stone-500">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={reviewerEmail}
                  onChange={(e) => setReviewerEmail(e.target.value)}
                  className="border p-2.5 text-sm rounded-lg bg-white border-stone-300 focus:outline-hidden focus:border-stone-900"
                />
              </div>
            </div>

            {/* Comments */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase font-semibold tracking-wider text-stone-500">
                Your Review
              </label>
              <textarea
                rows={4}
                required
                placeholder="Share details about scent, texture, or results..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border p-2.5 text-sm rounded-lg bg-white border-stone-300 focus:outline-hidden focus:border-stone-900 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primaryBg text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-stone-800 transition-colors w-full md:w-auto"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>

      {/* Newsletter Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl border border-stone-100 text-center relative">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 text-xl">
              <Mail />
            </div>

            <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">
              Join the Seraphé Circle?
            </h4>

            <p className="text-xs text-stone-500 mb-6 leading-relaxed">
              Before we post your review, would you like to receive insider
              beauty tips, clinical updates, and exclusive discount rewards at{" "}
              <span className="font-semibold text-stone-800">
                {reviewerEmail}
              </span>
              ?
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleFinalSubmit(true)}
                disabled={isSubmitting}
                className="bg-primaryBg text-white w-full py-3 rounded-lg font-medium text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting
                  ? "Processing..."
                  : "Yes, Subscribe & Submit Review"}
              </button>

              <button
                onClick={() => handleFinalSubmit(false)}
                disabled={isSubmitting}
                className="text-stone-500 w-full py-2 rounded-lg text-xs font-medium uppercase tracking-wider hover:text-stone-900 transition-colors"
              >
                No thanks, just submit my review
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 text-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
