"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

// Define the shape of our search results
export interface SearchItem {
  id: string | number;
  title: string;
  subtitle?: string;
  img?: string;
  category: "products" | "collections" | "blogs" | "pages";
}

interface PredictiveSearchProps {
  isOpen: boolean;
  onClose: () => void;
  mockData: SearchItem[]; // Pass your database/API results array here
}

type TabType = "products" | "collections" | "blogs" | "pages";

export default function PredictiveSearch({
  isOpen,
  onClose,
  mockData,
}: PredictiveSearchProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("products");
  //   const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically when search overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Filter logic across tabs based on text input
  //   useEffect(() => {
  //     if (!query.trim()) {
  //       setFilteredResults([]);
  //       return;
  //     }

  //     const results = mockData.filter((item) => {
  //       const matchesQuery = item.title
  //         .toLowerCase()
  //         .includes(query.toLowerCase());
  //       const matchesTab = item.category === activeTab;
  //       return matchesQuery && matchesTab;
  //     });

  //     setFilteredResults(results);
  //   }, [query, activeTab, mockData]);
  // Computes only when query, activeTab, or mockData changes
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];

    return mockData.filter((item) => {
      const matchesQuery = item.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesTab = item.category === activeTab;
      return matchesQuery && matchesTab;
    });
  }, [query, activeTab, mockData]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-0 left-0 w-full bg-white shadow-xl z-50 animate-fadeIn border-b border-gray-100">
      <div className="max-w-6xl mx-auto md:px-12 px-6 py-4">
        {/* Search Input Bar */}
        <div className="flex items-center justify-between border-b border-gray-200 py-3">
          <div className="flex items-center gap-3 w-full">
            {/* Search Icon */}
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-lg text-black bg-transparent outline-none border-none placeholder-gray-400 font-normal"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-1 hover:opacity-60 transition-opacity"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-hide border-b border-gray-50 text-sm md:text-base">
          {(["products", "collections", "blogs", "pages"] as TabType[]).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize pb-1 border-b-2 font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "border-amber-800 text-amber-800" // Highlighting style matching regirl
                    : "border-transparent text-gray-400 hover:text-black"
                }`}
              >
                {tab === "blogs" ? "Blog posts" : tab}
              </button>
            ),
          )}
        </div>

        {/* Live Results Panel */}
        <div className="py-6 min-h-37.5">
          {query.trim() === "" ? (
            <p className="text-gray-400 text-sm">
              Start typing to search Seraphie...
            </p>
          ) : filteredResults.length > 0 ? (
            <div className="space-y-4">
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                >
                  {item.img && (
                    <div className="relative w-16 h-16 bg-gray-100 shrink-0 rounded-sm overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="text-black font-medium text-base">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-gray-500 text-xs mt-0.5">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* View All Button matching reference image */}
              <button className="w-full mt-4 bg-amber-900 hover:bg-amber-950 text-white font-medium py-3 px-4 flex items-center justify-center gap-2 transition-all uppercase tracking-wider text-sm">
                View all results
                <span className="text-lg">→</span>
              </button>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              No results found in &quot;{activeTab}&quot; for &quot;{query}
              &quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
