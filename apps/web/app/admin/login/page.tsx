import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "تسجيل دخول الإدارة | Kids Home",
  description: "صفحة تسجيل دخول إدارة Kids Home.",
};

export default function AdminLoginPage() {
  return (
    <main
      dir="rtl"
      className="relative grid min-h-dvh place-items-center overflow-hidden bg-[#e9ded3] px-4 py-8 sm:px-6"
    >
      {/* <Image
        src="/admin/login-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      /> */}
      <div className="absolute inset-0 bg-[#34251f]/25" aria-hidden="true" />

      <section
        className="relative z-10 w-full max-w-105 rounded-[1.75rem] border border-white/70 bg-[#fffdf9]/94 px-6 py-8 shadow-[0_24px_70px_rgba(54,37,29,0.22)] backdrop-blur-md sm:px-9 sm:py-10"
        aria-labelledby="admin-login-title"
      >
        <div className="text-center">
          <Image
            src="/kids-home-logo.png"
            alt="Kids Home - بيت الطفل"
            width={1300}
            height={1200}
            className="mx-auto h-24 w-auto object-contain sm:h-28"
          />
          <h1
            id="admin-login-title"
            className="mt-4 text-xl font-bold text-[#302d2a] sm:text-2xl"
          >
            تسجيل دخول الإدارة
          </h1>
          {/* <p className="mt-2 text-sm text-[#777069]">
            أهلاً بعودتك إلى إدارة بيت الطفل
          </p> */}
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-bold text-[#3f3a36]"
            >
              اسم المستخدم
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="أدخل اسم المستخدم"
              className="h-12 w-full rounded-xl border border-[#ddd4ca] bg-white/90 px-4 text-right text-sm text-[#302d2a] outline-none transition placeholder:text-[#aaa29a] focus:border-[#e5232a] focus:ring-3 focus:ring-[#e5232a]/15"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-[#3f3a36]"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="أدخل كلمة المرور"
              className="h-12 w-full rounded-xl border border-[#ddd4ca] bg-white/90 px-4 text-right text-sm text-[#302d2a] outline-none transition placeholder:text-[#aaa29a] focus:border-[#e5232a] focus:ring-3 focus:ring-[#e5232a]/15"
            />
          </div>

          <Button
            type="button"
            size="lg"
            className="mt-2 h-12 w-full bg-[#e5232a] text-sm font-bold text-white hover:bg-[#cf1820] focus-visible:border-[#e5232a] focus-visible:ring-[#e5232a]/25"
          >
            تسجيل الدخول
          </Button>
        </form>
      </section>
    </main>
  );
}
