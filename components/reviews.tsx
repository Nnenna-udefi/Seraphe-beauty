import { Mail, X } from "lucide-react";
import React, { useState } from "react";

const Reviews = ({ productId }: { productId: number }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // intercepts the click to show the modal
  const handleReviewPreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment || !reviewerName || !reviewerEmail) {
      alert("Please fill in all the fields before submitting your review.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleFinalSubmit = async (shouldSubscribe: boolean) => {
    setIsSubmitting(true);

    const reviewPayload = {
      productId,
      rating,
      comment,
      name: reviewerName,
      email: reviewerEmail,
      subscribed: shouldSubscribe,
    };
    try {
      // API call to submit the review to your backend database
      console.log("Submitting final review payload...", reviewPayload);

      if (shouldSubscribe) {
        console.log(
          `Adding ${reviewerEmail} to the Seraphé newsletter list...`,
        );
        // fetch('/api/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email: reviewerEmail }) })
      }

      // Simulated API Response Delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Thank you! Your review has been submitted successfully.");

      // Reset Form fields
      setComment("");
      setReviewerName("");
      setReviewerEmail("");
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
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase font-semibold tracking-wider text-foreground">
            Rating
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border p-2.5 rounded bg-white text-sm w-32 border-gray-300"
          >
            <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
            <option value={4}>⭐⭐⭐⭐ (4)</option>
            <option value={3}>⭐⭐⭐ (3)</option>
            <option value={2}>⭐⭐ (2)</option>
            <option value={1}>⭐ (1)</option>
          </select>
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
