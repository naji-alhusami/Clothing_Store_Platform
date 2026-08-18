import Image from "next/image";

const footerLinks = ["الرئيسية", "المنتجات", "العروض", "عن المحل", "تواصل معنا"];

export function Footer() {
  return (
    <footer className="border-t border-[#e6dfd6] bg-[#292725] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef4b50]" aria-label="Kids Home - الصفحة الرئيسية">
              <span className="flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
                <Image src="/logo.jpeg" alt="" width={1080} height={946} className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block text-lg font-bold" dir="ltr">Kids Home</span>
                <span className="block text-sm text-white/65">بيت الطفل</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-7 text-white/65">وجهتكم لألبسة الأطفال المختارة بعناية، بتصاميم مريحة وأنيقة لكل مرحلة من طفولتهم.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold">روابط سريعة</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/65 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <li key={link}><a href="#" className="transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef4b50]">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold">تواصل معنا</h2>
            <address className="mt-5 space-y-3 text-sm leading-6 text-white/65 not-italic">
              <p><span className="text-white/90">الهاتف:</span> +000 000 000 000</p>
              <p><span className="text-white/90">العنوان:</span> عنوان المحل، المدينة</p>
              <p><span className="text-white/90">Messenger:</span> Kids Home</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/45 sm:text-start">
          © {new Date().getFullYear()} Kids Home — بيت الطفل. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
