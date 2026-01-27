import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "હોમ" },
  { href: "/about", label: "અમારા વિશે" },
  { href: "/academics", label: "શૈક્ષણિક" },
  { href: "/faculty", label: "શિક્ષકગણ" },
  { href: "/admissions", label: "પ્રવેશ" },
  { href: "/gallery", label: "ગેલેરી" },
  { href: "/contact", label: "સંપર્ક" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="navy-gradient text-secondary-foreground py-2">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@school.edu" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@vidhyalaya.edu</span>
            </a>
          </div>
          <div className="text-gold font-medium">
            "વિદ્યા દદાતિ વિનયમ્" - વિદ્યા વિનમ્રતા આપે છે
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background/95 backdrop-blur-md border-b shadow-soft">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="hero-gradient p-2.5 rounded-lg shadow-card group-hover:shadow-elevated transition-shadow">
              <GraduationCap className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-secondary leading-tight">
                શ્રી ચંદુલાલ અંબાલાલ શાહ નૂતન વિદ્યાલય
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                વડાવલી જૂથ કેળવણી મંડળ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t bg-background animate-fade-in">
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location.pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
