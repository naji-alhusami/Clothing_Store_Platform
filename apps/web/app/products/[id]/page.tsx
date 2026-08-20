import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProductCard } from "@/components/product/product-card";
import { ProductGallery } from "@/components/product/product-gallery";
import { products } from "@/data/products";
import { formatPrice, getSimilarProducts } from "@/lib/product-utils";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  return {
    title: product
      ? `${product.name} | Kids Home`
      : "المنتج غير موجود | Kids Home",
    description: product?.description,
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  console.log(products);
  const product = products.find((item) => item.id === id);
  console.log(product);

  if (!product) {
    notFound();
  }

  const similarProducts = getSimilarProducts(product, products);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main dir="rtl" className="flex-1 bg-[#fffdf9]">
        <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
          <div
            dir="ltr"
            className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14 xl:gap-20"
          >
            <div className="lg:col-start-2 lg:row-start-1">
              <ProductGallery
                key={product.id}
                name={product.name}
                image={product.image}
                images={product.images}
                placeholderTone={product.placeholderTone}
              />
            </div>

            <div dir="rtl" className="lg:col-start-1 lg:row-start-1 lg:pt-5">
              <p className="text-sm font-bold text-[#a33b36]">
                {product.category}
              </p>
              <h1 className="mt-2 text-3xl leading-tight font-bold tracking-tight text-[#302d2a] sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-2">
                <p
                  className={`font-bold ${
                    product.originalPrice
                      ? "text-2xl text-[#e5232a]"
                      : "text-2xl text-[#302d2a]"
                  }`}
                >
                  {formatPrice(product.price)}
                </p>
                {product.originalPrice ? (
                  <p className="pb-0.5 text-sm text-[#918a83] line-through decoration-[#918a83]">
                    {formatPrice(product.originalPrice)}
                  </p>
                ) : null}
              </div>

              <dl className="mt-8 divide-y divide-[#ece5dc] border-y border-[#ece5dc] text-sm">
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
                  <dt className="font-bold text-[#302d2a]">الفئة</dt>
                  <dd className="text-[#6f6862]">{product.category}</dd>
                </div>
                <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
                  <dt className="font-bold text-[#302d2a]">العمر</dt>
                  <dd className="text-[#6f6862]">{product.ageRange}</dd>
                </div>
              </dl>

              {product.sizes.length ? (
                <div className="mt-7">
                  <h2 className="text-sm font-bold text-[#302d2a]">المقاسات</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex min-w-11 items-center justify-center rounded-xl border border-[#d9d1c7] bg-white px-3 py-2 text-sm font-semibold text-[#57514c]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {product.colors.length ? (
                <div className="mt-7">
                  <h2 className="text-sm font-bold text-[#302d2a]">الألوان</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="rounded-full border border-[#d9d1c7] bg-white px-3.5 py-2 text-sm font-semibold text-[#57514c]"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-7">
                <h2 className="text-sm font-bold text-[#302d2a]">التوفر</h2>
                <span
                  className={`mt-3 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold ${
                    product.available
                      ? "bg-[#edf7ef] text-[#27763c]"
                      : "bg-[#fff0f0] text-[#bd292f]"
                  }`}
                >
                  <span
                    className="size-2 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  {product.available ? "متوفر" : "غير متوفر"}
                </span>
              </div>

              <div className="mt-8 border-t border-[#ece5dc] pt-7">
                <h2 className="text-sm font-bold text-[#302d2a]">عن القطعة</h2>
                <p className="mt-3 max-w-xl text-base leading-8 text-[#6f6862]">
                  {product.description}
                </p>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e5232a] px-8 text-sm font-bold text-white transition-colors hover:bg-[#cf1820] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a] sm:w-auto"
              >
                اسأل عن هذه القطعة
              </button>
            </div>
          </div>
        </section>

        {similarProducts.length ? (
          <section className="border-t border-[#ece5dc] bg-[#f8f3ed] px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-bold tracking-tight text-[#302d2a] sm:text-3xl">
                قد يعجبك أيضاً
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {similarProducts.map((similarProduct) => (
                  <ProductCard key={similarProduct.id} {...similarProduct} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
