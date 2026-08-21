import Link from "next/link";

import { AdminProductImage } from "@/components/admin/admin-product-image";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/product-utils";

interface AdminProductTableProps {
  products: Product[];
  onDelete: (product: Product) => void;
}

export function AdminProductTable({ products, onDelete }: AdminProductTableProps) {
  return (
    <div className="hidden overflow-x-auto rounded-[1.5rem] border border-[#e3dcd4] bg-white md:block">
      <table className="w-full min-w-[840px] border-collapse text-right text-sm">
        <thead className="bg-[#faf6f1] text-xs text-[#766f68]">
          <tr>
            <th className="px-5 py-4 font-bold">الصورة</th>
            <th className="px-5 py-4 font-bold">اسم المنتج</th>
            <th className="px-5 py-4 font-bold">الفئة</th>
            <th className="px-5 py-4 font-bold">العمر</th>
            <th className="px-5 py-4 font-bold">السعر</th>
            <th className="px-5 py-4 font-bold">التوفر</th>
            <th className="px-5 py-4 font-bold">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#eee8e1]">
          {products.map((product) => (
            <tr key={product.id} className="text-[#514b46] hover:bg-[#fffdfa]">
              <td className="px-5 py-4">
                <AdminProductImage product={product} />
              </td>
              <td className="px-5 py-4 font-bold text-[#302d2a]">{product.name}</td>
              <td className="px-5 py-4">{product.category}</td>
              <td className="px-5 py-4">{product.ageRanges.join("، ")}</td>
              <td className="px-5 py-4 font-semibold">{formatPrice(product.price)}</td>
              <td className="px-5 py-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
                    product.available
                      ? "bg-[#edf7ef] text-[#27763c]"
                      : "bg-[#fff0f0] text-[#bd292f]"
                  }`}
                >
                  <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
                  {product.available ? "متوفر" : "غير متوفر"}
                </span>
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="rounded-lg border border-[#d9d1c7] bg-white px-3 py-2 text-xs font-bold text-[#514b46] hover:border-[#e5232a]/50 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
                  >
                    تعديل
                  </Link>
                  <button
                    type="button"
                    onClick={() => onDelete(product)}
                    className="rounded-lg border border-[#f0c7c9] bg-[#fff6f6] px-3 py-2 text-xs font-bold text-[#bd292f] hover:bg-[#ffeded] focus-visible:outline-2 focus-visible:outline-[#bd292f]"
                  >
                    حذف
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
