import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kids Home | بيت الطفل",
  description: "تشكيلة مختارة من ألبسة الأطفال للصبيان والبنات والبيبي.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col bg-[#fffdf9] text-[#292725]">
        {children}
      </body>
    </html>
  );
}
