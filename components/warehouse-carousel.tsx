"use client";

import Image from "next/image";
import { useRef } from "react";

const images = [
  "/images/warehouse/company-01.webp",
  "/images/warehouse/company-02.webp",
  "/images/warehouse/company-03.webp",
  "/images/warehouse/company-04.webp",
  "/images/warehouse/company-05.webp",
];

type WarehouseCarouselProps = {
  ariaLabel: string;
  imageAlt: string;
  previousLabel: string;
  nextLabel: string;
};

export function WarehouseCarousel({ ariaLabel, imageAlt, previousLabel, nextLabel }: WarehouseCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const firstSlide = track?.querySelector<HTMLElement>(".warehouse-carousel-slide");
    if (!track || !firstSlide) return;

    track.scrollBy({ left: direction * (firstSlide.offsetWidth + 18), behavior: "smooth" });
  }

  return (
    <div className="warehouse-carousel" aria-label={ariaLabel}>
      <div className="warehouse-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label={previousLabel}>←</button>
        <button type="button" onClick={() => move(1)} aria-label={nextLabel}>→</button>
      </div>
      <div className="warehouse-carousel-track" ref={trackRef}>
        {images.map((src, index) => (
          <div className="warehouse-carousel-slide" key={src}>
            <Image
              src={src}
              alt={`${imageAlt} ${index + 1}`}
              fill
              sizes="(max-width: 760px) 88vw, (max-width: 980px) 44vw, 32vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
