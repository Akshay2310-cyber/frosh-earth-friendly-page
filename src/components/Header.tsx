import { Button } from "@/components/ui/button";
import { Leaf, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = (resolvedTheme ?? theme) === 'dark';

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-gradient-hero dark:bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo removed per request */}
          <div className="flex items-center gap-3" />

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

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="sustainable" size="sm">
              <a href="#contact">Get Quote</a>
            </Button>
            <Button variant="outline" size="icon" aria-label="Toggle theme" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
              <Button asChild variant="sustainable" size="sm" className="mt-4 self-start">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get Quote</a>
              </Button>
              <Button variant="outline" size="sm" className="self-start" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;