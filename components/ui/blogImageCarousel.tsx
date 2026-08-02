"use client";

import { useEffect, useState, useCallback } from "react";
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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images, nextSlide]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
      <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl bg-gray-100">
        {images.map((img, index) => (
          <div
            key={img || index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`${title} - image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              className="object-cover w-full h-full"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm
                       flex items-center justify-center
                       hover:bg-white hover:scale-105 transition-all shadow-md text-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm
                       flex items-center justify-center
                       hover:bg-white hover:scale-105 transition-all shadow-md text-black"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Image Counter Badge */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-black"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
