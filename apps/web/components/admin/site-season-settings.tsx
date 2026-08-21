"use client";

import { Check, Snowflake, Sun } from "lucide-react";
import { useState } from "react";

import type { ProductSeason } from "@/data/products";

interface SiteSeasonSettingsProps {
  initialSeason: ProductSeason;
}

export function SiteSeasonSettings({ initialSeason }: SiteSeasonSettingsProps) {
  const [activeSeason, setActiveSeason] = useState(initialSeason);
  const isSummer = activeSeason === "summer";

  return (
    <div className="space-y-6">
      <section className="rounded-[1.75rem] border border-[#e3dcd4] bg-white p-5 sm:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold text-[#a33b36]">عرض المتجر العام</p>
          <h2 className="mt-2 text-2xl font-bold text-[#302d2a]">
            الموسم المعروض حالياً
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#756e68]">
            اختر موسماً واحداً ليكون الموسم الذي سيشاهده العملاء على الموقع العام لاحقاً.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setActiveSeason("summer")}
            className={`relative flex min-h-32 items-center gap-4 rounded-[1.5rem] border-2 p-5 text-right transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a] ${
              isSummer
                ? "border-[#e5232a] bg-[#fff3ef]"
                : "border-[#e3dcd4] bg-[#fffdf9] hover:border-[#e5232a]/35"
            }`}
            aria-pressed={isSummer}
          >
            <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-[#fff0d7] text-[#c27a12]">
              <Sun className="size-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold text-[#302d2a]">الصيفي</span>
              <span className="mt-1 block text-xs leading-6 text-[#756e68]">
                عرض منتجات الموسم الصيفي للعملاء
              </span>
            </span>
            {isSummer ? (
              <span className="absolute top-4 left-4 flex size-6 items-center justify-center rounded-full bg-[#e5232a] text-white">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
            ) : null}
          </button>

          <button
            type="button"
            onClick={() => setActiveSeason("winter")}
            className={`relative flex min-h-32 items-center gap-4 rounded-[1.5rem] border-2 p-5 text-right transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a] ${
              !isSummer
                ? "border-[#e5232a] bg-[#fff3ef]"
                : "border-[#e3dcd4] bg-[#fffdf9] hover:border-[#e5232a]/35"
            }`}
            aria-pressed={!isSummer}
          >
            <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-[#e9f2f5] text-[#4f7d8b]">
              <Snowflake className="size-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold text-[#302d2a]">الشتوي</span>
              <span className="mt-1 block text-xs leading-6 text-[#756e68]">
                عرض منتجات الموسم الشتوي للعملاء
              </span>
            </span>
            {!isSummer ? (
              <span className="absolute top-4 left-4 flex size-6 items-center justify-center rounded-full bg-[#e5232a] text-white">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
            ) : null}
          </button>
        </div>

        <div
          className={`mt-6 rounded-2xl border px-5 py-4 text-sm font-bold ${
            isSummer
              ? "border-[#f1d8b6] bg-[#fff9ed] text-[#8f5c15]"
              : "border-[#cfe0e5] bg-[#f2f8fa] text-[#426a76]"
          }`}
          aria-live="polite"
        >
          الموقع يعرض حالياً المنتجات {isSummer ? "الصيفية" : "الشتوية"}
        </div>
      </section>

      <aside className="rounded-[1.5rem] border border-[#ead9d1] bg-[#fff8f5] p-5 sm:p-6">
        <h2 className="font-bold text-[#713a34]">الفرق بين التبويبات وهذا الإعداد</h2>
        <p className="mt-2 text-sm leading-7 text-[#805f59]">
          تبويبا الصيفي والشتوي في صفحة إدارة المنتجات يغيّران ما تتصفحه داخل لوحة الإدارة فقط. أما هذا الاختيار فهو المخصص لتحديد الموسم الذي سيظهر للعملاء على الموقع العام.
        </p>
        <p className="mt-3 text-xs font-semibold text-[#9b7770]">
          هذا الإعداد تجريبي ومحلي حالياً، ولن يُحفظ بعد إعادة تحميل الصفحة حتى تتم إضافة التخزين لاحقاً.
        </p>
      </aside>
    </div>
  );
}
