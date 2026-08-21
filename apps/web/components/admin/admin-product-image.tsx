import { Shirt } from "lucide-react";
import Image from "next/image";

import type { Product } from "@/data/products";

const tones = {
  rose: "bg-[#f6e8e5] text-[#b65b59]",
  blue: "bg-[#e8eff1] text-[#587984]",
  sand: "bg-[#f2eadf] text-[#9b7651]",
  sage: "bg-[#e9eee8] text-[#66806a]",
};

interface AdminProductImageProps {
  product: Product;
  className?: string;
}

export function AdminProductImage({
  product,
  className = "size-14",
}: AdminProductImageProps) {
  const image = product.images?.[0] ?? product.image;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-xl ${tones[product.placeholderTone]} ${className}`}
    >
      {image ? (
        <Image src={image} alt={product.name} fill sizes="96px" className="object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center" role="img" aria-label={`صورة مؤقتة لمنتج ${product.name}`}>
          <Shirt className="size-6 opacity-65" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
