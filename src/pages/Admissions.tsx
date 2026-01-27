import { Layout } from "@/components/layout/Layout";
import { FileText, Calendar, CheckCircle, Phone, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: 1,
    title: "ફોર્મ ભરો",
    description: "પ્રવેશ ફોર્મ કાર્યાલયમાંથી મેળવો અથવા ઓનલાઇન ડાઉનલોડ કરો અને સંપૂર્ણ વિગતો ભરો.",
  },
  {
    step: 2,
    title: "દસ્તાવેજો જમા કરાવો",
    description: "જરૂરી દસ્તાવેજો સાથે ભરેલું ફોર્મ શાળા કાર્યાલયમાં જમા કરાવો.",
  },
  {
    step: 3,
    title: "પ્રવેશ પરીક્ષા",
    description: "ધોરણ 2 થી ઉપર માટે સાદી પ્રવેશ પરીક્ષા (ગુજરાતી, ગણિત).",
  },
  {
    step: 4,
    title: "વાલી મુલાકાત",
    description: "આચાર્ય સાથે વાલી મુલાકાત અને પ્રવેશ નિર્ણય.",
  },
  {
    step: 5,
    title: "ફી ભરો",
    description: "પ્રવેશ મંજૂર થયા બાદ ફી ભરો અને પ્રવેશ પ્રક્રિયા પૂર્ણ કરો.",
  },
];

const documents = [
  "જન્મ પ્રમાણપત્ર (મૂળ અને નકલ)",
  "અગાઉની શાળાનું TC (ટ્રાન્સફર સર્ટિફિકેટ)",
  "છેલ્લા વર્ષનું પરિણામ પત્રક",
  "જાતિ પ્રમાણપત્ર (જો લાગુ હોય)",
  "આધાર કાર્ડની નકલ",
  "પાસપોર્ટ સાઇઝ ફોટો (4 નંગ)",
  "વાલીનું ઓળખ પ્રમાણ",
];

const fees = [
  { grade: "ધોરણ 1 થી 5", annual: "₹12,000", admission: "₹2,000" },
  { grade: "ધોરણ 6 થી 8", annual: "₹15,000", admission: "₹2,500" },
  { grade: "ધોરણ 9 થી 10", annual: "₹18,000", admission: "₹3,000" },
  { grade: "ધોરણ 11 થી 12 (વિજ્ઞાન)", annual: "₹22,000", admission: "₹4,000" },
  { grade: "ધોરણ 11 થી 12 (સામાન્ય)", annual: "₹18,000", admission: "₹3,000" },
];

export default function Admissions() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay py-16 md:py-24">
        <div className="container text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-4">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">પ્રવેશ ચાલુ છે!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">પ્રવેશ પ્રક્રિયા</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            શૈક્ષણિક વર્ષ 2024-25 માટે પ્રવેશ ફોર્મ ઉપલબ્ધ
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              પ્રવેશ <span className="text-gradient">પ્રક્રિયા</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              સરળ અને પારદર્શક પ્રવેશ પ્રક્રિયા
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 mb-8 md:mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number */}
                  <div className="shrink-0 w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold shadow-card z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-2xl bg-card shadow-card border border-border ${
                    index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                  } md:w-[calc(50%-40px)]`}>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Required Documents */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl hero-gradient shadow-soft">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  જરૂરી દસ્તાવેજો
                </h2>
              </div>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-soft border border-border">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Dates */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl navy-gradient shadow-soft">
                  <Calendar className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  મહત્વની તારીખો
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { event: "ફોર્મ વિતરણ શરૂ", date: "1 માર્ચ 2024" },
                  { event: "ફોર્મ જમા કરાવવાની છેલ્લી તારીખ", date: "30 એપ્રિલ 2024" },
                  { event: "પ્રવેશ પરીક્ષા", date: "5-10 મે 2024" },
                  { event: "પરિણામ જાહેરાત", date: "15 મે 2024" },
                  { event: "પ્રવેશ પ્રક્રિયા પૂર્ણ", date: "31 મે 2024" },
                  { event: "નવું શૈક્ષણિક સત્ર શરૂ", date: "15 જૂન 2024" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-card shadow-soft border border-border">
                    <span className="text-foreground font-medium">{item.event}</span>
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ફી <span className="text-gradient">માળખું</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              પારદર્શક અને વાજબી ફી માળખું
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="hero-gradient text-primary-foreground">
                  <th className="p-4 text-left rounded-tl-xl">ધોરણ</th>
                  <th className="p-4 text-center">વાર્ષિક ફી</th>
                  <th className="p-4 text-center rounded-tr-xl">પ્રવેશ ફી</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={index} className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-muted/50"}`}>
                    <td className="p-4 font-medium text-foreground">{fee.grade}</td>
                    <td className="p-4 text-center text-foreground">{fee.annual}</td>
                    <td className="p-4 text-center text-foreground">{fee.admission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            * ફી હપ્તામાં ભરી શકાય છે. SC/ST/OBC વિદ્યાર્થીઓ માટે સરકારી યોજનાઓ હેઠળ ફી માફી ઉપલબ્ધ.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 navy-gradient pattern-overlay">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            વધુ માહિતી માટે <span className="text-gold">સંપર્ક કરો</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            પ્રવેશ સંબંધિત કોઈપણ પ્રશ્ન માટે અમારો સંપર્ક કરો
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="hero" asChild>
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                +91 98765 43210
              </a>
            </Button>
            <Button size="lg" variant="heroOutline">
              <Download className="mr-2 h-5 w-5" />
              ફોર્મ ડાઉનલોડ કરો
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
