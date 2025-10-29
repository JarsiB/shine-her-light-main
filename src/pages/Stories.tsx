import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      title: "Breaking Barriers in Tech",
      story: "As a woman in technology, I faced countless challenges and doubts. But with determination and support from this community, I became a senior developer and now mentor young women entering the field.",
      role: "Senior Software Developer",
    },
    {
      name: "Maria Garcia",
      title: "From Survivor to Advocate",
      story: "After overcoming domestic violence, I dedicated my life to helping other women find their voice and strength. Today, I run a shelter that has helped over 500 women rebuild their lives.",
      role: "Shelter Director & Advocate",
    },
    {
      name: "Priya Patel",
      title: "Education Champion",
      story: "Growing up in a community where girls' education was not prioritized, I fought to continue my studies. Now, as a principal, I ensure every girl has access to quality education.",
      role: "School Principal",
    },
    {
      name: "Aisha Mohammed",
      title: "Entrepreneurial Spirit",
      story: "Starting my business with just $100, I faced skepticism and obstacles. Today, my company employs 50 women and provides them with fair wages and opportunities for growth.",
      role: "Business Owner",
    },
    {
      name: "Chen Wei",
      title: "Scientific Breakthrough",
      story: "As one of few women in my research field, I persevered through challenges to lead groundbreaking research in renewable energy, proving that gender is no barrier to scientific excellence.",
      role: "Research Scientist",
    },
    {
      name: "Rosa Martinez",
      title: "Community Leader",
      story: "I transformed my small neighborhood into a thriving community where women support each other through cooperatives, education programs, and mutual aid networks.",
      role: "Community Organizer",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Inspiring Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories of courage, resilience, and triumph from women who are making a difference in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-primary mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-4">{story.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{story.story}</p>
                  <p className="font-semibold text-foreground">— {story.name}</p>
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

export default Stories;
