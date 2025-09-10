import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold gradient-text">
              CrackThatJob
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-foreground hover:text-primary transition-colors font-medium">
              Find Jobs
            </a>
            <a href="#post" className="text-foreground hover:text-primary transition-colors font-medium">
              Post Jobs  
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/20">
              <a href="#jobs" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Find Jobs
              </a>
              <a href="#post" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Post Jobs
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <div className="flex space-x-3 px-3 py-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  Login
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;