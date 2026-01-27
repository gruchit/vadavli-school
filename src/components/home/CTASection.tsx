import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CTASection() {
  return <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl navy-gradient pattern-overlay">
          <div className="relative px-6 py-12 md:px-12 md:py-20 text-center bg-navy-light">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              તમારા બાળકના ઉજ્જવળ ભવિષ્ય માટે
              <br />
              <span className="text-gold">અમારી સાથે જોડાઓ</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
              હવે પ્રવેશ ચાલુ છે! ધોરણ 1 થી 12 માટે પ્રવેશ ફોર્મ ઉપલબ્ધ છે.
              વધુ માહિતી માટે આજે જ સંપર્ક કરો.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
                <Link to="/admissions">
                  પ્રવેશ માટે અરજી કરો
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline" className="w-full sm:w-auto">
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" />
                  કૉલ કરો
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}