"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import {
  ProductFilters,
  type AvailabilityFilter,
  type ProductFilterValues,
} from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import type { Product, ProductCategory } from "@/data/products";

const initialFilters: ProductFilterValues = {
  category: "all",
  ageRange: "all",
  availability: "all",
};

interface ProductCatalogProps {
  products: Product[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [filters, setFilters] = useState<ProductFilterValues>(initialFilters);
  const [visibleCount, setVisibleCount] = useState(12);
  const mobileFiltersRef = useRef<HTMLDialogElement>(null);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          filters.category === "all" || product.category === filters.category;
        const matchesAge =
          filters.ageRange === "all" || product.ageRange === filters.ageRange;
        const matchesAvailability =
          filters.availability === "all" ||
          (filters.availability === "available" && product.available) ||
          (filters.availability === "unavailable" && !product.available);

        return matchesCategory && matchesAge && matchesAvailability;
      }),
    [filters, products],
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  function updateFilter<Key extends keyof ProductFilterValues>(
    key: Key,
    value: ProductFilterValues[Key],
  ) {
    setFilters((current) => ({ ...current, [key]: value }));
    setVisibleCount(12);
  }

  function resetFilters() {
    setFilters(initialFilters);
    setVisibleCount(12);
  }

  const filterProps = {
    values: filters,
    onCategoryChange: (value: "all" | ProductCategory) =>
      updateFilter("category", value),
    onAgeRangeChange: (value: string) => updateFilter("ageRange", value),
    onAvailabilityChange: (value: AvailabilityFilter) =>
      updateFilter("availability", value),
    onReset: resetFilters,
  };

  return (
    <div dir="rtl">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-[#6f6862]" aria-live="polite">
          <span className="font-bold text-[#302d2a]">{filteredProducts.length}</span>{" "}
          منتج مطابق
        </p>
        <button
          type="button"
          onClick={() => mobileFiltersRef.current?.showModal()}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#d9d1c7] bg-white px-5 text-sm font-bold text-[#393633] hover:border-[#e5232a]/50 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a] lg:hidden"
          aria-haspopup="dialog"
          aria-controls="mobile-product-filters"
        >
          <SlidersHorizontal className="size-4" aria-hidden="true" />
          الفلاتر
        </button>
      </div>

      <div
        dir="ltr"
        className="mt-7 lg:grid lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start lg:gap-8 xl:gap-10"
      >
        <div dir="rtl" className="lg:col-start-1">
          <ProductGrid products={visibleProducts} />

          {visibleCount < filteredProducts.length ? (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 12)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#e5232a] px-8 text-sm font-bold text-white transition-colors hover:bg-[#cf1820] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a]"
              >
                مشاهدة المزيد
              </button>
            </div>
          ) : null}
        </div>

        <aside
          dir="rtl"
          className="hidden rounded-[1.5rem] border border-[#e7e0d7] bg-white p-5 lg:col-start-2 lg:block"
          aria-label="فلترة المنتجات"
        >
          <ProductFilters {...filterProps} idPrefix="desktop" />
        </aside>
      </div>

      <dialog
        ref={mobileFiltersRef}
        id="mobile-product-filters"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            mobileFiltersRef.current?.close();
          }
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 open:flex open:justify-end backdrop:bg-black/25 backdrop:backdrop-blur-[2px] lg:hidden"
        aria-labelledby="mobile-filters-title"
      >
        <div
          dir="rtl"
          className="h-full w-[min(22rem,90vw)] overflow-y-auto rounded-l-3xl bg-[#fffdf9] p-5 shadow-[0_24px_60px_rgba(59,46,36,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 id="mobile-filters-title" className="text-lg font-bold text-[#302d2a]">
              فلترة المنتجات
            </h2>
            <button
              type="button"
              onClick={() => mobileFiltersRef.current?.close()}
              className="flex size-10 items-center justify-center rounded-full border border-[#e6e0d8] bg-white text-[#2f2c29] hover:border-[#e5232a]/40 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
            >
              <span className="sr-only">إغلاق الفلاتر</span>
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <ProductFilters {...filterProps} idPrefix="mobile" />

          <button
            type="button"
            onClick={() => mobileFiltersRef.current?.close()}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e5232a] px-7 text-sm font-bold text-white hover:bg-[#cf1820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a]"
          >
            عرض النتائج ({filteredProducts.length})
          </button>
        </div>
      </dialog>
    </div>
  );
}
