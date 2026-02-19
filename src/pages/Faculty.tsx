import { Layout } from "@/components/layout/Layout";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import one from "@/images/first.png";
import two from "@/images/second.png";
import three from "@/images/third.png";
import four from "@/images/fourth.png";
import five from "@/images/fifth.png";
import six from "@/images/sixth.png";
import seven from "@/images/seventh.png";
import eight from "@/images/eight.png";
import nine from "@/images/nine.png";
import ten from "@/images/tenth.png";
import eleven from "@/images/eleven.jpeg";
const teachers = [{
  name: "મોતીભાઈ ડી. દેસાઈ",
  role: "આચાર્ય",
  subject: "ગણિત, વિજ્ઞાન",
  // experience: "30 વર્ષ",
  qualification: "M.Sc., M.Ed.",
  image: one
}, {
  name: "શ્વિનોદભાઈ એન. પરમાર",
  role: "મ.શિ. (મા.વિ)",
  subject: "હિન્દી, કૃષિ",
  // experience: "25 વર્ષ",
  qualification: "M.A., M.Ed.",
  image: two
}, {
  name: "પૃથ્વીરાજ એન. ઝાલા",
  role: "મ.શિ. (મા.વિ)",
  subject: "ગણિત, વિજ્ઞાન",
  // experience: "20 વર્ષ",
  qualification: "B.Sc., B.Ed.",
  image: three
}, {
  name: "રાજલબેન કરશનભાઈ રાઠોડ",
  role: "વિશિષ્ટ શિક્ષક (M.R.) IEDSS",
  subject: "Special Education (M.R.)",
  // experience: "10 વર્ષ",
  qualification: "B. A.,Sp.Bed, DSE(MR.)",
  image: eleven
}, {
  name: "વિનયકુમાર બી. પટેલ",
  role: "મ.શિ. (મા.વિ)",
  subject: "સા.વિજ્ઞાન, ગુજરાતી",
  // experience: "22 વર્ષ",
  qualification: "M.A., M.Ed.",
  image: five
}, {
  name: "સુરેશકુમાર કે. પંચાલ",
  role: "શિક્ષણ સહાયક (મા.વિ)",
  subject: "વિજ્ઞાન, ગણિત",
  // experience: "18 વર્ષ",
  qualification: "B.Sc., B.Ed.",
  image: four
}, {
  name: "બદ્રિશકુમાર વી. રાવલ",
  role: "મ.શિ. (ઉ.મા.)",
  subject: "ગુજરાતી",
  // experience: "15 વર્ષ",
  qualification: "M.A., B.Ed.",
  image: six
}, {
  name: "હિનાબેન ડી. પટેલ",
  role: "મ.શિ. (ઉ.મા.)",
  subject: "મનોવિજ્ઞાન, ભૂગોળ",
  // experience: "12 વર્ષ",
  qualification: "M.Phil., B.Ed.",
  image: seven
}, {
  name: "વિપુલકુમાર વી. પટેલ",
  role: "મ.શિ. (ઉ.મા.)",
  subject: "અર્થશાસ્ત્ર, સમાજશાસ્ત્ર",
  // experience: "10 વર્ષ",
  qualification: "M.Phil., B.Ed.",
  image: eight
}, {
  name: "ખુશ્બુબેન જે. પ્રજાપતિ",
  role: "શિક્ષણ સહાયક (ઉ.મા.)",
  subject: "અંગ્રજી, સંસ્કૃત",
  // experience: "10 વર્ષ",
  qualification: "M.A., B.Ed.",
  image: nine
}, {
  name: "ગજેન્દ્રસિંહ એલ. ચાવડા",
  role: "સેવક",
  subject: "**",
  // experience: "10 વર્ષ",
  qualification: "12 પાસ",
  image: ten
}];
const stats = [{
  icon: GraduationCap,
  value: "10+",
  label: "અનુભવી શિક્ષકો"
}, {
  icon: Award,
  value: "85%",
  label: "M.A./M.Sc. લાયકાત"
}, {
  icon: BookOpen,
  value: "15+",
  label: "સરેરાશ અનુભવ"
}];
export default function Faculty() {
  return <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay py-16 md:py-24 bg-primary">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">અમારા શિક્ષકગણ</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            અનુભવી અને સમર્પિત શિક્ષકો દ્વારા માર્ગદર્શન
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => <div key={index} className="flex items-center justify-center gap-4 p-6">
                <div className="p-3 rounded-xl hero-gradient shadow-soft">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              અમારા <span className="text-gradient">શિક્ષકો</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              જ્ઞાન અને અનુભવથી સજ્જ અમારા શિક્ષકો
            </p>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => <div key={index} className="group p-6 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-all text-center">
                <div className="relative mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{teacher.name}</h3>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                  {teacher.role}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{teacher.subject}</p>
                <div className="pt-3 border-t border-border space-y-1 text-xs text-muted-foreground">
                  {/* <p>અનુભવ: {teacher.experience}</p> */}
                  <p>{teacher.qualification}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              અમારી સાથે <span className="text-gradient">જોડાઓ</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              જો તમે અનુભવી શિક્ષક છો અને શ્રેષ્ઠ શિક્ષણ આપવામાં રસ ધરાવો છો, 
              તો અમારો સંપર્ક કરો.
            </p>
            <a href="mailto:canutanvidhyalay@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl hero-gradient text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition-all">
              canutanvidhyalay@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>;
}