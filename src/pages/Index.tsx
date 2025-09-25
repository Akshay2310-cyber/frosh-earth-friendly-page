import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="sustainability">
          <Sustainability />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-nature rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold">Frosh</span>
          </div>
          <p className="text-muted mb-4 max-w-md mx-auto">
            Transforming agricultural waste into sustainable products for a cleaner tomorrow.
          </p>
          <p className="text-sm text-muted opacity-75">
            © 2024 Frosh. All rights reserved. | Sustainably made from bagasse.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
