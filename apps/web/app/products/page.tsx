import type { Metadata } from "next";

import { CatalogPage } from "@/components/product/catalog-page";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "المنتجات | Kids Home",
  description: "تصفح تشكيلة ألبسة الأطفال لدى Kids Home.",
};

export default function ProductsPage() {
  return (
    <CatalogPage
      eyebrow="تشكيلة بيت الطفل"
      title="جميع المنتجات"
      description="اكتشف تشكيلتنا المختارة من ألبسة الأطفال للصبيان والبنات والبيبي والسن المحيّر."
      products={products}
    />
  );
}
