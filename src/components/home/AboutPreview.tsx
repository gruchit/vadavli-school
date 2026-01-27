import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "GSEB (ગુજરાત રાજ્ય શિક્ષણ બોર્ડ) માન્ય",
  "ધોરણ 1 થી 12 સુધીનું શિક્ષણ",
  "અનુભવી અને લાયક શિક્ષકગણ",
  "આધુનિક લેબ અને લાઇબ્રેરી",
  "રમતગમત અને કલા પ્રવૃત્તિઓ",
  "વાલી-શિક્ષક સંવાદ કાર્યક્રમ",
];

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="શાળાનું દૃશ્ય"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 hero-gradient rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 navy-gradient rounded-2xl -z-10 hidden md:block" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              અમારી <span className="text-gradient">શાળા વિશે</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              શ્રી સરસ્વતી વિદ્યાલય છેલ્લા 25 વર્ષોથી ગુણવત્તાયુક્ત શિક્ષણ પ્રદાન કરે છે. 
              અમારો ઉદ્દેશ્ય વિદ્યાર્થીઓને માત્ર શૈક્ષણિક જ્ઞાન જ નહીં, પરંતુ જીવન માટે 
              જરૂરી કૌશલ્યો અને મૂલ્યો પણ શીખવવાનો છે.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              અમારા અનુભવી શિક્ષકગણ અને આધુનિક સુવિધાઓ વિદ્યાર્થીઓને શ્રેષ્ઠ 
              શિક્ષણ પ્રાપ્ત કરવામાં મદદ કરે છે.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg">
              <Link to="/about">
                વધુ માહિતી જુઓ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
