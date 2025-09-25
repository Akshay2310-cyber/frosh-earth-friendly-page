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
      <footer className="py-12 bg-gradient-hero dark:bg-background text-foreground dark:text-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="mb-4 max-w-md mx-auto text-foreground/80 dark:text-foreground/80">
            Transforming agricultural waste into sustainable products for a cleaner tomorrow.
          </p>
          <p className="text-sm text-foreground/70 dark:text-foreground/70">
            © 2024 Frosh. All rights reserved. | Sustainably made from bagasse.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
