import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return <section className="relative overflow-hidden">
      {/* Background */}
      <div className="hero-gradient pattern-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative container py-16 md:py-24 lg:py-32 bg-navy-light">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-6 animate-fade-in">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">ગુજરાત રાજ્ય શિક્ષણ બોર્ડ માન્ય</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            શ્રી ચંદુલાલ અંબાલાલ શાહ નૂતન વિદ્યાલયમાં
            <br />
            <span className="text-gold">સ્વાગત છે</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            અમે વિદ્યાર્થીઓના શૈક્ષણિક, સાંસ્કૃતિક અને નૈતિક વિકાસ માટે સમર્પિત છીએ.
            <br />
            ઉત્તમ શિક્ષણ અને આધુનિક સુવિધાઓ સાથે ઉજ્જવળ ભવિષ્યનું નિર્માણ કરીએ છીએ.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <Button asChild size="lg" variant="hero" className="w-full sm:w-auto">
              <Link to="/admissions">
                પ્રવેશ માટે અરજી કરો
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline" className="w-full sm:w-auto">
              <Link to="/about">
                વધુ જાણો
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          {[{
          icon: Users,
          value: "300+",
          label: "વિદ્યાર્થીઓ"
        }, {
          icon: BookOpen,
          value: "10+",
          label: "અનુભવી શિક્ષકો"
        }, {
          icon: Award,
          value: "15+",
          label: "વર્ષનો અનુભવ"
        }].map((stat, index) => <div key={index} className="flex items-center justify-center gap-4 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <stat.icon className="h-10 w-10 text-gold" />
              <div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>;
}