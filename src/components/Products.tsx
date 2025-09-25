import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Utensils, Home, ArrowRight } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: Package,
      title: "Food Packaging Solutions",
      description: "Premium biodegradable food containers and packaging designed specifically for QSR and food service operations.",
      features: ["Take-out containers", "Food delivery boxes", "Portion containers", "Grease-resistant packaging"],
      color: "nature"
    },
    {
      icon: Utensils,
      title: "QSR Tableware & Disposables",
      description: "Durable, elegant disposable tableware perfect for quick service restaurants and food service establishments.",
      features: ["Disposable plates & bowls", "Eco-friendly cutlery", "Coffee cups & lids", "Food trays"],
      color: "earth"
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
            Discover how bagasse transforms into premium, sustainable products specifically 
            designed for QSR and food service operations.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
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