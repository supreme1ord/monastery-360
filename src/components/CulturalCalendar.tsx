import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

const culturalEvents = [
  {
    id: 1,
    name: "Losar Festival",
    month: "February",
    duration: "15 days",
    location: "All Monasteries",
    description: "Tibetan New Year celebration with traditional dances, prayers, and feasts",
    significance: "Most important festival",
    type: "Religious"
  },
  {
    id: 2,
    name: "Saga Dawa",
    month: "May/June",
    duration: "3 days",
    location: "Rumtek, Pemayangtse",
    description: "Commemoration of Buddha's birth, enlightenment, and death",
    significance: "Triple blessed festival",
    type: "Religious"
  },
  {
    id: 3,
    name: "Chaam Dance Festival",
    month: "December",
    duration: "2 days", 
    location: "Enchey Monastery",
    description: "Sacred mask dance performed by monks to ward off evil spirits",
    significance: "Ancient ritual dance",
    type: "Cultural"
  },
  {
    id: 4,
    name: "Bhumchu Festival",
    month: "February/March",
    duration: "1 day",
    location: "Tashiding Monastery",
    description: "Sacred water ceremony predicting the year's fortune",
    significance: "Water blessing ritual",
    type: "Religious"
  },
  {
    id: 5,
    name: "Drukpa Tsheshi",
    month: "July/August",
    duration: "3 days",
    location: "Rumtek Monastery",
    description: "Celebration of Buddha's first sermon in Deer Park",
    significance: "First teaching day",
    type: "Religious"
  },
  {
    id: 6,
    name: "Buddha Purnima",
    month: "April/May",
    duration: "1 day",
    location: "All Monasteries",
    description: "Celebration of Buddha's birth with prayers and offerings",
    significance: "Birth of Buddha",
    type: "Religious"
  }
];

const CulturalCalendar = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-sunrise bg-clip-text text-transparent">
              Cultural Calendar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the rich Buddhist traditions and festivals throughout the year
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalEvents.map((event) => (
            <Card 
              key={event.id} 
              className="group hover:shadow-mountain transition-monastery cursor-pointer border border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={event.type === "Religious" ? "default" : "secondary"}
                    className={event.type === "Religious" 
                      ? "bg-primary/10 text-primary border-primary/20" 
                      : "bg-accent/10 text-accent border-accent/20"
                    }
                  >
                    {event.type}
                  </Badge>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {event.month}
                  </span>
                </div>
                
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-monastery">
                  {event.name}
                </CardTitle>
                
                <CardDescription className="text-secondary font-medium">
                  {event.significance}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-accent-foreground">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-secondary-foreground">Duration: {event.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            * Festival dates may vary based on lunar calendar
          </p>
        </div>
      </div>
    </section>
  );
};

export default CulturalCalendar;