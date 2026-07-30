"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogImageCarouselProps {
  images: string[];
  title: string;
}

export default function BlogImageCarousel({
  images,
  title,
}: BlogImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  if (!images || images.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
  if (images.length <= 1) return;

  const interval = setInterval(() => {
    nextSlide();
  }, 5000);

  return () => clearInterval(interval);
}, [currentIndex]);

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative w-full max-h-[600px] overflow-hidden rounded-xl">
      <Image
  src={images[currentIndex]}
  alt={`${title} ${currentIndex + 1}`}
  width={1200}
  height={700}
  className="w-full h-full"
/>

        {/* Previous */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-white/90
                       flex items-center justify-center
                       hover:bg-white transition shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-white/90
                       flex items-center justify-center
                       hover:bg-white transition shadow-md"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-black"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}