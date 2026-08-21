import { AdminProductsManager } from "@/components/admin/admin-products-manager";
import { products } from "@/data/products";

export default function AdminPage() {
  return <AdminProductsManager initialProducts={products} />;
}
