import { ProductForm } from "@/components/admin/product-form";

export default function NewProductPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-bold text-[#a33b36]">إدارة المنتجات</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#302d2a] sm:text-4xl">
          إضافة منتج جديد
        </h1>
        <p className="mt-3 text-sm leading-7 text-[#756e68]">
          أدخل معلومات القطعة وحدد موسمها وخياراتها المتوفرة.
        </p>
      </div>
      <ProductForm submitLabel="إضافة المنتج" />
    </div>
  );
}
