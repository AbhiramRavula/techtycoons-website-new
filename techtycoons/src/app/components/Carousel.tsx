"use client";

import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  title: string;
}

export default function Carousel({ images, title }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return <p className="text-gray-500">No images available.</p>;

  return (
    <div className="p-4">
      <div className="flex items-center justify-center mb-2">
        <button
          className="px-4 py-2 text-2xl text-[#0b0d23] hover:text-blue-600 transition-colors disabled:text-gray-400 disabled:hover:text-gray-400"
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          aria-label="Previous image"
        >
          ‹
        </button>
        <div className="relative w-[600px] h-[400px] mx-4">
          <Image
            src={images[current]}
            alt={`${title} - photo ${current + 1}`}
            fill
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 600px) 100vw, 600px"
            priority={current === 0}
          />
        </div>
        <button
          className="px-4 py-2 text-2xl text-[#0b0d23] hover:text-blue-600 transition-colors disabled:text-gray-400 disabled:hover:text-gray-400"
          onClick={() => setCurrent((c) => Math.min(images.length - 1, c + 1))}
          disabled={current === images.length - 1}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
      <div className="text-center text-sm text-gray-600">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}