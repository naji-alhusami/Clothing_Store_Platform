import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ProductCard } from "@/components/product/product-card";
import { featuredOffers } from "@/data/products";

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
          {featuredOffers.map((offer) => (
            <ProductCard key={offer.id} {...offer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/offers"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e5232a] px-7 text-sm font-bold text-white transition-colors hover:bg-[#cf1820] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a]"
          >
            عرض جميع العروض
            <ArrowLeft className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
