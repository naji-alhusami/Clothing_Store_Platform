export const productCategories = [
  "صبياني",
  "بناتي",
  "بيبي",
  "السن المحيّر",
] as const;

export const productAgeRanges = [
  "0 - 12 شهراً",
  "1 - 3 سنوات",
  "4 - 6 سنوات",
  "7 - 9 سنوات",
  "10 - 13 سنة",
] as const;

export type ProductCategory = (typeof productCategories)[number];
export type PlaceholderTone = "rose" | "blue" | "sand" | "sage";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  ageRange: string;
  sizes: string[];
  colors: string[];
  price: number;
  originalPrice?: number;
  image?: string;
  images?: string[];
  description: string;
  available: boolean;
  placeholderTone: PlaceholderTone;
}

type ProductSeed = Pick<
  Product,
  "id" | "name" | "category" | "ageRange" | "price"
> & {
  originalPrice?: number;
  available?: boolean;
};

const categoryDefaults: Record<
  ProductCategory,
  Pick<Product, "sizes" | "colors" | "description" | "placeholderTone">
> = {
  صبياني: {
    sizes: ["4", "6", "8", "10"],
    colors: ["كحلي", "أزرق", "بيج"],
    description: "قطعة مريحة وعملية مختارة لتناسب حركة الأطفال طوال اليوم.",
    placeholderTone: "blue",
  },
  بناتي: {
    sizes: ["4", "6", "8", "10"],
    colors: ["وردي", "أحمر", "سكري"],
    description: "تصميم أنيق بخامات لطيفة وتفاصيل مناسبة للإطلالات اليومية.",
    placeholderTone: "rose",
  },
  بيبي: {
    sizes: ["3M", "6M", "9M", "12M"],
    colors: ["سكري", "أخضر فاتح", "بيج"],
    description: "خامة ناعمة ومريحة لبشرة الطفل مع قصّة سهلة للارتداء.",
    placeholderTone: "sage",
  },
  "السن المحيّر": {
    sizes: ["10", "11", "12", "13"],
    colors: ["أسود", "بيج", "رمادي"],
    description: "ستايل عصري ومريح يناسب المرحلة الانتقالية واحتياجاتها اليومية.",
    placeholderTone: "sand",
  },
};

const productSeeds: ProductSeed[] = [
  { id: "winter-boys-set", name: "طقم أطفال شتوي", category: "صبياني", ageRange: "4 - 6 سنوات", price: 125000 },
  { id: "girls-elegant-dress", name: "فستان بناتي أنيق", category: "بناتي", ageRange: "4 - 6 سنوات", price: 110000, originalPrice: 150000 },
  { id: "baby-cotton-set", name: "طقم بيبي قطني", category: "بيبي", ageRange: "0 - 12 شهراً", price: 85000 },
  { id: "junior-light-jacket", name: "جاكيت عملي خفيف", category: "السن المحيّر", ageRange: "10 - 13 سنة", price: 145000, originalPrice: 175000 },
  { id: "boys-denim-shirt", name: "قميص جينز صبياني", category: "صبياني", ageRange: "7 - 9 سنوات", price: 98000 },
  { id: "girls-soft-cardigan", name: "كارديغان بناتي ناعم", category: "بناتي", ageRange: "7 - 9 سنوات", price: 92000, originalPrice: 120000 },
  { id: "baby-comfort-romper", name: "رومبر بيبي مريح", category: "بيبي", ageRange: "0 - 12 شهراً", price: 68000 },
  { id: "junior-everyday-shirt", name: "قميص يومي مريح", category: "السن المحيّر", ageRange: "10 - 13 سنة", price: 79000, originalPrice: 105000, available: false },
  { id: "boys-sport-set", name: "طقم رياضي صبياني", category: "صبياني", ageRange: "4 - 6 سنوات", price: 115000 },
  { id: "girls-pleated-skirt", name: "تنورة بناتي بكسرات", category: "بناتي", ageRange: "7 - 9 سنوات", price: 76000, originalPrice: 95000 },
  { id: "baby-warm-pajamas", name: "بيجاما بيبي دافئة", category: "بيبي", ageRange: "1 - 3 سنوات", price: 74000 },
  { id: "junior-casual-trousers", name: "بنطال كاجوال مريح", category: "السن المحيّر", ageRange: "10 - 13 سنة", price: 99000, originalPrice: 128000 },
  { id: "boys-striped-sweater", name: "كنزة صبياني مخططة", category: "صبياني", ageRange: "7 - 9 سنوات", price: 90000 },
  { id: "girls-party-dress", name: "فستان مناسبات ناعم", category: "بناتي", ageRange: "4 - 6 سنوات", price: 139000, originalPrice: 180000 },
  { id: "baby-knit-cardigan", name: "كارديغان بيبي محاك", category: "بيبي", ageRange: "0 - 12 شهراً", price: 88000 },
  { id: "junior-hooded-sweatshirt", name: "سويت شيرت بقبعة", category: "السن المحيّر", ageRange: "10 - 13 سنة", price: 109000, originalPrice: 140000 },
  { id: "boys-cotton-polo", name: "بولو قطني صبياني", category: "صبياني", ageRange: "4 - 6 سنوات", price: 72000 },
  { id: "girls-floral-blouse", name: "بلوزة بناتي مزهرة", category: "بناتي", ageRange: "7 - 9 سنوات", price: 69000, originalPrice: 88000 },
  { id: "baby-two-piece-set", name: "طقم بيبي قطعتان", category: "بيبي", ageRange: "1 - 3 سنوات", price: 82000 },
  { id: "junior-denim-jacket", name: "جاكيت جينز عصري", category: "السن المحيّر", ageRange: "10 - 13 سنة", price: 132000, originalPrice: 165000 },
  { id: "boys-comfort-jeans", name: "جينز صبياني مريح", category: "صبياني", ageRange: "7 - 9 سنوات", price: 104000, available: false },
  { id: "girls-cotton-pajamas", name: "بيجاما بناتي قطنية", category: "بناتي", ageRange: "4 - 6 سنوات", price: 84000, originalPrice: 108000 },
  { id: "baby-soft-overalls", name: "أفرول بيبي ناعم", category: "بيبي", ageRange: "0 - 12 شهراً", price: 71000 },
  { id: "junior-classic-shirt", name: "قميص كلاسيكي أنيق", category: "السن المحيّر", ageRange: "10 - 13 سنة", price: 96000, originalPrice: 124000 },
  { id: "boys-warm-vest", name: "فيست صبياني دافئ", category: "صبياني", ageRange: "4 - 6 سنوات", price: 87000, available: false },
  { id: "girls-everyday-set", name: "طقم بناتي يومي", category: "بناتي", ageRange: "7 - 9 سنوات", price: 118000, originalPrice: 148000 },
  { id: "baby-light-jacket", name: "جاكيت بيبي خفيف", category: "بيبي", ageRange: "1 - 3 سنوات", price: 93000 },
  { id: "junior-relaxed-set", name: "طقم شبابي مريح", category: "السن المحيّر", ageRange: "10 - 13 سنة", price: 126000, originalPrice: 158000 },
];

export const products: Product[] = productSeeds.map((product) => ({
  ...categoryDefaults[product.category],
  ...product,
  available: product.available ?? true,
}));

export const offers = products.filter((product) => product.originalPrice);
export const newArrivals = products
  .filter((product) => !product.originalPrice)
  .slice(0, 4);
export const featuredOffers = offers.slice(0, 4);
