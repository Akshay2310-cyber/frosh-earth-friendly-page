import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Droplets, Wind, Globe } from "lucide-react";

const Sustainability = () => {
  const impacts = [
    {
      icon: TreePine,
      title: "Forest Conservation",
      stat: "50,000+",
      description: "Trees saved annually by using bagasse instead of wood pulp",
      color: "text-nature-green"
    },
    {
      icon: Droplets,
      title: "Water Conservation", 
      stat: "2M+",
      description: "Liters of water saved in our manufacturing process",
      color: "text-blue-500"
    },
    {
      icon: Wind,
      title: "CO₂ Reduction",
      stat: "75%",
      description: "Lower carbon footprint compared to traditional materials",
      color: "text-earth-brown"
    },
    {
      icon: Globe,
      title: "Waste Diverted",
      stat: "10,000+",
      description: "Tons of agricultural waste diverted from landfills",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Environmental 
            <span className="bg-gradient-nature bg-clip-text text-transparent"> Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every Frosh product contributes to a healthier planet. Here's how we're making a difference 
            through sustainable innovation.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-none shadow-warm hover:shadow-natural transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className={`w-8 h-8 ${impact.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${impact.color}`}>{impact.stat}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{impact.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Choose Bagasse Over Traditional Materials?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Rapid Renewable Resource</h4>
                  <p className="text-muted-foreground">Sugarcane grows 10x faster than trees, making bagasse infinitely more sustainable than wood pulp.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Complete Biodegradability</h4>
                  <p className="text-muted-foreground">Our products decompose completely within 90 days in commercial composting facilities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Energy Efficient Production</h4>
                  <p className="text-muted-foreground">Manufacturing bagasse products requires 60% less energy than plastic alternatives.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-hero rounded-3xl p-8 animate-scale-in">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-foreground mb-6">Circular Economy in Action</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <span className="font-medium">Sugarcane Harvest</span>
                  <span className="text-2xl">🌾</span>
                </div>
                <div className="text-center text-2xl">↓</div>
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <span className="font-medium">Juice Extraction</span>
                  <span className="text-2xl">🥤</span>
                </div>
                <div className="text-center text-2xl">↓</div>
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <span className="font-medium">Bagasse Collection</span>
                  <span className="text-2xl">♻️</span>
                </div>
                <div className="text-center text-2xl">↓</div>
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                  <span className="font-medium">Frosh Products</span>
                  <span className="text-2xl">📦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;