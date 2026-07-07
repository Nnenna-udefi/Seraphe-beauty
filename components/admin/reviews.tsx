"use client";
import React from "react";

export default function AdminReviews() {
  const mockReviews = [
    {
      id: 1,
      product: "Hydrating Hyaluronic Serum",
      user: "Jane Doe",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Absolutely changed my complexion glow!",
      subscribed: true,
    },
    {
      id: 2,
      product: "Clarifying Clay Mask",
      user: "Amara K.",
      rating: "⭐⭐⭐⭐",
      comment: "Deeply clears pores without peeling scales.",
      subscribed: false,
    },
  ];

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

      <div className="bg-white border rounded-lg overflow-hidden text-sm shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-xs text-gray-400 uppercase font-bold">
              <th className="p-4">User</th>
              <th className="p-4">Target Product</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Comment</th>
              <th className="p-4 text-center">Subscribed</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockReviews.map((rev) => (
              <tr key={rev.id} className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-900">{rev.user}</td>
                <td className="p-4 text-gray-600">{rev.product}</td>
                <td className="p-4 tracking-tighter text-xs">{rev.rating}</td>
                <td className="p-4 text-gray-500 italic max-w-xs truncate">
                  &quot;{rev.comment}&quot;
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full font-bold ${
                      rev.subscribed
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {rev.subscribed ? "Yes" : "No"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
