import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Works', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl tracking-wider font-medium relative">
            YOUR NAME
            <div className="absolute -bottom-1 left-0 w-6 h-px bg-foreground/30"></div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-200"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-6 border-t border-border">
            <div className="flex flex-col space-y-6 pt-6">
              {navItems.map((item, index) => (
                <div key={item.label} className="relative">
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {index < navItems.length - 1 && (
                    <div className="absolute -bottom-3 left-0 w-4 h-px bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}