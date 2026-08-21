import { notFound } from "next/navigation";

import { ProductForm } from "@/components/admin/product-form";
import { products } from "@/data/products";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-bold text-[#a33b36]">إدارة المنتجات</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#302d2a] sm:text-4xl">
          تعديل المنتج
        </h1>
        <p className="mt-3 text-sm leading-7 text-[#756e68]">
          حدّث معلومات {product.name} وخيارات عرضه.
        </p>
      </div>
      <ProductForm initialProduct={product} submitLabel="حفظ التعديلات" />
    </div>
  );
}
