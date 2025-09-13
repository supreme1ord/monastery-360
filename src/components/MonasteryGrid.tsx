import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";
import monastery1 from "@/assets/monastery-1.jpg";
import monastery2 from "@/assets/monastery-2.jpg";

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    description: "The largest monastery in Sikkim, seat of the Karmapa and center of the Karma Kagyu lineage.",
    image: monastery2,
    founded: "1966",
    significance: "Dharma Chakra Centre",
    festivals: ["Losar", "Saga Dawa", "Drukpa Tsheshi"]
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    description: "One of the oldest and most important monasteries in Sikkim, belonging to the Nyingma order.",
    image: monastery1,
    founded: "1705",
    significance: "Perfect Sublime Lotus",
    festivals: ["Chaam Dance", "Losar", "Buddha Purnima"]
  },
  {
    id: 3,
    name: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    description: "Famous for its annual Chaam dance and stunning views of the Kanchenjunga range.",
    image: monastery1,
    founded: "1909",
    significance: "Solitary Temple",
    festivals: ["Chaam Dance", "Losar"]
  },
  {
    id: 4,
    name: "Tashiding Monastery",
    location: "Tashiding, West Sikkim",
    description: "Sacred monastery on a hilltop, believed to cleanse sins of pilgrims who visit.",
    image: monastery2,
    founded: "1717",
    significance: "Most Sacred in Sikkim",
    festivals: ["Bhumchu Festival", "Losar"]
  }
];

const MonasteryGrid = () => {
  return (
    <section className="py-20 px-6 bg-gradient-sky">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-monastery bg-clip-text text-transparent">
              Sacred Sanctuaries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each monastery tells a unique story of devotion, architecture, and spiritual heritage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {monasteries.map((monastery) => (
            <Card 
              key={monastery.id} 
              className="group hover:shadow-monastery transition-monastery cursor-pointer overflow-hidden bg-card/95 backdrop-blur-sm border-0"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={monastery.image} 
                  alt={monastery.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-monastery"
                />
                <div className="absolute inset-0 bg-gradient-monastery opacity-20 group-hover:opacity-30 transition-monastery" />
                <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                  Est. {monastery.founded}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-monastery">
                  {monastery.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <MapPin className="h-4 w-4 text-primary" />
                  {monastery.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {monastery.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent-foreground">
                    {monastery.significance}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary-foreground">
                      Major Festivals:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {monastery.festivals.map((festival) => (
                      <Badge key={festival} variant="outline" className="text-xs border-secondary/50">
                        {festival}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonasteryGrid;