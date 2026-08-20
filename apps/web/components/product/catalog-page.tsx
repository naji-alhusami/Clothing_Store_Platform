import { ProductCatalog } from "@/components/product/product-catalog";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import type { Product } from "@/data/products";

interface CatalogPageProps {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
}

export function CatalogPage({
  eyebrow,
  title,
  description,
  products,
}: CatalogPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main dir="rtl" className="flex-1 bg-[#fffdf9]">
        <header className="border-b border-[#ece5dc] bg-[#f8f3ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold tracking-wide text-[#a33b36]">
              {eyebrow}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#302d2a] sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6f6862] sm:text-base">
              {description}
            </p>
          </div>
        </header>

        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <ProductCatalog products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
