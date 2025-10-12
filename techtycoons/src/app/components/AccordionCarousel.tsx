"use client";

import { useState } from "react";
import Carousel from "./Carousel";

interface GalleryEvent {
  title: string;
  images: string[];
}

interface AccordionCarouselProps {
  events: GalleryEvent[];
}

export default function AccordionCarousel({ events }: AccordionCarouselProps) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
        >
          <button
            className={`w-full text-left px-6 py-4 text-white font-semibold focus:outline-none flex justify-between items-center transition-colors ${
              openIndex === idx ? 'bg-blue-600' : 'bg-[#0b0d23] hover:bg-blue-900'
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            aria-expanded={openIndex === idx}
          >
            <span style={{ fontFamily: "var(--font-rajdhani)" }}>{event.title}</span>
            <span 
              className="transform transition-transform duration-200" 
              style={{ transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ▼
            </span>
          </button>
          {openIndex === idx && (
            <div className="bg-gray-50 border-t border-gray-100">
              <Carousel images={event.images} title={event.title} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}