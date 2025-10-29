import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Women in Leadership Summit",
      date: "April 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center, Downtown",
      attendees: "500+ Expected",
      description: "Join us for a full day of inspiring talks, workshops, and networking opportunities with women leaders from various industries.",
      status: "Open for Registration",
    },
    {
      title: "Self-Defense Workshop Series",
      date: "April 20-22, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Community Sports Center",
      attendees: "50 per session",
      description: "Three-day intensive workshop teaching practical self-defense techniques and confidence building.",
      status: "Limited Spots",
    },
    {
      title: "Women Entrepreneurs Network",
      date: "May 5, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Innovation Hub",
      attendees: "100+ Expected",
      description: "Monthly networking event connecting women entrepreneurs, investors, and business mentors.",
      status: "Open for Registration",
    },
  ];

  const pastEvents = [
    {
      title: "International Women's Day Celebration",
      date: "March 8, 2024",
      attendees: "1,000+",
    },
    {
      title: "Career Development Workshop",
      date: "February 25, 2024",
      attendees: "200+",
    },
    {
      title: "Annual Achievers Awards Gala",
      date: "January 20, 2024",
      attendees: "500+",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us at our upcoming events or learn about our past initiatives that brought communities together.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-4">
                          <h3 className="text-2xl font-bold flex-1">{event.title}</h3>
                          <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                            {event.status}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-5 h-5 text-primary" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      <Button size="lg" className="lg:mt-0">
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Past Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.attendees} Attendees</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
