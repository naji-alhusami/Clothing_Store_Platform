"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const navigation = [
  { label: "الرئيسية", href: "/#home" },
  { label: "المنتجات", href: "/#new-arrivals" },
  { label: "العروض", href: "/#offers" },
  { label: "عن المحل", href: "#" },
  { label: "تواصل معنا", href: "#" },
];

function LanguageSwitcher() {
  return (
    <div
      dir="ltr"
      className="flex w-fit items-center rounded-full border border-[#e6e0d8] bg-[#faf7f2] p-1 text-xs font-semibold"
      aria-label="اختيار اللغة"
    >
      <span
        className="rounded-full bg-[#e5232a] px-3 py-1.5 text-white"
        aria-current="true"
      >
        AR
      </span>
      <span className="px-3 py-1.5 text-[#6f6a64]">EN</span>
    </div>
  );
}

export function Navbar() {
  const mobileMenuRef = useRef<HTMLDialogElement>(null);

  function openMobileMenu() {
    mobileMenuRef.current?.showModal();
  }

  function closeMobileMenu() {
    mobileMenuRef.current?.close();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#ece7df] bg-white/95 backdrop-blur-sm">
      <nav
        dir="ltr"
        className="mx-auto grid h-20  grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:gap-5 lg:h-24 lg:px-10"
        aria-label="التنقل الرئيسي"
      >
        <Link
          href="/#home"
          className="col-start-1 row-start-1 shrink-0 justify-self-start rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a]"
          aria-label="Kids Home - الصفحة الرئيسية"
        >
          <Image
            src="/kids-home-logo.png"
            alt="Kids Home - بيت الطفل"
            width={1300}
            height={1200}
            priority
            className="h-14 w-auto object-contain lg:h-18"
          />
        </Link>

        <ul
          dir="rtl"
          className="col-start-2 row-start-1 hidden items-center gap-4 justify-self-center md:flex lg:gap-5 xl:gap-19"
        >
          {navigation.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative block whitespace-nowrap py-3 text-sm font-semibold transition-colors hover:text-[#e5232a] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5232a] md:text-xl lg:text-2xl ${
                  index === 0
                    ? "text-[#e5232a] after:absolute after:inset-x-0 after:bottom-1 after:mx-auto after:h-0.5 after:w-5 after:rounded-full after:bg-[#e5232a]"
                    : "text-[#423f3b]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 row-start-1 hidden justify-self-end md:block">
          <LanguageSwitcher />
        </div>

        <div className="col-start-2 row-start-1 justify-self-end md:hidden">
          <button
            type="button"
            onClick={openMobileMenu}
            className="flex size-11 items-center justify-center rounded-full border border-[#e6e0d8] bg-[#faf7f2] text-[#2f2c29] transition-colors hover:border-[#e5232a]/40 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a]"
            aria-haspopup="dialog"
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">فتح قائمة التنقل</span>
            <Menu className="size-5" aria-hidden="true" />
          </button>

          <dialog
            ref={mobileMenuRef}
            id="mobile-navigation"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeMobileMenu();
              }
            }}
            className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 open:flex open:justify-end backdrop:bg-black/25 backdrop:backdrop-blur-[2px]"
            aria-labelledby="mobile-navigation-title"
          >
            <div
              dir="rtl"
              className="h-full w-[min(20rem,85vw)] overflow-y-auto rounded-l-3xl border-l border-[#e7e1d9] bg-white p-3 shadow-[0_24px_60px_rgba(59,46,36,0.18)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between px-2 py-2">
                <h2 id="mobile-navigation-title" className="sr-only">
                  قائمة التنقل
                </h2>
                <span className="text-sm font-bold text-[#423f3b]">
                  القائمة
                </span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="flex size-10 items-center justify-center rounded-full border border-[#e6e0d8] bg-[#faf7f2] text-[#2f2c29] transition-colors hover:border-[#e5232a]/40 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-[#e5232a]"
                >
                  <span className="sr-only">إغلاق قائمة التنقل</span>
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-2 space-y-1">
                {navigation.map((item, index) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors hover:bg-[#faf5ef] hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-[#e5232a] ${
                        index === 0
                          ? "bg-[#fff3f2] text-[#e5232a]"
                          : "text-[#423f3b]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-[#eee9e2] px-2 pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </dialog>
        </div>
      </nav>
    </header>
  );
}
