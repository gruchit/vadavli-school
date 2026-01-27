import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
const galleryCategories = [{
  id: "all",
  label: "બધા"
}, {
  id: "campus",
  label: "કેમ્પસ"
}, {
  id: "events",
  label: "કાર્યક્રમો"
}, {
  id: "sports",
  label: "રમતગમત"
}, {
  id: "cultural",
  label: "સાંસ્કૃતિક"
}];
const galleryImages = [{
  id: 1,
  src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  alt: "શાળા ભવન",
  category: "campus"
}, {
  id: 2,
  src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  alt: "વર્ગખંડ",
  category: "campus"
}, {
  id: 3,
  src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  alt: "પ્રજાસત્તાક દિવસ",
  category: "events"
}, {
  id: 4,
  src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  alt: "લાઇબ્રેરી",
  category: "campus"
}, {
  id: 5,
  src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
  alt: "રમતગમત",
  category: "sports"
}, {
  id: 6,
  src: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=800&q=80",
  alt: "યોગ દિવસ",
  category: "sports"
}, {
  id: 7,
  src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
  alt: "વાર્ષિક ઉત્સવ",
  category: "cultural"
}, {
  id: 8,
  src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
  alt: "વિદ્યાર્થીઓ",
  category: "campus"
}, {
  id: 9,
  src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
  alt: "પુસ્તકાલય",
  category: "campus"
}, {
  id: 10,
  src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80",
  alt: "ક્રિકેટ",
  category: "sports"
}, {
  id: 11,
  src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  alt: "કલા પ્રદર્શન",
  category: "cultural"
}, {
  id: 12,
  src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
  alt: "અભ્યાસ",
  category: "campus"
}];
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const filteredImages = activeCategory === "all" ? galleryImages : galleryImages.filter(img => img.category === activeCategory);
  return <Layout>
      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay py-16 md:py-24 bg-primary">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ફોટો ગેલેરી</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            અમારી શાળાની યાદગાર ક્ષણો
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {galleryCategories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id ? "hero-gradient text-primary-foreground shadow-soft" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {category.label}
              </button>)}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map(image => <div key={image.id} onClick={() => setSelectedImage(image)} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all cursor-pointer">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary-foreground font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 rounded-full bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors">
            <X className="h-6 w-6" />
          </button>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[85vh] rounded-2xl shadow-elevated" onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground text-lg font-medium bg-foreground/50 px-6 py-2 rounded-full">
            {selectedImage.alt}
          </p>
        </div>}
    </Layout>;
}