import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import achiever1 from "@/assets/achiever-1.jpg";
import achiever2 from "@/assets/achiever-2.jpg";
import achiever3 from "@/assets/achiever-3.jpg";

const Achievers = () => {
  const achievers = [
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAY1uHY5MMwPcGDaOCMPZ9Zg5W2DFBx3ymhwdzrMu00YwnJLuYu1QN4H5U1Q6IyyvrQE&usqp=CAU",
      title: "Medical Pioneer",
      achievement:
        "Developed innovative treatments for maternal health, saving thousands of lives in underserved communities.",
      awards: [
        "Nobel Prize Nominee",
        "WHO Excellence Award",
        "National Medal of Science",
      ],
    },
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAY1uHY5MMwPcGDaOCMPZ9Zg5W2DFBx3ymhwdzrMu00YwnJLuYu1QN4H5U1Q6IyyvrQE&usqp=CAU",
      title: "Social Entrepreneur",
      achievement:
        "Founded a network of women-led cooperatives that empowers 10,000+ women across Africa with sustainable livelihoods.",
      awards: [
        "Forbes 30 Under 30",
        "UN Women Champion",
        "Entrepreneur of the Year",
      ],
    },
    {
      name: "name",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAY1uHY5MMwPcGDaOCMPZ9Zg5W2DFBx3ymhwdzrMu00YwnJLuYu1QN4H5U1Q6IyyvrQE&usqp=CAU",
      title: "Environmental Scientist",
      achievement:
        "Leading climate change research and advocating for policies that protect vulnerable communities from environmental disasters.",
      awards: [
        "Environmental Hero Award",
        "Scientific Excellence Medal",
        "Green Innovation Prize",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Celebrating Achievers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Honoring extraordinary women who have made significant
              contributions to society and inspired countless others.
            </p>
          </div>

          <div className="space-y-12">
            {achievers.map((achiever, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* <div className="relative h-56 md:h-[380px] lg:h-[420px]">
                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                  </div> */}
                  <div className="relative flex justify-center items-center">
                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4  shadow-lg"
                    />
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <Award className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-3xl font-bold mb-2">{achiever.name}</h3>
                    <p className="text-xl text-primary font-semibold mb-4">
                      {achiever.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {achiever.achievement}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">
                        Awards & Recognition
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {achiever.awards.map((award, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Achievers;
