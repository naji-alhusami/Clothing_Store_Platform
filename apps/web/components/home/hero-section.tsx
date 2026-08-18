import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-[#fffdf9]" aria-labelledby="hero-title">
      <div className="relative mx-auto w-full overflow-hidden">
        <Image
          src="/hero/home-page.png"
          alt="أطفال يرتدون أزياء من تشكيلة بيت الطفل"
          width={1672}
          height={941}
          priority
          sizes="100vw"
          className="h-124 w-full"
        />

        <div
          dir="rtl"
          className="absolute inset-y-0 right-0 flex w-[45%] items-center px-5 text-right sm:px-[3vw] lg:px-10 xl:px-14"
        >
          <div className="w-full max-w-124">
            <div className="mb-[1.5vw] flex items-center gap-[1vw] text-[clamp(0.45rem,1vw,0.75rem)] font-bold text-[#a33b36] lg:mb-5 lg:gap-3">
              <span
                className="h-px w-[clamp(1rem,2.5vw,2.5rem)] shrink-0 bg-[#e5232a]"
                aria-hidden="true"
              />
              <span>أزياء مختارة بحب لأطفالكم</span>
            </div>

            <h1
              id="hero-title"
              className="text-[clamp(1rem,3.6vw,3.25rem)] leading-[1.2] font-bold tracking-tight text-[#292725]"
            >
              أناقة أطفالكم تبدأ من
              <span className="mt-[0.3vw] block text-[#e5232a]">
                بيت الطفل
              </span>
            </h1>

            <p className="mt-[1.4vw] max-w-lg text-[clamp(0.5rem,1.1vw,1rem)] leading-[1.7] text-[#68625d] lg:mt-5">
              تشكيلة مختارة من ألبسة الأطفال للصبيان والبنات و البيبي
            </p>

            <div className="mt-[1.8vw] flex items-center gap-[0.7vw] lg:mt-7 lg:gap-3">
              <a
                href="#"
                className="inline-flex min-h-6 items-center justify-center gap-1 rounded-full bg-[#e5232a] px-[1.5vw] text-[clamp(0.45rem,0.9vw,0.875rem)] font-bold whitespace-nowrap text-white transition-colors hover:bg-[#cf1820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a] sm:min-h-8 md:min-h-10 lg:min-h-12 lg:gap-2 lg:px-7"
              >
                تصفح المنتجات
                <ArrowLeft
                  className="size-2.5 sm:size-3 lg:size-4"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#"
                className="inline-flex min-h-6 items-center justify-center rounded-full border border-[#d9d1c7] bg-white/90 px-[1.5vw] text-[clamp(0.45rem,0.9vw,0.875rem)] font-bold whitespace-nowrap text-[#393633] transition-colors hover:border-[#e5232a]/50 hover:text-[#e5232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5232a] sm:min-h-8 md:min-h-10 lg:min-h-12 lg:px-7"
              >
                شاهد العروض
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
