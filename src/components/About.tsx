import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Recycle, Factory, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sprout,
      title: "From Nature",
      description: "Starting with agricultural waste from sugarcane processing, we source sustainable raw materials."
    },
    {
      icon: Factory,
      title: "Advanced Processing",
      description: "Our state-of-the-art facilities transform bagasse into high-quality, versatile products."
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Every product contributes to a sustainable cycle, reducing waste and environmental impact."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Our rigorous standards ensure products that meet and exceed industry expectations."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What is 
            <span className="bg-gradient-earth bg-clip-text text-transparent"> Bagasse</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bagasse is the fibrous residue that remains after extracting juice from sugarcane. 
            Instead of burning this valuable resource, Frosh transforms it into innovative, 
            sustainable products that benefit both industry and environment.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-warm hover:shadow-natural transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center animate-scale-in border border-border/50">
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Frosh, we believe in the power of innovation to solve environmental challenges. 
            By transforming agricultural waste into valuable products, we're not just reducing waste—
            we're creating a sustainable future where nothing goes to waste and everything has value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;