import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    { title: "Annual Summit 2024", color: "from-primary to-primary/70" },
    { title: "Workshop Series", color: "from-secondary to-secondary/70" },
    { title: "Community Gathering", color: "from-accent to-accent/70" },
    { title: "Skills Training Program", color: "from-primary/70 to-accent" },
    { title: "Award Ceremony", color: "from-accent/70 to-secondary" },
    { title: "Youth Empowerment Day", color: "from-secondary/70 to-primary" },
    { title: "International Conference", color: "from-primary to-secondary" },
    { title: "Mentorship Launch", color: "from-accent to-primary/70" },
    { title: "Volunteer Appreciation", color: "from-secondary to-accent/70" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Capturing moments of empowerment, celebration, and community from our events and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`h-64 bg-gradient-to-br ${image.color} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <h3 className="text-white text-xl font-bold z-10 px-4 text-center">
                    {image.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Want to share your photos from our events? <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
