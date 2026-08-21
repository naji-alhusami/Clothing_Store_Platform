"use client";

import { ImagePlus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  productAgeRanges,
  productCategories,
  type Product,
  type ProductCategory,
  type ProductSeason,
} from "@/data/products";

interface ProductFormProps {
  initialProduct?: Product;
  submitLabel: string;
}

interface ProductFormValues {
  name: string;
  category: ProductCategory;
  season: ProductSeason;
  ageRanges: string[];
  sizes: string[];
  colors: string[];
  price: string;
  originalPrice: string;
  description: string;
  available: boolean;
  featured: boolean;
}

const baseSizes = ["2", "4", "6", "8", "10", "12", "14", "3M", "6M", "9M", "12M"];
const baseColors = ["أحمر", "وردي", "أزرق", "كحلي", "أخضر", "بيج", "سكري", "رمادي", "أسود"];
const inputClassName =
  "mt-2 h-12 w-full rounded-xl border border-[#d9d1c7] bg-white px-4 text-sm text-[#302d2a] outline-none transition placeholder:text-[#aaa29a] focus:border-[#e5232a] focus:ring-3 focus:ring-[#e5232a]/15";

function toggleValue(values: string[], value: string) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

export function ProductForm({ initialProduct, submitLabel }: ProductFormProps) {
  const [values, setValues] = useState<ProductFormValues>({
    name: initialProduct?.name ?? "",
    category: initialProduct?.category ?? "صبياني",
    season: initialProduct?.season ?? "summer",
    ageRanges: initialProduct?.ageRanges ?? [],
    sizes: initialProduct?.sizes ?? [],
    colors: initialProduct?.colors ?? [],
    price: initialProduct ? String(initialProduct.price) : "",
    originalPrice: initialProduct?.originalPrice
      ? String(initialProduct.originalPrice)
      : "",
    description: initialProduct?.description ?? "",
    available: initialProduct?.available ?? true,
    featured: initialProduct?.featured ?? false,
  });
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);

  const ageOptions = Array.from(
    new Set([...productAgeRanges, "12+ سنة", ...values.ageRanges]),
  );
  const sizeOptions = Array.from(new Set([...baseSizes, ...values.sizes]));
  const colorOptions = Array.from(new Set([...baseColors, ...values.colors]));

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="space-y-7"
    >
      <section className="rounded-[1.5rem] border border-[#e3dcd4] bg-white p-5 sm:p-7">
        <h2 className="text-lg font-bold text-[#302d2a]">المعلومات الأساسية</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className="text-sm font-bold text-[#514b46] md:col-span-2">
            اسم المنتج
            <input
              type="text"
              value={values.name}
              onChange={(event) =>
                setValues((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="طقم صبياني جينز"
              className={inputClassName}
              required
            />
          </label>

          <label className="text-sm font-bold text-[#514b46]">
            الفئة
            <select
              value={values.category}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  category: event.target.value as ProductCategory,
                }))
              }
              className={inputClassName}
            >
              {productCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <fieldset>
            <legend className="text-sm font-bold text-[#514b46]">الموسم</legend>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {([
                ["summer", "صيفي", "☀️"],
                ["winter", "شتوي", "❄️"],
              ] as const).map(([season, label, icon]) => (
                <label
                  key={season}
                  className={`flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 text-sm font-bold ${
                    values.season === season
                      ? "border-[#e5232a] bg-[#fff1ef] text-[#b91f25]"
                      : "border-[#d9d1c7] bg-white text-[#655e58]"
                  }`}
                >
                  <input
                    type="radio"
                    name="season"
                    value={season}
                    checked={values.season === season}
                    onChange={() =>
                      setValues((current) => ({ ...current, season }))
                    }
                    className="sr-only"
                  />
                  <span aria-hidden="true">{icon}</span>
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e3dcd4] bg-white p-5 sm:p-7">
        <h2 className="text-lg font-bold text-[#302d2a]">الخيارات المتوفرة</h2>
        <div className="mt-6 space-y-7">
          <fieldset>
            <legend className="text-sm font-bold text-[#514b46]">الأعمار المتوفرة</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {ageOptions.map((age) => (
                <label
                  key={age}
                  className={`cursor-pointer rounded-xl border px-3.5 py-2.5 text-sm font-semibold ${
                    values.ageRanges.includes(age)
                      ? "border-[#e5232a] bg-[#fff1ef] text-[#b91f25]"
                      : "border-[#d9d1c7] bg-white text-[#655e58]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={values.ageRanges.includes(age)}
                    onChange={() =>
                      setValues((current) => ({
                        ...current,
                        ageRanges: toggleValue(current.ageRanges, age),
                      }))
                    }
                    className="sr-only"
                  />
                  {age}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="border-t border-[#ece5dc] pt-6">
            <legend className="text-sm font-bold text-[#514b46]">
              المقاسات <span className="font-normal text-[#99918a]">(اختياري)</span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {sizeOptions.map((size) => (
                <label
                  key={size}
                  className={`min-w-11 cursor-pointer rounded-xl border px-3 py-2.5 text-center text-sm font-semibold ${
                    values.sizes.includes(size)
                      ? "border-[#e5232a] bg-[#fff1ef] text-[#b91f25]"
                      : "border-[#d9d1c7] bg-white text-[#655e58]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={values.sizes.includes(size)}
                    onChange={() =>
                      setValues((current) => ({
                        ...current,
                        sizes: toggleValue(current.sizes, size),
                      }))
                    }
                    className="sr-only"
                  />
                  {size}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="border-t border-[#ece5dc] pt-6">
            <legend className="text-sm font-bold text-[#514b46]">
              الألوان <span className="font-normal text-[#99918a]">(اختياري)</span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {colorOptions.map((color) => (
                <label
                  key={color}
                  className={`cursor-pointer rounded-full border px-3.5 py-2 text-sm font-semibold ${
                    values.colors.includes(color)
                      ? "border-[#e5232a] bg-[#fff1ef] text-[#b91f25]"
                      : "border-[#d9d1c7] bg-white text-[#655e58]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={values.colors.includes(color)}
                    onChange={() =>
                      setValues((current) => ({
                        ...current,
                        colors: toggleValue(current.colors, color),
                      }))
                    }
                    className="sr-only"
                  />
                  {color}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e3dcd4] bg-white p-5 sm:p-7">
        <h2 className="text-lg font-bold text-[#302d2a]">السعر والوصف</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <label className="text-sm font-bold text-[#514b46]">
            السعر
            <input
              type="number"
              min="0"
              value={values.price}
              onChange={(event) =>
                setValues((current) => ({ ...current, price: event.target.value }))
              }
              placeholder="125000"
              className={inputClassName}
              required
            />
          </label>
          <label className="text-sm font-bold text-[#514b46]">
            السعر قبل الخصم <span className="font-normal text-[#99918a]">(اختياري)</span>
            <input
              type="number"
              min="0"
              value={values.originalPrice}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  originalPrice: event.target.value,
                }))
              }
              placeholder="150000"
              className={inputClassName}
            />
          </label>
          <label className="text-sm font-bold text-[#514b46] md:col-span-2">
            الوصف
            <textarea
              value={values.description}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
              placeholder="طقم صبياني جينز مريح ومناسب للاستخدام اليومي."
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-[#d9d1c7] bg-white px-4 py-3 text-sm leading-7 text-[#302d2a] outline-none placeholder:text-[#aaa29a] focus:border-[#e5232a] focus:ring-3 focus:ring-[#e5232a]/15"
            />
          </label>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e3dcd4] bg-white p-5 sm:p-7">
        <h2 className="text-lg font-bold text-[#302d2a]">التوفر والصور</h2>
        <div className="mt-6 space-y-7">
          <fieldset>
            <legend className="text-sm font-bold text-[#514b46]">حالة التوفر</legend>
            <div className="mt-3 flex flex-wrap gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#d9d1c7] px-4 py-3 text-sm font-semibold text-[#514b46]">
                <input
                  type="radio"
                  name="availability"
                  checked={values.available}
                  onChange={() =>
                    setValues((current) => ({ ...current, available: true }))
                  }
                  className="size-4 accent-[#e5232a]"
                />
                متوفر
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#d9d1c7] px-4 py-3 text-sm font-semibold text-[#514b46]">
                <input
                  type="radio"
                  name="availability"
                  checked={!values.available}
                  onChange={() =>
                    setValues((current) => ({ ...current, available: false }))
                  }
                  className="size-4 accent-[#e5232a]"
                />
                غير متوفر
              </label>
            </div>
          </fieldset>

          <div className="border-t border-[#ece5dc] pt-6">
            <label htmlFor="product-images" className="text-sm font-bold text-[#514b46]">
              صور المنتج
            </label>
            <label
              htmlFor="product-images"
              className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-[1.25rem] border-2 border-dashed border-[#d9d1c7] bg-[#fdfaf6] px-6 py-9 text-center hover:border-[#e5232a]/50"
            >
              <ImagePlus className="size-8 text-[#a33b36]" aria-hidden="true" />
              <span className="mt-3 text-sm font-bold text-[#514b46]">
                اختر صورة أو عدة صور
              </span>
              <span className="mt-1 text-xs text-[#918981]">
                واجهة اختيار محلية فقط، دون رفع أو تخزين
              </span>
            </label>
            <input
              id="product-images"
              type="file"
              accept="image/*"
              multiple
              onChange={(event) =>
                setSelectedFileNames(
                  Array.from(event.target.files ?? []).map((file) => file.name),
                )
              }
              className="sr-only"
            />
            {selectedFileNames.length ? (
              <ul className="mt-3 space-y-1 rounded-xl bg-[#faf5ef] px-4 py-3 text-xs text-[#655e58]">
                {selectedFileNames.map((fileName) => (
                  <li key={fileName}>{fileName}</li>
                ))}
              </ul>
            ) : initialProduct?.images?.length ? (
              <p className="mt-3 text-xs text-[#756e68]">
                الصور الحالية: {initialProduct.images.length}
              </p>
            ) : null}
          </div>

          <label className="flex cursor-pointer items-center justify-between gap-4 border-t border-[#ece5dc] pt-6">
            <span>
              <span className="block text-sm font-bold text-[#514b46]">
                إظهار ضمن المنتجات المميزة
              </span>
              <span className="mt-1 block text-xs leading-6 text-[#918981]">
                إعداد اختياري لتمييز المنتج لاحقاً في الصفحة الرئيسية.
              </span>
            </span>
            <input
              type="checkbox"
              checked={values.featured}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  featured: event.target.checked,
                }))
              }
              className="size-5 shrink-0 accent-[#e5232a]"
            />
          </label>
        </div>
      </section>

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          className="h-12 min-w-44 bg-[#e5232a] px-8 text-sm font-bold text-white hover:bg-[#cf1820] focus-visible:border-[#e5232a] focus-visible:ring-[#e5232a]/25"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
