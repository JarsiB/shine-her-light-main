import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-women.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Supporters" },
    { icon: Heart, value: "500+", label: "Stories Shared" },
    { icon: Award, value: "200+", label: "Women Honored" },
    { icon: Calendar, value: "50+", label: "Events Held" },
  ];

  const highlights = [
    {
      title: "Inspiring Stories",
      description: "Real stories from real women who overcame challenges and achieved their dreams.",
      link: "/stories",
      color: "from-primary to-primary/70",
    },
    {
      title: "Achievers Spotlight",
      description: "Celebrating women who are making a difference in their communities and beyond.",
      link: "/achievers",
      color: "from-secondary to-secondary/70",
    },
    {
      title: "Upcoming Events",
      description: "Join us in our events and workshops designed to empower and educate.",
      link: "/events",
      color: "from-accent to-accent/70",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Empowered women standing together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Respect Women
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering women through awareness, education, and action. Together we create a world of respect and equality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/initiative">
              <Button size="lg" variant="secondary" className="text-lg">
                Learn About Our Initiative
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Make a Difference</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our initiatives and join thousands who are creating positive change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`h-2 bg-gradient-to-r ${highlight.color}`} />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground mb-6">{highlight.description}</p>
                  <Link to={highlight.link}>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Change?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of supporters and help us create a world where every woman is respected and empowered.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg">
              Contact Us Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
