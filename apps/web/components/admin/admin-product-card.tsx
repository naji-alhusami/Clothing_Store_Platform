import Link from "next/link";

import { AdminProductImage } from "@/components/admin/admin-product-image";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/product-utils";

interface AdminProductCardProps {
  product: Product;
  onDelete: (product: Product) => void;
}

export function AdminProductCard({ product, onDelete }: AdminProductCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-[#e3dcd4] bg-white p-4">
      <div className="flex gap-4">
        <AdminProductImage product={product} className="size-20" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-bold text-[#302d2a]">{product.name}</h2>
            <span
              className={`shrink-0 rounded-full px-2 py-1 text-[0.65rem] font-bold ${
                product.available
                  ? "bg-[#edf7ef] text-[#27763c]"
                  : "bg-[#fff0f0] text-[#bd292f]"
              }`}
            >
              {product.available ? "متوفر" : "غير متوفر"}
            </span>
          </div>
          <p className="mt-1 text-xs text-[#7b746e]">
            {product.category} · {product.ageRanges.join("، ")}
          </p>
          <p className="mt-2 text-sm font-bold text-[#302d2a]">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#eee8e1] pt-4">
        <Link
          href={`/admin/products/${product.id}/edit`}
          className="inline-flex min-h-10 items-center justify-center rounded-xl border border-[#d9d1c7] text-sm font-bold text-[#514b46] hover:border-[#e5232a]/50 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
        >
          تعديل
        </Link>
        <button
          type="button"
          onClick={() => onDelete(product)}
          className="min-h-10 rounded-xl border border-[#f0c7c9] bg-[#fff6f6] text-sm font-bold text-[#bd292f] hover:bg-[#ffeded] focus-visible:outline-2 focus-visible:outline-[#bd292f]"
        >
          حذف
        </button>
      </div>
    </article>
  );
}
