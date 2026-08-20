"use client";

import { Shirt } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { PlaceholderTone } from "@/data/products";

interface ProductGalleryProps {
  name: string;
  image?: string;
  images?: string[];
  placeholderTone: PlaceholderTone;
}

const placeholderStyles: Record<PlaceholderTone, string> = {
  rose: "bg-[#f6e8e5] text-[#b65b59]",
  blue: "bg-[#e8eff1] text-[#587984]",
  sand: "bg-[#f2eadf] text-[#9b7651]",
  sage: "bg-[#e9eee8] text-[#66806a]",
};

export function ProductGallery({
  name,
  image,
  images,
  placeholderTone,
}: ProductGalleryProps) {
  const galleryImages = images?.length ? images : image ? [image] : [];
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <div dir="rtl">
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#e7e0d7] ${
          selectedImage ? "bg-white" : placeholderStyles[placeholderTone]
        }`}
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt={name}
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center"
            role="img"
            aria-label={`صورة مؤقتة لمنتج ${name}`}
          >
            <div className="flex size-32 items-center justify-center rounded-full border border-current/15 bg-white/35 sm:size-40">
              <Shirt className="size-16 opacity-65 sm:size-20" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>

      {galleryImages.length > 1 ? (
        <div className="mt-4 grid grid-cols-4 gap-3" aria-label="صور المنتج">
          {galleryImages.map((galleryImage, index) => (
            <button
              key={galleryImage}
              type="button"
              onClick={() => setSelectedImage(galleryImage)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a] ${
                selectedImage === galleryImage
                  ? "border-[#e5232a]"
                  : "border-transparent hover:border-[#d9d1c7]"
              }`}
              aria-label={`عرض صورة المنتج ${index + 1}`}
              aria-pressed={selectedImage === galleryImage}
            >
              <Image
                src={galleryImage}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
