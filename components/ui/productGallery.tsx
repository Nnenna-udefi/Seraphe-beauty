"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images = [],
  name,
}: ProductGalleryProps) {
  // Safe fallback if images array is empty
  const galleryImages = images.length > 0 ? images : ["/placeholder.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = galleryImages[selectedIndex] ?? galleryImages[0];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Feature Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/60 shadow-xs">
        <Image
          key={selectedImage} // Triggers smooth fade animation on change
          src={selectedImage}
          alt={`${name} - Main view`}
          fill
          // priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover object-center animate-fade-in transition-all duration-300"
        />
      </div>

      {/* Thumbnails Row */}
      {galleryImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
          {galleryImages.map((image, index) => {
            const isSelected = selectedIndex === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View image ${index + 1} of ${name}`}
                className={`relative shrink-0 h-20 w-20 rounded-xl overflow-hidden bg-stone-100 transition-all duration-200 focus:outline-hidden ${
                  isSelected
                    ? "ring-2 ring-yellowText ring-offset-2 ring-offset-white opacity-100 scale-102"
                    : "opacity-70 hover:opacity-100 border border-stone-200"
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
