import { ArrowLeft } from "lucide-react";

import { ProductCard } from "@/components/product/product-card";

const offers = [
  {
    name: "فستان بناتي أنيق",
    category: "بناتي",
    age: "5 - 7 سنوات",
    originalPrice: "150,000 ل.س",
    price: "110,000 ل.س",
    availability: "متوفر" as const,
    discount: "خصم 27%",
    placeholderTone: "rose" as const,
  },
  {
    name: "كنزة صبياني دافئة",
    category: "صبياني",
    age: "6 - 8 سنوات",
    originalPrice: "120,000 ل.س",
    price: "90,000 ل.س",
    availability: "متوفر" as const,
    discount: "خصم 25%",
    placeholderTone: "blue" as const,
  },
  {
    name: "طقم مواليد قطني",
    category: "بيبي",
    age: "0 - 9 أشهر",
    originalPrice: "95,000 ل.س",
    price: "72,000 ل.س",
    availability: "متوفر" as const,
    discount: "عرض",
    placeholderTone: "sage" as const,
  },
  {
    name: "قميص يومي مريح",
    category: "السن المحير",
    age: "11 - 14 سنة",
    originalPrice: "105,000 ل.س",
    price: "79,000 ل.س",
    availability: "غير متوفر" as const,
    discount: "خصم 25%",
    placeholderTone: "sand" as const,
  },
];

export function OffersSection() {
  return (
    <section
      id="offers"
      dir="rtl"
      className="scroll-mt-20 border-y border-[#ece5dc] bg-[#f8f3ed] px-5 py-16 sm:px-8 sm:py-20 lg:scroll-mt-24 lg:px-10 lg:py-24"
      aria-labelledby="offers-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-wide text-[#a33b36]">
            أسعار مميزة لفترة محدودة
          </p>

          <h2
            id="offers-title"
            className="mt-2 text-3xl font-bold tracking-tight text-[#302d2a] sm:text-4xl"
          >
            العروض الحالية
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#e5232a]/40" />
            <span className="size-2 rounded-full bg-[#e5232a]" />
            <span className="h-px w-8 bg-[#e5232a]/40" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {offers.map((offer) => (
            <ProductCard key={offer.name} {...offer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e5232a] px-7 text-sm font-bold text-white transition-colors hover:bg-[#cf1820] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a]"
          >
            عرض جميع العروض
            <ArrowLeft className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
