import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay py-16 md:py-24">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">અમારા વિશે</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            25 વર્ષથી ગુણવત્તાયુક્ત શિક્ષણની પરંપરા
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                અમારી <span className="text-gradient">વાર્તા</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                શ્રી ચંદુલાલ અંબાલાલ શાહ નૂતન વિદ્યાલયની સ્થાપના વડાવલી જૂથ કેળવણી મંડળ 
                દ્વારા કરવામાં આવી હતી. તેમના સ્વપ્ન હતું કે ગ્રામીણ વિસ્તારના બાળકોને 
                પણ ઉચ્ચ ગુણવત્તાનું શિક્ષણ મળે.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                આજે, અમારી શાળામાં 2000 થી વધુ વિદ્યાર્થીઓ અભ્યાસ કરે છે અને 
                50 થી વધુ અનુભવી શિક્ષકો તેમને માર્ગદર્શન આપે છે.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                છેલ્લા 25 વર્ષોમાં, અમારા વિદ્યાર્થીઓએ બોર્ડ પરીક્ષાઓમાં ઉત્કૃષ્ટ 
                પરિણામો મેળવ્યા છે અને ઘણા વિદ્યાર્થીઓ આજે ડૉક્ટર, ઇજનેર, 
                શિક્ષક અને સફળ વ્યાવસાયિક બન્યા છે.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                  alt="શાળા ભવન"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 hero-gradient rounded-2xl -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 md:p-10 rounded-2xl bg-card shadow-card border border-border">
              <div className="mb-6 inline-flex p-4 rounded-xl hero-gradient shadow-soft">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">અમારી દૃષ્ટિ</h3>
              <p className="text-muted-foreground leading-relaxed">
                દરેક વિદ્યાર્થીને શ્રેષ્ઠ શિક્ષણ અને સંસ્કાર આપીને તેમને 
                જીવનમાં સફળ અને જવાબદાર નાગરિક બનાવવા. અમે માનીએ છીએ કે 
                શિક્ષણ માત્ર પુસ્તકીય જ્ઞાન નથી, પરંતુ જીવન જીવવાની કળા છે.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 md:p-10 rounded-2xl bg-card shadow-card border border-border">
              <div className="mb-6 inline-flex p-4 rounded-xl navy-gradient shadow-soft">
                <Target className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">અમારું લક્ષ્ય</h3>
              <p className="text-muted-foreground leading-relaxed">
                ગુણવત્તાયુક્ત શિક્ષણ, આધુનિક સુવિધાઓ અને પ્રેરણાદાયી વાતાવરણ 
                દ્વારા વિદ્યાર્થીઓની સંપૂર્ણ ક્ષમતાઓનો વિકાસ કરવો. દરેક બાળકને 
                તેની પ્રતિભા શોધવામાં અને તેને નિખારવામાં મદદ કરવી.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              અમારા <span className="text-gradient">મૂલ્યો</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              આ મૂલ્યો અમારા શિક્ષણનો આધાર છે
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "પ્રેમ", desc: "વિદ્યાર્થીઓ પ્રત્યે અનંત પ્રેમ અને સમર્પણ" },
              { icon: Award, title: "શ્રેષ્ઠતા", desc: "શિક્ષણમાં ઉત્કૃષ્ટતાની ખોજ" },
              { icon: Users, title: "સમાનતા", desc: "દરેક વિદ્યાર્થી સમાન અને મહત્વપૂર્ણ" },
              { icon: BookOpen, title: "જ્ઞાન", desc: "જીવનભર શીખવાની પ્રેરણા" },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-all">
                <div className="mx-auto mb-4 inline-flex p-3 rounded-xl hero-gradient shadow-soft">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 navy-gradient pattern-overlay">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              અમારી <span className="text-gold">સિદ્ધિઓ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "95%+", label: "બોર્ડ પરિણામ" },
              { value: "500+", label: "મેરિટ વિદ્યાર્થીઓ" },
              { value: "50+", label: "રાજ્ય પુરસ્કારો" },
              { value: "100%", label: "વાલી સંતોષ" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-secondary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
