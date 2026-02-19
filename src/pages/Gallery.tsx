import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";

// AUTO IMPORT ALL IMAGES FROM @/images/gallery
const modules = import.meta.glob('@/images/gallery/*.{png,jpg,jpeg,webp}', {
  eager: true,
});
const modules2 = import.meta.glob('@/images/65_years/*.{png,jpg,jpeg,webp}', {
  eager: true,
});
const modules3 = import.meta.glob('@/images/group_photos/*.{png,jpg,jpeg,webp}', {
  eager: true,
});
const allModules = {
  ...modules,
  ...modules2,
  ...modules3,
};
const galleryImages = Object.entries(allModules).map(([path, mod], index) => {
  return {
    id: index + 1,
    src: (mod as any).default,
    alt: `Gallery image ${index + 1}`,
    category: path.includes('65_years') ? '65_years' : path.includes('group_photos') ? 'group_photos' : 'gallery',
  };
});


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