import { SiteSeasonSettings } from "@/components/admin/site-season-settings";
import { mockActiveSeason } from "@/data/site-settings";

export default function AdminSettingsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-bold text-[#a33b36]">واجهة المتجر</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#302d2a] sm:text-4xl">
          إعدادات الموقع
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756e68]">
          تحكم بالموسم الذي سيظهر لزوار متجر Kids Home دون التأثير على طريقة تصفحك للمنتجات داخل الإدارة.
        </p>
      </div>
      <SiteSeasonSettings initialSeason={mockActiveSeason} />
    </div>
  );
}
