import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-[#d9d1c7] bg-white px-6 py-16 text-center">
        <p className="font-bold text-[#393633]">لا توجد منتجات مطابقة</p>
        <p className="mt-2 text-sm text-[#777069]">
          جرّب تغيير خيارات الفلترة لعرض منتجات أخرى.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
