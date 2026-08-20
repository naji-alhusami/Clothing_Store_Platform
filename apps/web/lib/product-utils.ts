import type { Product } from "@/data/products";

export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("en-US").format(price)} ل.س`;
}

function availableFirst(products: Product[]) {
  return [...products].sort(
    (first, second) => Number(second.available) - Number(first.available),
  );
}

export function getSimilarProducts(
  currentProduct: Product,
  products: Product[],
  limit = 4,
) {
  const sameCategory = products.filter(
    (product) =>
      product.id !== currentProduct.id &&
      product.category === currentProduct.category,
  );
  const sameCategoryAndAge = availableFirst(
    sameCategory.filter(
      (product) => product.ageRange === currentProduct.ageRange,
    ),
  );
  const remainingCategoryProducts = availableFirst(
    sameCategory.filter(
      (product) => product.ageRange !== currentProduct.ageRange,
    ),
  );

  return [...sameCategoryAndAge, ...remainingCategoryProducts].slice(0, limit);
}
