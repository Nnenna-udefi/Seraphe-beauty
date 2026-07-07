"use client";
import React, { useState } from "react";

// Mock collections to represent data loaded from a database or constants file
const PRODUCT_CATALOG = [
  { id: "p1", name: "Hydrating Hyaluronic Serum", category: "Skincare" },
  { id: "p2", name: "Clarifying Clay Mask", category: "Skincare" },
  { id: "p3", name: "Sulfate-Free Balancing Shampoo", category: "Hair Care" },
  { id: "p4", name: "Vitamin C Brightening Cream", category: "Skincare" },
];

const BLOG_CATEGORIES = ["Skin", "Lifestyle", "Beauty Tips", "Trends"];

export default function AdminDashboard() {
  // Form State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState("");

  // Toggle products in the checkbox array
  const handleProductToggle = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id],
    );
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !category) {
      setStatusMessage("❌ Please fill out all required fields.");
      return;
    }

    // Generate slug from title automatically
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const blogPayload = {
      title,
      author,
      slug,
      category,
      recommendedProductIds: selectedProducts,
      createdAt: new Date().toISOString(),
    };

    console.log("Saving item payload to backend API...", blogPayload);

    // Success feedback resetting state form values
    setStatusMessage("🎉 Article successfully created and linked!");
    setTitle("");
    setAuthor("");
    setCategory("");
    setSelectedProducts([]);

    setTimeout(() => setStatusMessage(""), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Header */}
        <header className="mb-8 border-b border-gray-200 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">
              Seraphé Workspace
            </h1>
            <p className="text-sm text-gray-500">
              Content Management & Product Association Engine
            </p>
          </div>
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Admin Mode
          </span>
        </header>

        {statusMessage && (
          <div
            className={`mb-6 p-4 rounded text-sm font-medium transition-all ${
              statusMessage.startsWith("❌")
                ? "bg-red-50 text-red-700 border border-red-200"
                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Upload Column Form Layout */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              Compose New Blog Post
            </h2>

            <form onSubmit={handlePublish} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title Box */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase font-semibold tracking-wider text-gray-600">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., Makeup Brushes Are Ruining Your Skin"
                    className="border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                  />
                </div>

                {/* Author Input Box */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase font-semibold tracking-wider text-gray-600">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g., Sophia Panych"
                    className="border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                  />
                </div>
              </div>

              {/* Dynamic Category Row */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase font-semibold tracking-wider text-gray-600">
                  Editorial Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                >
                  <option value="">Choose Category Selection...</option>
                  {BLOG_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Association Mapping Box */}
              <div className="flex flex-col gap-1.5 pt-2">
                <label className="text-xs uppercase font-semibold tracking-wider text-gray-600">
                  Recommend Store Products
                </label>
                <p className="text-xs text-gray-400 mb-2">
                  Check the products that will render in the recommendations
                  grid box on this post page.
                </p>

                <div className="border border-gray-200 rounded-lg p-4 max-h-48 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50">
                  {PRODUCT_CATALOG.map((product) => {
                    const isChecked = selectedProducts.includes(product.id);
                    return (
                      <label
                        key={product.id}
                        className={`flex items-start gap-3 p-2.5 border rounded cursor-pointer transition-colors text-xs ${
                          isChecked
                            ? "bg-amber-50 border-amber-300 font-medium"
                            : "bg-white border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleProductToggle(product.id)}
                          className="mt-0.5 accent-amber-600"
                        />
                        <div className="leading-tight">
                          <p className="text-gray-800">{product.name}</p>
                          <span className="text-[10px] text-gray-400 font-mono tracking-tight">
                            {product.category}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Form Button Action */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-neutral-800 transition-colors w-full md:w-auto px-6 py-3 rounded text-sm uppercase font-semibold tracking-widest shadow-sm"
                >
                  Publish to Feed
                </button>
              </div>
            </form>
          </div>

          {/* Quick Metrics / Summary Overview Right Sidebar Column Layout */}
          <div className="space-y-6">
            {/* Quick Metrics Cards */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                Database Overview
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="border-r border-gray-100">
                  <p className="text-2xl font-serif font-bold text-gray-900">
                    24
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Total Stories</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-gray-900">
                    {PRODUCT_CATALOG.length}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Products Listed</p>
                </div>
              </div>
            </div>

            {/* Simulated Live Feed Track Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                Live Feed Feed Mock
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Items currently visible across Seraphé&apos;s frontend routing
                layers.
              </p>

              <div className="space-y-3">
                <div className="text-xs p-2.5 bg-gray-50 rounded border border-gray-100">
                  <div className="flex justify-between font-semibold text-gray-800">
                    <span className="truncate">
                      Makeup Brushes Are Ruining Your Skin
                    </span>
                    <span className="text-amber-600 shrink-0 ml-2">Skin</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    By Sophia Panych • Linked to 2 Products
                  </p>
                </div>
                <div className="text-xs p-2.5 bg-gray-50 rounded border border-gray-100">
                  <div className="flex justify-between font-semibold text-gray-800">
                    <span className="truncate">
                      Top 3 Regina Daniels Beauty Secrets
                    </span>
                    <span className="text-amber-600 shrink-0 ml-2">Skin</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    By Ogunmola Gbemisola • Linked to 1 Product
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
