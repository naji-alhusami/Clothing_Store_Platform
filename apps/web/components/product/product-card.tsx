import { Shirt } from "lucide-react";
import Image from "next/image";

type Availability = "متوفر" | "غير متوفر";
type PlaceholderTone = "rose" | "blue" | "sand" | "sage";

interface ProductCardProps {
  name: string;
  category: string;
  age: string;
  price: string;
  availability: Availability;
  image?: string;
  originalPrice?: string;
  discount?: string;
  placeholderTone?: PlaceholderTone;
}

const placeholderStyles: Record<PlaceholderTone, string> = {
  rose: "bg-[#f6e8e5] text-[#b65b59]",
  blue: "bg-[#e8eff1] text-[#587984]",
  sand: "bg-[#f2eadf] text-[#9b7651]",
  sage: "bg-[#e9eee8] text-[#66806a]",
};

export function ProductCard({
  name,
  category,
  age,
  price,
  availability,
  image,
  originalPrice,
  discount,
  placeholderTone = "sand",
}: ProductCardProps) {
  const isAvailable = availability === "متوفر";

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[#e7e0d7] bg-white transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className={`flex h-full items-center justify-center ${placeholderStyles[placeholderTone]}`}
            role="img"
            aria-label={`صورة مؤقتة لمنتج ${name}`}
          >
            <div className="flex size-24 items-center justify-center rounded-full border border-current/15 bg-white/35 sm:size-28">
              <Shirt className="size-11 opacity-65 sm:size-13" aria-hidden="true" />
            </div>
          </div>
        )}

        {discount ? (
          <span className="absolute top-4 right-4 rounded-full bg-[#e5232a] px-3 py-1.5 text-xs font-bold text-white">
            {discount}
          </span>
        ) : null}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#9b5c54]">{category}</p>
            <h3 className="mt-1.5 text-lg leading-7 font-bold text-[#302d2a]">
              {name}
            </h3>
          </div>
          <span
            className={`mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${
              isAvailable
                ? "bg-[#edf7ef] text-[#27763c]"
                : "bg-[#fff0f0] text-[#bd292f]"
            }`}
          >
            <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
            {availability}
          </span>
        </div>

        <p className="mt-2 text-sm text-[#777069]">العمر: {age}</p>

        <div className="mt-5 border-t border-[#eee8e1] pt-4">
          {originalPrice ? (
            <p className="text-xs text-[#918a83] line-through decoration-[#918a83]">
              {originalPrice}
            </p>
          ) : null}
          <p
            className={`font-bold ${
              originalPrice
                ? "mt-1 text-lg text-[#e5232a]"
                : "text-base text-[#302d2a]"
            }`}
          >
            {price}
          </p>
        </div>
      </div>
    </article>
  );
}
