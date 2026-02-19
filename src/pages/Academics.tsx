import { Layout } from "@/components/layout/Layout";
import { BookOpen, GraduationCap, FlaskConical, Calculator, Globe, Palette } from "lucide-react";
const classes = [
//   {
//   level: "પ્રાથમિક શિક્ષણ",
//   grades: "ધોરણ 1 થી 5",
//   description: "મૂળભૂત શિક્ષણનો મજબૂત પાયો. ભાષા, ગણિત, વિજ્ઞાન અને સામાજિક વિજ્ઞાનની મૂળભૂત સમજ.",
//   subjects: ["ગુજરાતી", "હિન્દી", "અંગ્રેજી", "ગણિત", "પર્યાવરણ", "ચિત્રકામ"]
// }, 
{
  level: "માધ્યમિક શિક્ષણ",
  grades: "ધોરણ 9 થી 10",
  description: "વિષયોની ઊંડી સમજ અને વિશ્લેષણાત્મક કૌશલ્યોનો વિકાસ.",
  subjects: ["ગુજરાતી", "હિન્દી", "અંગ્રેજી", "ગણિત", "વિજ્ઞાન", "સામાજિક વિજ્ઞાન", "સંસ્કૃત"]
}, 
// {
//   level: "ઉચ્ચ માધ્યમિક (વિજ્ઞાન)",
//   grades: "ધોરણ 9 થી 12",
//   description: "ભૌતિક, રસાયણ, જીવ વિજ્ઞાન અને ગણિત સાથે IIT-JEE અને NEET તૈયારી.",
//   subjects: ["ભૌતિક વિજ્ઞાન", "રસાયણ વિજ્ઞાન", "જીવ વિજ્ઞાન/ગણિત", "અંગ્રેજી", "ગુજરાતી"]
// }, 
{
  level: "ઉચ્ચ માધ્યમિક (સામાન્ય)",
  grades: "ધોરણ 11 થી 12",
  description: "વિનિયન પ્રવાહના વિષયો સાથે ઉચ્ચ શિક્ષણ માટે તૈયારી.",
  subjects: ["અર્થશાસ્ત્ર", "મનોવિજ્ઞાન", "ગુજરાતી", "ભૂગોળ", "સમાજશાસ્ત્ર", "અંગ્રેજી","સંસ્કૃત"]
}];
const facilities = [{
  icon: FlaskConical,
  title: "વિજ્ઞાન પ્રયોગશાળા",
  description: "ગણિત અને વિજ્ઞાન તથા ટચનોલોજી વિષયો માટે સંપૂર્ણ સજ્જ પ્રયોગશાળાઓ"
}, 
// {
//   icon: Calculator,
//   title: "ગણિત લેબ",
//   description: "ગણિતના મૂળભૂત સિદ્ધાંતો સમજવા માટે મોડેલ્સ અને સાધનો"
// }, 
{
  icon: Globe,
  title: "કમ્પ્યુટર લેબ",
  description: "આધુનિક કમ્પ્યુટર્સ અને ઇન્ટરનેટ સુવિધા સાથે IT શિક્ષણ"
}, {
  icon: BookOpen,
  title: "લાઇબ્રેરી",
  description: "5,000+ પુસ્તકો, સામયિકો અને ડિજિટલ સંસાધનો"
}, 
// {
//   icon: Palette,
//   title: "કલા વિભાગ",
//   description: "સંગીત, નૃત્ય, ચિત્રકામ અને હસ્તકલા માટે સમર્પિત ખંડો"
// }, 
{
  icon: GraduationCap,
  title: "સ્માર્ટ ક્લાસરૂમ",
  description: "ડિજિટલ બોર્ડ અને ઇન્ટરેક્ટિવ શિક્ષણ સાધનો"
}];
export default function Academics() {
  return <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay py-16 md:py-24 bg-primary">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">શૈક્ષણિક</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            GSEB અભ્યાસક્રમ આધારિત સંપૂર્ણ શિક્ષણ
          </p>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              અમારા <span className="text-gradient">અભ્યાસક્રમો</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              ધોરણ 9 થી 12 સુધીનું સંપૂર્ણ શિક્ષણ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((cls, index) => <div key={index} className="p-6 md:p-8 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{cls.level}</h3>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {cls.grades}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl hero-gradient shadow-soft">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{cls.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cls.subjects.map((subject, idx) => <span key={idx} className="px-3 py-1 rounded-lg text-sm bg-muted text-muted-foreground">
                      {subject}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              શૈક્ષણિક <span className="text-gradient">સુવિધાઓ</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              આધુનિક સુવિધાઓ સાથે શ્રેષ્ઠ શિક્ષણ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {facilities.map((facility, index) => <div key={index} className="p-6 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-all">
                <div className="mb-4 inline-flex p-3 rounded-xl hero-gradient shadow-soft">
                  <facility.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground text-sm">{facility.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                શાળા <span className="text-gradient">સમયપત્રક</span>
              </h2>
            </div>

            <div className="text-center mb-6">
              <h4 className="text-1.5xl md:text-2xl font-bold text-foreground mb-4">
                સોમવાર થી શુક્રવાર
              </h4>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-card shadow-card border border-border">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">પ્રાર્થના</span>
                  <span className="text-muted-foreground">10:40 થી 10:55 </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">1</span>
                  <span className="text-muted-foreground">10:55 થી 11:35</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">2</span>
                  <span className="text-muted-foreground">11:35 થી 12:15</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">પ્રથમ મોટી રિસેસ</span>
                  <span className="text-muted-foreground">12:15 થી 12:50</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">3</span>
                  <span className="text-muted-foreground">12:50 થી 1:25</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">4</span>
                  <span className="text-muted-foreground">1:25 થી 2:00</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">બીજી નાની રિસેસ</span>
                  <span className="text-muted-foreground">2:00 થી 2:10</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">5</span>
                  <span className="text-muted-foreground">2:10 થી 2:45</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">6</span>
                  <span className="text-muted-foreground">2:45 થી 3:20</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">ત્રીજી નાની રિસેસ</span>
                  <span className="text-muted-foreground">3:20 થી 3:35</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">7</span>
                  <span className="text-muted-foreground">3:35 થી 4:10</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">8</span>
                  <span className="text-muted-foreground">4:10 થી 4:45</span>
                </div>
              </div>
            </div>
            <br/><br/>

            
            <div className="text-center mb-12">
              <h4 className="text-1.5xl md:text-2xl font-bold text-foreground mb-4">
                શનિવાર
              </h4>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-card shadow-card border border-border">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">પ્રાર્થના</span>
                  <span className="text-muted-foreground">7:15 થી 7:30</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">1</span>
                  <span className="text-muted-foreground">7:30 થી 8:10</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">2</span>
                  <span className="text-muted-foreground">8:10 થી 8:50</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">3</span>
                  <span className="text-muted-foreground">8:50 થી 9:30</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">રિસેસ</span>
                  <span className="text-muted-foreground">9:30 થી 9:45</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">4</span>
                  <span className="text-muted-foreground">9:45 થી 10:25</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">5</span>
                  <span className="text-muted-foreground">10:25 થી 11:00</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <span className="font-medium text-foreground">6</span>
                  <span className="text-muted-foreground">11:00 થી 11:35</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}