import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone,  HardDrive, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

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
              <span className="text-xs text-secondary-foreground/70">વડાવલી જૂથ કેળવણી મંડળ સંચાલિત</span>
            </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              ગુજરાત રાજ્ય શિક્ષણ બોર્ડ દ્વારા માન્ય શાળા. અમે વિદ્યાર્થીઓના સર્વાંગી વિકાસ માટે સમર્પિત છીએ.
            </p>
            <div className="flex gap-3">
              <a href="https://drive.google.com/file/d/1XC1CJz89aHtrGKLLSQdF8GjNdoheTaKf/view?usp=drivesdk" target="_blank" className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <HardDrive className="h-5 w-5" />
              </a>
              <a href="https://youtu.be/PbmEKj3QHc8?si=i304OgdNfZmIRkUU" target="_blank" className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">ડોનેશન માટે</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p className="flex items-center gap-2" style={{ alignItems: "baseline" }}>
                <span className="h-1 w-1 rounded-full bg-primary"/>
                    એકાઉન્ટ નું નામ : <br></br>VADAVALI JUTH KELVANI MANDAL
              </p>
              
              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                    એકાઉન્ટ નં. : 10651443721
              </p>

              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                  બ્રાન્ચ કોડ : SBIN0005528
              </p>

              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                બ્રાન્ચ : VADAVALI SAB
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">સંપર્ક માહિતી</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">
                  મુ. પો. વડાવલી બસ સ્ટેન્ડ થી મુખ્ય ગેટમાં પ્રવેશતા ડાબી બાજુ.<br />
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-secondary-foreground/80 hover:text-gold transition-colors">
                  +91 76007 74195
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:canutanvidhyalay@gmail.com" className="text-secondary-foreground/80 hover:text-gold transition-colors">
                  canutanvidhyalay@gmail.com
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
                  <p className="font-medium">સોમવાર થી શુક્રવાર :</p>
                  <p>સવારે 10:40 થી બપોરે 4:45</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-secondary-foreground/80">
                  <p className="font-medium">શનિવાર :</p>
                  <p>સવારે 7:15 થી સવારે 11:35</p>
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
