import { HeroSection } from "@/components/home/hero-section";
import { NewArrivalsSection } from "@/components/home/new-arrivals-section";
import { OffersSection } from "@/components/home/offers-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <NewArrivalsSection />
        <OffersSection />
      </main>
      <Footer />
    </div>
  );
}
