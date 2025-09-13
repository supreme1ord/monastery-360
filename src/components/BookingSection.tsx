import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Train, Bus, Hotel, MapPin, Calendar } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-mountain">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Plan Your Sacred Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book your complete travel experience to explore Sikkim's monasteries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-monastery transition-monastery cursor-pointer bg-card-overlay backdrop-blur-sm border-0">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-monastery">
                <Plane className="h-8 w-8 text-primary group-hover:scale-110 transition-monastery" />
              </div>
              <CardTitle className="text-xl">Flights</CardTitle>
              <CardDescription>
                Fly to Bagdogra Airport and connect to Sikkim
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 transition-monastery" 
                disabled
              >
                Book Flights
                <span className="text-xs ml-2 opacity-75">(Coming Soon)</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-monastery transition-monastery cursor-pointer bg-card-overlay backdrop-blur-sm border-0">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-monastery">
                <Train className="h-8 w-8 text-secondary group-hover:scale-110 transition-monastery" />
              </div>
              <CardTitle className="text-xl">Trains</CardTitle>
              <CardDescription>
                Railway connections to New Jalpaiguri
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-monastery"
                disabled
              >
                Book Trains
                <span className="text-xs ml-2 opacity-75">(Coming Soon)</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-monastery transition-monastery cursor-pointer bg-card-overlay backdrop-blur-sm border-0">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-monastery">
                <Bus className="h-8 w-8 text-accent group-hover:scale-110 transition-monastery" />
              </div>
              <CardTitle className="text-xl">Buses</CardTitle>
              <CardDescription>
                Comfortable bus services within Sikkim
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-monastery"
                disabled
              >
                Book Buses
                <span className="text-xs ml-2 opacity-75">(Coming Soon)</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-monastery transition-monastery cursor-pointer bg-card-overlay backdrop-blur-sm border-0">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-monastery">
                <Hotel className="h-8 w-8 text-primary group-hover:scale-110 transition-monastery" />
              </div>
              <CardTitle className="text-xl">Hotels</CardTitle>
              <CardDescription>
                Stay near monasteries and cultural sites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 transition-monastery"
                disabled
              >
                Book Hotels
                <span className="text-xs ml-2 opacity-75">(Coming Soon)</span>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-card-overlay backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                Authentication Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                To access booking features and save your travel plans, please sign in to your account.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  disabled
                >
                  Sign In (Coming Soon)
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  disabled
                >
                  Create Account (Coming Soon)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;