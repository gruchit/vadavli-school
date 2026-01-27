import { Layout } from "@/components/layout/Layout";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const teachers = [
  {
    name: "શ્રી રમેશભાઈ પટેલ",
    role: "આચાર્ય",
    subject: "સંસ્થા વડા",
    experience: "30 વર્ષ",
    qualification: "M.A., B.Ed., Ph.D.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "શ્રીમતી સુમનબેન શાહ",
    role: "ઉપાચાર્ય",
    subject: "ગુજરાતી",
    experience: "25 વર્ષ",
    qualification: "M.A., B.Ed.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "શ્રી કિરણભાઈ જોષી",
    role: "વિભાગ વડા",
    subject: "ગણિત",
    experience: "20 વર્ષ",
    qualification: "M.Sc., B.Ed.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "ડૉ. પ્રતિમાબેન દવે",
    role: "વિભાગ વડા",
    subject: "વિજ્ઞાન",
    experience: "22 વર્ષ",
    qualification: "M.Sc., Ph.D., B.Ed.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "શ્રી મહેશભાઈ ત્રિવેદી",
    role: "વરિષ્ઠ શિક્ષક",
    subject: "અંગ્રેજી",
    experience: "18 વર્ષ",
    qualification: "M.A., B.Ed.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "શ્રીમતી રેખાબેન ઠક્કર",
    role: "વરિષ્ઠ શિક્ષક",
    subject: "હિન્દી",
    experience: "15 વર્ષ",
    qualification: "M.A., B.Ed.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "શ્રી નિલેશભાઈ પંડ્યા",
    role: "શિક્ષક",
    subject: "સામાજિક વિજ્ઞાન",
    experience: "12 વર્ષ",
    qualification: "M.A., B.Ed.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "શ્રીમતી ભાવનાબેન મહેતા",
    role: "શિક્ષક",
    subject: "સંસ્કૃત",
    experience: "10 વર્ષ",
    qualification: "M.A., B.Ed.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
];

const stats = [
  { icon: GraduationCap, value: "50+", label: "અનુભવી શિક્ષકો" },
  { icon: Award, value: "85%", label: "M.A./M.Sc. લાયકાત" },
  { icon: BookOpen, value: "15+", label: "સરેરાશ અનુભવ" },
];

export default function Faculty() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay py-16 md:py-24">
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
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center gap-4 p-6">
                <div className="p-3 rounded-xl hero-gradient shadow-soft">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-all text-center"
              >
                <div className="relative mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{teacher.name}</h3>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                  {teacher.role}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{teacher.subject}</p>
                <div className="pt-3 border-t border-border space-y-1 text-xs text-muted-foreground">
                  <p>અનુભવ: {teacher.experience}</p>
                  <p>{teacher.qualification}</p>
                </div>
              </div>
            ))}
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
            <a
              href="mailto:careers@vidhyalaya.edu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl hero-gradient text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition-all"
            >
              careers@vidhyalaya.edu
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
