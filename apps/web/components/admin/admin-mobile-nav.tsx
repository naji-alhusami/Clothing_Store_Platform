"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { adminNavigation } from "@/components/admin/admin-navigation";

export function AdminMobileNav() {
  const menuRef = useRef<HTMLDialogElement>(null);

  function closeMenu() {
    menuRef.current?.close();
  }

  return (
    <header
      dir="ltr"
      className="sticky top-0 z-40 flex h-18 items-center justify-between border-b border-[#e7e0d7] bg-white/95 px-5 backdrop-blur-sm lg:hidden"
    >
      <Link href="/admin" className="rounded-lg focus-visible:outline-2 focus-visible:outline-[#e5232a]">
        <Image
          src="/kids-home-logo.png"
          alt="Kids Home - بيت الطفل"
          width={1300}
          height={1200}
          className="h-12 w-auto object-contain"
        />
      </Link>

      <button
        type="button"
        onClick={() => menuRef.current?.showModal()}
        className="flex size-11 items-center justify-center rounded-full border border-[#e6e0d8] bg-[#faf7f2] text-[#2f2c29] hover:border-[#e5232a]/40 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a]"
        aria-haspopup="dialog"
        aria-controls="admin-mobile-navigation"
      >
        <span className="sr-only">فتح قائمة الإدارة</span>
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <dialog
        ref={menuRef}
        id="admin-mobile-navigation"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 open:flex open:justify-end backdrop:bg-black/25 backdrop:backdrop-blur-[2px] lg:hidden"
        aria-labelledby="admin-mobile-navigation-title"
      >
        <div
          dir="rtl"
          className="h-full w-[min(20rem,88vw)] overflow-y-auto rounded-l-3xl bg-[#fffdf9] p-4 shadow-[0_24px_60px_rgba(59,46,36,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-[#ece5dc] px-2 pb-4">
            <h2 id="admin-mobile-navigation-title" className="text-lg font-bold text-[#302d2a]">
              لوحة الإدارة
            </h2>
            <button
              type="button"
              onClick={closeMenu}
              className="flex size-10 items-center justify-center rounded-full border border-[#e6e0d8] bg-white text-[#2f2c29] hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
            >
              <span className="sr-only">إغلاق القائمة</span>
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-5">
            <ul className="space-y-1.5">
              {adminNavigation.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={item.href} className={index === 3 ? "mt-7 border-t border-[#ece5dc] pt-4" : ""}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-bold text-[#514b46] hover:bg-[#fff1ef] hover:text-[#c62026] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
                    >
                      <Icon className="size-4.5" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
