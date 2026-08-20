import {
  productAgeRanges,
  productCategories,
  type ProductCategory,
} from "@/data/products";

export type AvailabilityFilter = "all" | "available" | "unavailable";

export interface ProductFilterValues {
  category: "all" | ProductCategory;
  ageRange: "all" | string;
  availability: AvailabilityFilter;
}

interface ProductFiltersProps {
  values: ProductFilterValues;
  idPrefix: string;
  onCategoryChange: (value: ProductFilterValues["category"]) => void;
  onAgeRangeChange: (value: string) => void;
  onAvailabilityChange: (value: AvailabilityFilter) => void;
  onReset: () => void;
}

const availabilityOptions: Array<{
  label: string;
  value: AvailabilityFilter;
}> = [
  { label: "الكل", value: "all" },
  { label: "متوفر", value: "available" },
  { label: "غير متوفر", value: "unavailable" },
];

const optionClassName =
  "flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-[#57514c] transition-colors hover:bg-[#faf5ef] has-checked:bg-[#fff1ef] has-checked:font-bold has-checked:text-[#b91f25]";

export function ProductFilters({
  values,
  idPrefix,
  onCategoryChange,
  onAgeRangeChange,
  onAvailabilityChange,
  onReset,
}: ProductFiltersProps) {
  return (
    <div dir="rtl">
      <div className="flex items-center justify-between border-b border-[#ece5dc] pb-4">
        <h2 className="text-lg font-bold text-[#302d2a]">الفلاتر</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-bold text-[#a33b36] hover:text-[#e5232a] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a]"
        >
          إعادة الضبط
        </button>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-bold text-[#302d2a]">الفئة</legend>
        <div className="space-y-1">
          <label className={optionClassName}>
            <input
              type="radio"
              name={`${idPrefix}-category`}
              value="all"
              checked={values.category === "all"}
              onChange={() => onCategoryChange("all")}
              className="size-4 accent-[#e5232a]"
            />
            الكل
          </label>
          {productCategories.map((category) => (
            <label key={category} className={optionClassName}>
              <input
                type="radio"
                name={`${idPrefix}-category`}
                value={category}
                checked={values.category === category}
                onChange={() => onCategoryChange(category)}
                className="size-4 accent-[#e5232a]"
              />
              {category}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6 border-t border-[#ece5dc] pt-5">
        <legend className="mb-2 text-sm font-bold text-[#302d2a]">العمر</legend>
        <div className="space-y-1">
          <label className={optionClassName}>
            <input
              type="radio"
              name={`${idPrefix}-age`}
              value="all"
              checked={values.ageRange === "all"}
              onChange={() => onAgeRangeChange("all")}
              className="size-4 accent-[#e5232a]"
            />
            كل الأعمار
          </label>
          {productAgeRanges.map((ageRange) => (
            <label key={ageRange} className={optionClassName}>
              <input
                type="radio"
                name={`${idPrefix}-age`}
                value={ageRange}
                checked={values.ageRange === ageRange}
                onChange={() => onAgeRangeChange(ageRange)}
                className="size-4 accent-[#e5232a]"
              />
              {ageRange}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6 border-t border-[#ece5dc] pt-5">
        <legend className="mb-2 text-sm font-bold text-[#302d2a]">التوفر</legend>
        <div className="space-y-1">
          {availabilityOptions.map((option) => (
            <label key={option.value} className={optionClassName}>
              <input
                type="radio"
                name={`${idPrefix}-availability`}
                value={option.value}
                checked={values.availability === option.value}
                onChange={() => onAvailabilityChange(option.value)}
                className="size-4 accent-[#e5232a]"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
