import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg 
              width="120" 
              height="32" 
              viewBox="0 0 120 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              {/* Leaf element */}
              <path 
                d="M8 16C8 11 11 8 16 8C21 8 24 11 24 16C24 21 21 24 16 24C11 24 8 21 8 16Z" 
                fill="hsl(var(--nature-green))"
                className="opacity-90"
              />
              <path 
                d="M12 12L20 20M16 8V24" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              
              {/* Frosh text */}
              <text 
                x="32" 
                y="20" 
                className="font-bold text-lg fill-current" 
                style={{ fontSize: '18px' }}
              >
                Fr
              </text>
              <text 
                x="52" 
                y="20" 
                fill="hsl(var(--nature-green))" 
                className="font-bold text-lg" 
                style={{ fontSize: '18px' }}
              >
                o
              </text>
              <text 
                x="62" 
                y="20" 
                className="font-bold text-lg fill-current" 
                style={{ fontSize: '18px' }}
              >
                sh
              </text>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-nature-green transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="sustainable" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-nature-green transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="sustainable" size="sm" className="mt-4 self-start">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;