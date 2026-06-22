"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { H1 } from "./heading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps<T> {
  title: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

export default function Carousel<T extends { id: string | number }>({
  title,
  data,
  renderItem,
  className,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);

  // navigation handlers
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={`md:px-12 px-6 py-10 md:py-16${className}`}>
      <div className="flex justify-between items-center mb-6">
        <H1>{title}</H1>

        <div className="flex items-center gap-2 font-medium text-sm md:text-base tracking-wider text-black select-none">
          <button
            onClick={handlePrev}
            className="cursor-pointer p-1 hover:opacity-60 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentIndex === 1}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <span>
            {currentIndex}/{data.length}
          </span>
          <button
            onClick={handleNext}
            className="cursor-pointer p-1 hover:opacity-60 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentIndex === data.length}
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          // When window width is >= 768px (md)
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
