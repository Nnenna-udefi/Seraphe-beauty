"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div>
        <Image
          src={selectedImage}
          alt={name}
          width={600}
          height={600}
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 flex-wrap">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`border rounded overflow-hidden ${
              selectedImage === image
                ? "border-black"
                : "border-gray-200"
            }`}
          >
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}