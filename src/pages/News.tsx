import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      date: "March 15, 2024",
      category: "Campaign Update",
      title: "Women's Rights Summit Draws Record Attendance",
      excerpt: "Over 5,000 participants joined our annual summit, featuring keynote speakers from around the world discussing the future of women's empowerment.",
    },
    {
      date: "March 10, 2024",
      category: "Achievement",
      title: "New Policy Changes Support Working Mothers",
      excerpt: "Our advocacy efforts led to historic policy reforms providing better maternity leave and childcare support for working mothers nationwide.",
    },
    {
      date: "March 5, 2024",
      category: "Community",
      title: "1000 Women Graduate from Skills Training Program",
      excerpt: "Our vocational training initiative celebrates another successful cohort, with 95% of graduates securing employment within three months.",
    },
    {
      date: "February 28, 2024",
      category: "Research",
      title: "New Study Reveals Impact of Mentorship Programs",
      excerpt: "Research shows that women in our mentorship programs are 3x more likely to advance in their careers within two years.",
    },
    {
      date: "February 20, 2024",
      category: "Global Impact",
      title: "International Partnership Expands to 20 Countries",
      excerpt: "Our network now reaches women in 20 countries, sharing resources and best practices for gender equality initiatives worldwide.",
    },
    {
      date: "February 15, 2024",
      category: "Award",
      title: "Campaign Receives UN Recognition for Social Impact",
      excerpt: "The United Nations acknowledges our efforts in promoting women's rights and sustainable development through grassroots activism.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about our latest campaigns, achievements, and impact in communities around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((news, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {news.excerpt}
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

export default News;
