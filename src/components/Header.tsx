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
              width="100" 
              height="40" 
              viewBox="0 0 100 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              {/* Frosh text with integrated leaf in 'o' */}
              <text 
                x="2" 
                y="28" 
                className="font-bold" 
                style={{ fontSize: '22px', fill: 'hsl(var(--nature-green))' }}
              >
                fr
              </text>
              
              {/* Leaf-styled 'o' */}
              <ellipse 
                cx="35" 
                cy="22" 
                rx="8" 
                ry="6" 
                fill="hsl(var(--sustainable-green))"
                transform="rotate(-15 35 22)"
              />
              <path 
                d="M35 16 L35 28" 
                stroke="hsl(var(--nature-green))" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <path 
                d="M30 20 L40 24" 
                stroke="hsl(var(--nature-green))" 
                strokeWidth="1" 
                strokeLinecap="round"
              />
              
              <text 
                x="46" 
                y="28" 
                className="font-bold" 
                style={{ fontSize: '22px', fill: 'hsl(var(--nature-green))' }}
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