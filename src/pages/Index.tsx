import MonasteryHero from "@/components/MonasteryHero";
import MonasteryGrid from "@/components/MonasteryGrid";
import CulturalCalendar from "@/components/CulturalCalendar";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <MonasteryHero />
      <MonasteryGrid />
      <CulturalCalendar />
      <BookingSection />
    </main>
  );
};

export default Index;
