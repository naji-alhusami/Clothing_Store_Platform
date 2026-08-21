import Image from "next/image";
import Link from "next/link";

import { adminNavigation } from "@/components/admin/admin-navigation";

export function AdminSidebar() {
  return (
    <aside
      dir="rtl"
      className="sticky top-0 col-start-2 row-start-1 hidden h-dvh border-l border-[#e7e0d7] bg-white px-4 py-6 lg:flex lg:flex-col"
      aria-label="التنقل الإداري"
    >
      <Link
        href="/admin"
        className="flex items-center gap-3 rounded-2xl px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a]"
      >
        <Image
          src="/kids-home-logo.png"
          alt="Kids Home - بيت الطفل"
          width={1300}
          height={1200}
          className="h-14 w-auto object-contain"
        />
        <span>
          <span className="block text-sm font-bold text-[#302d2a]">لوحة الإدارة</span>
          <span className="block text-xs text-[#888078]">Kids Home</span>
        </span>
      </Link>

      <nav className="mt-9 flex-1">
        <ul className="space-y-1.5">
          {adminNavigation.map((item, index) => {
            const Icon = item.icon;

            return (
              <li key={item.href} className={index === 3 ? "mt-8 border-t border-[#ece5dc] pt-4" : ""}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-[#e5232a] ${
                    index === 0
                      ? "bg-[#fff1ef] text-[#c62026]"
                      : "text-[#5f5852] hover:bg-[#faf5ef] hover:text-[#c62026]"
                  }`}
                >
                  <Icon className="size-4.5" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className="px-4 text-xs leading-6 text-[#aaa199]">
        واجهة تجريبية لإدارة محتوى المتجر
      </p>
    </aside>
  );
}
