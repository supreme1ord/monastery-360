import { Button } from "@/components/ui/button";
import heroMonastery from "@/assets/hero-monastery.jpg";
import mountainBackground from "@/assets/mountain-background.jpg";

const MonasteryHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mountainBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-sky opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src={heroMonastery} 
            alt="Beautiful Buddhist monastery in Sikkim mountains"
            className="w-32 h-32 rounded-full mx-auto shadow-monastery border-4 border-primary/20"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          <span className="bg-gradient-monastery bg-clip-text text-transparent">
            Sacred Monasteries
          </span>
          <br />
          of Sikkim
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the spiritual heritage and breathtaking beauty of Sikkim's ancient Buddhist monasteries. 
          Experience centuries of culture, tradition, and peaceful wisdom.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-monastery transition-monastery px-8 py-6 text-lg"
          >
            Explore Monasteries
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-monastery px-8 py-6 text-lg"
          >
            Cultural Calendar
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default MonasteryHero;