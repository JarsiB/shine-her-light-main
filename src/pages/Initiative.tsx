import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, BookOpen } from "lucide-react";

const Initiative = () => {
  const initiatives = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create a society where women are respected, valued, and empowered to reach their full potential through education, awareness, and advocacy.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "A world where every woman lives with dignity, safety, and equal opportunities, free from discrimination and violence.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We bring together diverse communities to foster dialogue, understanding, and collaborative action for women's rights and empowerment.",
    },
    {
      icon: BookOpen,
      title: "Education & Awareness",
      description: "Through workshops, campaigns, and resources, we educate communities about gender equality, respect, and women's contributions to society.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Initiative
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded on the principles of equality and respect, our initiative strives to create lasting change through education, advocacy, and community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <initiative.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-br from-primary/10 to-accent/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">About Our Founders</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The Respect Women initiative was founded by a diverse group of activists, educators, and community leaders who recognized the urgent need for systemic change in how society views and treats women. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our inception, we have worked tirelessly to create programs that educate, empower, and elevate women from all walks of life. Our team is committed to building a movement that transcends borders, cultures, and generations, united by a common goal: respect and equality for all women.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Initiative;
