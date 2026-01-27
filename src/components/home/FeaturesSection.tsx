import { BookOpen, Users, Palette, Trophy, Laptop, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "ગુણવત્તાયુક્ત શિક્ષણ",
    description: "GSEB અભ્યાસક્રમ આધારિત ઉચ્ચ ગુણવત્તાનું શિક્ષણ અને અનુભવી શિક્ષકો દ્વારા માર્ગદર્શન.",
  },
  {
    icon: Laptop,
    title: "આધુનિક સુવિધાઓ",
    description: "સ્માર્ટ ક્લાસરૂમ, કમ્પ્યુટર લેબ, અને ડિજિટલ લાઇબ્રેરી જેવી આધુનિક સુવિધાઓ.",
  },
  {
    icon: Palette,
    title: "કલા અને સંસ્કૃતિ",
    description: "સંગીત, નૃત્ય, ચિત્રકામ અને અન્ય કલાત્મક પ્રવૃત્તિઓ દ્વારા સર્જનાત્મકતાનો વિકાસ.",
  },
  {
    icon: Trophy,
    title: "રમતગમત",
    description: "ક્રિકેટ, ફૂટબોલ, કબડ્ડી, ખો-ખો જેવી રમતો માટે ઉત્તમ મેદાન અને તાલીમ.",
  },
  {
    icon: Users,
    title: "વ્યક્તિગત ધ્યાન",
    description: "દરેક વિદ્યાર્થી પર વ્યક્તિગત ધ્યાન અને નાના વર્ગો દ્વારા અસરકારક શિક્ષણ.",
  },
  {
    icon: Heart,
    title: "નૈતિક મૂલ્યો",
    description: "શિક્ષણની સાથે સંસ્કાર અને નૈતિક મૂલ્યોનું સિંચન જે જીવનભર કામ આવે.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 section-gradient">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            અમારી <span className="text-gradient">વિશેષતાઓ</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            વિદ્યાર્થીઓના સર્વાંગી વિકાસ માટે અમે અનેક સુવિધાઓ અને પ્રવૃત્તિઓ પ્રદાન કરીએ છીએ.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="mb-5 inline-flex p-3 rounded-xl hero-gradient shadow-soft group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
