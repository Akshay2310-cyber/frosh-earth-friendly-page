import { Button } from "@/components/ui/button";
import { ChevronRight, Leaf, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-bagasse.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainable bagasse products from sugarcane waste" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-nature-green/10 border border-nature-green/20 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-nature-green" />
              <span className="text-sm font-medium text-nature-green">100% Sustainable</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Transforming
              <span className="bg-gradient-earth bg-clip-text text-transparent"> Waste </span>
              into Wonder
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Frosh revolutionizes sustainability by converting sugarcane bagasse into premium eco-friendly products, 
              creating value from agricultural waste.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Discover Our Products
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="sustainable" size="lg" className="text-lg">
                <Recycle className="w-5 h-5" />
                Learn About Bagasse
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-nature-green">95%</div>
                <div className="text-sm text-muted-foreground">Waste Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-earth-brown">100%</div>
                <div className="text-sm text-muted-foreground">Biodegradable</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Product Lines</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="hidden lg:flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-nature rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-earth rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute inset-16 bg-earth-gold rounded-full opacity-40 animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;