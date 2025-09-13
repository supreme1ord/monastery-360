import MonasteryHero from "@/components/MonasteryHero";
import MonasteryGrid from "@/components/MonasteryGrid";
import CulturalCalendar from "@/components/CulturalCalendar";
import BookingSection from "@/components/BookingSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <MonasteryHero />
      <MonasteryGrid />
      <CulturalCalendar />
      <BookingSection />
    </main>
  );
};

export default Index;
