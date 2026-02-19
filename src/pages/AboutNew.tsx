import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import page1 from "@/images/BOOK_removed_page-0001.jpg";
import page2 from "@/images/BOOK_removed_page-0002.jpg";
import page3 from "@/images/BOOK_removed_page-0003.jpg";
import page4 from "@/images/BOOK_removed_page-0004.jpg";
export default function About() {
  return <Layout>
    {/* Book Pages Section */}


      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay py-16 md:py-24 bg-primary">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">દાતાઓ</h1>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background">
  <div className="container space-y-8">
    
    {[page1, page2, page3, page4].map((page, index) => (
      <div key={index} className="w-full">
        <img
          src={page}
          alt={`Book Page ${index + 1}`}
          className="w-full h-auto rounded-xl shadow-card"
        />
      </div>
    ))}

  </div>
</section>

     
    </Layout>;
}