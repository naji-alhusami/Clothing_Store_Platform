import type { Metadata } from "next";

import { CatalogPage } from "@/components/product/catalog-page";
import { offers } from "@/data/products";

export const metadata: Metadata = {
  title: "العروض | Kids Home",
  description: "تصفح عروض Kids Home الحالية على ألبسة الأطفال.",
};

export default function OffersPage() {
  return (
    <CatalogPage
      eyebrow="أسعار مميزة لفترة محدودة"
      title="العروض الحالية"
      description="اختيارات أنيقة لأطفالكم بأسعار مخفضة، مع نفس الجودة والراحة التي تحبونها."
      products={offers}
    />
  );
}
