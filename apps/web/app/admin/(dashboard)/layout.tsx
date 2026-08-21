import type { Metadata } from "next";

import { AdminMobileNav } from "@/components/admin/admin-mobile-nav";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export const metadata: Metadata = {
  title: "لوحة الإدارة | Kids Home",
  description: "واجهة إدارة منتجات ومحتوى Kids Home.",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      dir="ltr"
      className="min-h-dvh bg-[#f8f4ef] lg:grid lg:grid-cols-[minmax(0,1fr)_17rem]"
    >
      <div className="min-w-0 lg:col-start-1 lg:row-start-1">
        <AdminMobileNav />
        <main dir="rtl" className="px-5 py-8 sm:px-8 sm:py-10 xl:px-12 xl:py-12">
          {children}
        </main>
      </div>
      <AdminSidebar />
    </div>
  );
}
