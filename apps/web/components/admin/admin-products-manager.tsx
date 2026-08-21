"use client";

import { Package, Plus, Tag, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

import { AdminProductCard } from "@/components/admin/admin-product-card";
import { AdminProductTable } from "@/components/admin/admin-product-table";
import { SeasonSwitcher } from "@/components/admin/season-switcher";
import {
  productCategories,
  type Product,
  type ProductCategory,
  type ProductSeason,
} from "@/data/products";

type AvailabilityFilter = "all" | "available" | "unavailable";

interface AdminProductsManagerProps {
  initialProducts: Product[];
}

export function AdminProductsManager({ initialProducts }: AdminProductsManagerProps) {
  const [products, setProducts] = useState(initialProducts);
  const [season, setSeason] = useState<ProductSeason>("summer");
  const [category, setCategory] = useState<"all" | ProductCategory>("all");
  const [availability, setAvailability] = useState<AvailabilityFilter>("all");
  const [pendingDelete, setPendingDelete] = useState<Product | null>(null);
  const deleteDialogRef = useRef<HTMLDialogElement>(null);

  const seasonalProducts = useMemo(
    () => products.filter((product) => product.season === season),
    [products, season],
  );

  const filteredProducts = useMemo(
    () =>
      seasonalProducts.filter((product) => {
        const matchesCategory = category === "all" || product.category === category;
        const matchesAvailability =
          availability === "all" ||
          (availability === "available" && product.available) ||
          (availability === "unavailable" && !product.available);

        return matchesCategory && matchesAvailability;
      }),
    [availability, category, seasonalProducts],
  );

  function requestDelete(product: Product) {
    setPendingDelete(product);
    deleteDialogRef.current?.showModal();
  }

  function confirmDelete() {
    if (pendingDelete) {
      setProducts((current) =>
        current.filter((product) => product.id !== pendingDelete.id),
      );
    }
    deleteDialogRef.current?.close();
  }

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold text-[#a33b36]">مخزون بيت الطفل</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#302d2a] sm:text-4xl">
            إدارة المنتجات
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756e68]">
            أضف المنتجات وعدّلها ونظّم مخزون الصيف والشتاء من مكان واحد.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e5232a] px-6 text-sm font-bold text-white hover:bg-[#cf1820] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a]"
        >
          <Plus className="size-4" aria-hidden="true" />
          إضافة منتج
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[1.25rem] border border-[#e3dcd4] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-[#514b46]">عدد المنتجات</p>
            <Package className="size-5 text-[#a33b36]" aria-hidden="true" />
          </div>
          <p className="mt-3 text-2xl font-bold text-[#302d2a]">{seasonalProducts.length}</p>
        </div>
        <div className="rounded-[1.25rem] border border-[#e3dcd4] bg-white p-5">
          <p className="text-sm font-bold text-[#514b46]">المنتجات المتوفرة</p>
          <p className="mt-3 text-2xl font-bold text-[#27763c]">
            {seasonalProducts.filter((product) => product.available).length}
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-[#e3dcd4] bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-[#514b46]">العروض الحالية</p>
            <Tag className="size-5 text-[#e5232a]" aria-hidden="true" />
          </div>
          <p className="mt-3 text-2xl font-bold text-[#e5232a]">
            {seasonalProducts.filter((product) => product.originalPrice).length}
          </p>
        </div>
      </div>

      <section className="mt-8" aria-labelledby="season-products-title">
        <div className="rounded-[1.5rem] border border-[#e3dcd4] bg-[#fffdf9] p-4 sm:p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 id="season-products-title" className="text-lg font-bold text-[#302d2a]">
                منتجات الموسم
              </h2>
              <p className="mt-1 text-xs leading-6 text-[#837b74]">
                هذه التبويبات مخصّصة لتصفح الإدارة فقط، ولا تغيّر موسم الموقع العام.
              </p>
            </div>
            <SeasonSwitcher
              value={season}
              onChange={(nextSeason) => {
                setSeason(nextSeason);
                setCategory("all");
                setAvailability("all");
              }}
            />
          </div>

          <div className="mt-5 grid gap-3 border-t border-[#ece5dc] pt-5 sm:grid-cols-2 lg:max-w-xl">
            <label className="text-sm font-bold text-[#514b46]">
              الفئة
              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value as "all" | ProductCategory)
                }
                className="mt-2 h-11 w-full rounded-xl border border-[#d9d1c7] bg-white px-3 text-sm font-normal outline-none focus:border-[#e5232a] focus:ring-3 focus:ring-[#e5232a]/15"
              >
                <option value="all">كل الفئات</option>
                {productCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-bold text-[#514b46]">
              التوفر
              <select
                value={availability}
                onChange={(event) =>
                  setAvailability(event.target.value as AvailabilityFilter)
                }
                className="mt-2 h-11 w-full rounded-xl border border-[#d9d1c7] bg-white px-3 text-sm font-normal outline-none focus:border-[#e5232a] focus:ring-3 focus:ring-[#e5232a]/15"
              >
                <option value="all">الكل</option>
                <option value="available">متوفر</option>
                <option value="unavailable">غير متوفر</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-5">
          {filteredProducts.length ? (
            <>
              <AdminProductTable products={filteredProducts} onDelete={requestDelete} />
              <div className="space-y-4 md:hidden">
                {filteredProducts.map((product) => (
                  <AdminProductCard
                    key={product.id}
                    product={product}
                    onDelete={requestDelete}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-[#d9d1c7] bg-white px-6 py-14 text-center">
              <p className="font-bold text-[#302d2a]">لا توجد منتجات مطابقة</p>
              <p className="mt-2 text-sm text-[#837b74]">جرّب تغيير الفئة أو حالة التوفر.</p>
            </div>
          )}
        </div>
      </section>

      <dialog
        ref={deleteDialogRef}
        onClose={() => setPendingDelete(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) deleteDialogRef.current?.close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-5 open:grid open:place-items-center backdrop:bg-black/30 backdrop:backdrop-blur-[2px]"
        aria-labelledby="delete-product-title"
      >
        <div
          dir="rtl"
          className="w-full max-w-sm rounded-[1.5rem] border border-[#eadfd7] bg-white p-6 shadow-[0_24px_70px_rgba(54,37,29,0.24)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="delete-product-title" className="text-lg font-bold text-[#302d2a]">
                حذف المنتج
              </h2>
              <p className="mt-2 text-sm leading-7 text-[#756e68]">
                هل أنت متأكد من حذف هذا المنتج؟
              </p>
              {pendingDelete ? (
                <p className="mt-1 text-sm font-bold text-[#514b46]">{pendingDelete.name}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => deleteDialogRef.current?.close()}
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#faf5ef] text-[#514b46] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
            >
              <span className="sr-only">إغلاق</span>
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => deleteDialogRef.current?.close()}
              className="min-h-11 rounded-xl border border-[#d9d1c7] bg-white text-sm font-bold text-[#514b46] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
            >
              إلغاء
            </button>
            <button
              type="button"
              onClick={confirmDelete}
              className="min-h-11 rounded-xl bg-[#bd292f] text-sm font-bold text-white hover:bg-[#a92026] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd292f]"
            >
              حذف
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
