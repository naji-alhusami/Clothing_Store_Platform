import { ArrowLeft } from "lucide-react";

import { ProductCard } from "@/components/product/product-card";

const products = [
  {
    name: "طقم أطفال شتوي",
    category: "صبياني",
    age: "4 - 6 سنوات",
    price: "125,000 ل.س",
    availability: "متوفر" as const,
    placeholderTone: "blue" as const,
  },
  {
    name: "فستان قطني ناعم",
    category: "بناتي",
    age: "5 - 7 سنوات",
    price: "135,000 ل.س",
    availability: "متوفر" as const,
    placeholderTone: "rose" as const,
  },
  {
    name: "طقم بيبي مريح",
    category: "بيبي",
    age: "0 - 12 شهراً",
    price: "85,000 ل.س",
    availability: "متوفر" as const,
    placeholderTone: "sage" as const,
  },
  {
    name: "جاكيت عملي خفيف",
    category: "السن المحير",
    age: "10 - 13 سنة",
    price: "175,000 ل.س",
    availability: "غير متوفر" as const,
    placeholderTone: "sand" as const,
  },
];

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
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d9d1c7] bg-white px-7 text-sm font-bold text-[#393633] transition-colors hover:border-[#e5232a]/50 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a]"
          >
            عرض جميع المنتجات
            <ArrowLeft className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
