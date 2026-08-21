import type { ProductSeason } from "@/data/products";

interface SeasonSwitcherProps {
  value: ProductSeason;
  onChange: (season: ProductSeason) => void;
}

export function SeasonSwitcher({ value, onChange }: SeasonSwitcherProps) {
  return (
    <div
      className="inline-flex rounded-2xl border border-[#dfd7ce] bg-white p-1.5"
      aria-label="اختيار موسم المنتجات"
    >
      <button
        type="button"
        onClick={() => onChange("summer")}
        className={`min-h-10 rounded-xl px-5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-[#e5232a] ${
          value === "summer"
            ? "bg-[#e5232a] text-white"
            : "text-[#655e58] hover:bg-[#faf5ef]"
        }`}
        aria-pressed={value === "summer"}
      >
        الصيفي
      </button>
      <button
        type="button"
        onClick={() => onChange("winter")}
        className={`min-h-10 rounded-xl px-5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-[#e5232a] ${
          value === "winter"
            ? "bg-[#e5232a] text-white"
            : "text-[#655e58] hover:bg-[#faf5ef]"
        }`}
        aria-pressed={value === "winter"}
      >
        الشتوي
      </button>
    </div>
  );
}
