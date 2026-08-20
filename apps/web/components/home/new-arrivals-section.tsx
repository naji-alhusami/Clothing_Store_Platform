import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ProductCard } from "@/components/product/product-card";
import { newArrivals } from "@/data/products";

export function NewArrivalsSection() {
  return (
    <section
      id="new-arrivals"
      dir="rtl"
      className="scroll-mt-20 bg-[#fffdf9] px-5 py-16 sm:px-8 sm:py-20 lg:scroll-mt-24 lg:px-10 lg:py-24"
      aria-labelledby="new-arrivals-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-wide text-[#a33b36]">
            مختارات الموسم
          </p>

          <h2
            id="new-arrivals-title"
            className="mt-2 text-3xl font-bold tracking-tight text-[#302d2a] sm:text-4xl"
          >
            وصل حديثاً
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#e5232a]/40" />
            <span className="size-2 rounded-full bg-[#e5232a]" />
            <span className="h-px w-8 bg-[#e5232a]/40" />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d9d1c7] bg-white px-7 text-sm font-bold text-[#393633] transition-colors hover:border-[#e5232a]/50 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a]"
          >
            عرض جميع المنتجات
            <ArrowLeft className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
