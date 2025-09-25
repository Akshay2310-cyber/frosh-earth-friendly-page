import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Utensils, Home, ArrowRight } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: Package,
      title: "Packaging Solutions",
      description: "Biodegradable containers, boxes, and protective packaging that decompose naturally without harming the environment.",
      features: ["Food-safe containers", "Shipping boxes", "Protective inserts", "Custom molding"],
      color: "nature"
    },
    {
      icon: Utensils,
      title: "Tableware & Disposables",
      description: "Elegant, sturdy disposable plates, bowls, and cutlery perfect for events and everyday use.",
      features: ["Disposable plates", "Eco-friendly cutlery", "Food containers", "Coffee cups"],
      color: "earth"
    },
    {
      icon: Home,
      title: "Home & Garden",
      description: "Innovative products for sustainable living, from planters to building materials.",
      features: ["Garden planters", "Mulch alternatives", "Building panels", "Insulation materials"],
      color: "accent"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our 
            <span className="bg-gradient-nature bg-clip-text text-transparent"> Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From packaging to home goods, discover how bagasse transforms into premium, 
            sustainable products for every industry.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-natural transition-all duration-300 border-none animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  category.color === 'nature' ? 'bg-gradient-nature' :
                  category.color === 'earth' ? 'bg-gradient-earth' :
                  'bg-accent'
                }`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                
                <div className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-nature-green rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="sustainable" 
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-earth rounded-3xl p-12 text-center text-white animate-scale-in">
          <h3 className="text-3xl font-bold mb-6">Ready to Make the Switch?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses choosing sustainable alternatives. 
            Contact us for custom solutions and bulk pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg">
              Request Samples
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-earth-brown">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;