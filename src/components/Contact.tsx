import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Create a 
            <span className="bg-gradient-earth bg-clip-text text-transparent"> Sustainable Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make the switch to sustainable products? We're here to help you find the perfect 
            bagasse solutions for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="border-none shadow-warm hover:shadow-natural transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Get in touch for inquiries and support</p>
                <p className="font-medium text-foreground">hello@froshproducts.com</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-warm hover:shadow-natural transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Speak with our sustainability experts</p>
                <p className="font-medium text-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-warm hover:shadow-natural transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-earth-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Come see our facility and products</p>
                <p className="font-medium text-foreground">Green Valley, Sustainable District</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="border-none shadow-natural">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Whether you need samples, bulk quotes, or custom solutions, we're here to help.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="Your first name" className="border-border/50 focus:border-nature-green" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Your last name" className="border-border/50 focus:border-nature-green" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="your.email@company.com" className="border-border/50 focus:border-nature-green" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company</label>
                  <Input placeholder="Your company name" className="border-border/50 focus:border-nature-green" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project and how we can help..." 
                    rows={6}
                    className="border-border/50 focus:border-nature-green resize-none"
                  />
                </div>
                
                <Button variant="nature" size="lg" className="w-full text-lg">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-scale-in">
          <div className="bg-gradient-hero rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join the Sustainability Revolution
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every choice matters. By choosing Frosh, you're not just buying products—
              you're investing in a cleaner, greener future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg">
                Download Product Catalog
              </Button>
              <Button variant="sustainable" size="lg" className="text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;