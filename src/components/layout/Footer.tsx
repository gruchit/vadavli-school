import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="navy-gradient text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="hero-gradient p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">શ્રી ચંદુલાલ અંબાલાલ શાહ નૂતન વિદ્યાલય</span>
              <span className="text-xs text-secondary-foreground/70">વડાવલી જૂથ કેળવણી મંડળ</span>
            </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              ગુજરાત રાજ્ય શિક્ષણ બોર્ડ દ્વારા માન્ય શાળા. અમે વિદ્યાર્થીઓના સર્વાંગી વિકાસ માટે સમર્પિત છીએ.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">ઝડપી લિંક્સ</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "અમારા વિશે" },
                { href: "/academics", label: "શૈક્ષણિક" },
                { href: "/admissions", label: "પ્રવેશ પ્રક્રિયા" },
                { href: "/faculty", label: "શિક્ષકગણ" },
                { href: "/gallery", label: "ફોટો ગેલેરી" },
                { href: "/contact", label: "સંપર્ક કરો" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">સંપર્ક માહિતી</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">
                  શાળા માર્ગ, મુખ્ય બજાર પાસે,<br />
                  અમદાવાદ - 380001, ગુજરાત
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-secondary-foreground/80 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@vidhyalaya.edu" className="text-secondary-foreground/80 hover:text-gold transition-colors">
                  info@vidhyalaya.edu
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">શાળા સમય</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-secondary-foreground/80">
                  <p className="font-medium">સોમવાર - શનિવાર</p>
                  <p>સવારે 7:30 - બપોરે 1:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-secondary-foreground/80">
                  <p className="font-medium">કાર્યાલય સમય</p>
                  <p>સવારે 9:00 - સાંજે 5:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
          <p>© 2024 શ્રી ચંદુલાલ અંબાલાલ શાહ નૂતન વિદ્યાલય. સર્વાધિકાર સુરક્ષિત.</p>
          <p>
            "સા વિદ્યા યા વિમુક્તયે" - વિદ્યા તે છે જે મુક્તિ આપે
          </p>
        </div>
      </div>
    </footer>
  );
}
