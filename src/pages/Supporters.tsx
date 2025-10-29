import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Supporters = () => {
  const testimonials = [
    {
      name: "Jennifer Liu",
      role: "Corporate Partner",
      text: "Supporting this campaign has been one of the most meaningful decisions for our company. The impact we've seen in our community is transformative.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      role: "Community Volunteer",
      text: "As a male ally, I've learned so much about the challenges women face and how I can be part of the solution. This movement is essential for our future.",
      rating: 5,
    },
    {
      name: "Fatima Ahmed",
      role: "Program Participant",
      text: "The support and resources I received through this initiative changed my life. I went from struggling to thriving, and now I help others do the same.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Monthly Donor",
      text: "Every contribution makes a real difference. Seeing the direct impact of my support through regular updates keeps me motivated to continue giving.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Workshop Facilitator",
      text: "Teaching workshops for this campaign has been incredibly rewarding. Watching women gain confidence and skills is why I do this work.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "Business Sponsor",
      text: "Our business values align perfectly with this campaign's mission. It's a privilege to support such important work in our community.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Supporters Voice
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our community of supporters, volunteers, and partners who are making this movement possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Supporters;
