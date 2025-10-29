// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, Heart, Users, Award, Calendar } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import heroImage from "@/assets/hero-women.jpg";

// const Home = () => {
//   const stats = [
//     { icon: Users, value: "10,000+", label: "Supporters" },
//     { icon: Heart, value: "500+", label: "Stories Shared" },
//     { icon: Award, value: "200+", label: "Women Honored" },
//     { icon: Calendar, value: "50+", label: "Events Held" },
//   ];

//   const highlights = [
//     {
//       title: "Inspiring Stories",
//       description: "Real stories from real women who overcame challenges and achieved their dreams.",
//       link: "/stories",
//       color: "from-primary to-primary/70",
//     },
//     {
//       title: "Achievers Spotlight",
//       description: "Celebrating women who are making a difference in their communities and beyond.",
//       link: "/achievers",
//       color: "from-secondary to-secondary/70",
//     },
//     {
//       title: "Upcoming Events",
//       description: "Join us in our events and workshops designed to empower and educate.",
//       link: "/events",
//       color: "from-accent to-accent/70",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden mt-20">
//         <div className="absolute inset-0">
//           <img 
//             src={heroImage}
//             alt="Empowered women standing together" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
//         </div>
        
//         <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             Respect Women
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
//             Empowering women through awareness, education, and action. Together we create a world of respect and equality.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/initiative">
//               <Button size="lg" variant="secondary" className="text-lg">
//                 Learn About Our Initiative
//                 <ArrowRight className="ml-2" />
//               </Button>
//             </Link>
//             <Link to="/contact">
//               <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
//                 Get Involved
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <CardContent className="pt-6">
//                   <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
//                   <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                     {stat.value}
//                   </div>
//                   <div className="text-muted-foreground">{stat.label}</div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4">Make a Difference</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Explore our initiatives and join thousands who are creating positive change
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {highlights.map((highlight, index) => (
//               <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
//                 <div className={`h-2 bg-gradient-to-r ${highlight.color}`} />
//                 <CardContent className="p-6">
//                   <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
//                   <p className="text-muted-foreground mb-6">{highlight.description}</p>
//                   <Link to={highlight.link}>
//                     <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
//                       Learn More
//                       <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Make a Change?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Join our community of supporters and help us create a world where every woman is respected and empowered.
//           </p>
//           <Link to="/contact">
//             <Button size="lg" variant="secondary" className="text-lg">
//               Contact Us Today
//               <ArrowRight className="ml-2" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Calendar,
  Globe,
  Book,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const heroImage =
  "https://womeningh.org/wp-content/uploads/2023/03/B5D8EFBE-C93D-4771-9F77-38FBD8709B1D_1_201_a-scaled.jpeg";
const aboutImage =
  "https://media.istockphoto.com/id/1140611137/photo/a-panel-of-women-present-information.jpg?s=612x612&w=0&k=20&c=9bjySm4MvhrzEFoWPwKF5uIWcMHWreEtunKm-vCg0yU=";
const storiesImage =
  "https://e3.365dm.com/23/05/2048x1152/skynews-chelsea-wsl_6170197.jpg?20230527184756";

const Home = () => {
  const stats = [
    { icon: Users, value: "15,000+", label: "Supporters" },
    { icon: Heart, value: "700+", label: "Stories Shared" },
    { icon: Award, value: "300+", label: "Women Honored" },
    { icon: Calendar, value: "80+", label: "Events & Campaigns" },
  ];

  const initiatives = [
    {
      title: "Education for Every Girl",
      description:
        "Providing access to education and scholarships for underprivileged girls.",
      icon: Book,
      color: "from-pink-500 to-rose-400",
      image:
        "https://www.frasimania.it/wp-content/uploads/2023/02/frasi-laurea-figli-nipoti.jpg",
    },
    {
      title: "Health & Wellness",
      description:
        "Raising awareness on menstrual hygiene, mental health, and nutrition.",
      icon: Heart,
      color: "from-fuchsia-500 to-pink-400",
      image:
        "https://img.freepik.com/premium-vector/women-s-health-iconlogo-illustration-vector_643279-164.jpg?w=2000",
    },
    {
      title: "Leadership & Career",
      description:
        "Mentorship and career programs helping women become leaders in every field.",
      icon: Star,
      color: "from-violet-500 to-indigo-400",
      image:
        "https://images.rawpixel.com/image_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg",
    },
    {
      title: "Global Voices",
      description:
        "Connecting women worldwide to share, learn, and support each other.",
      icon: Globe,
      color: "from-rose-500 to-purple-400",
      image:
        "https://img.freepik.com/premium-photo/female-motivational-speaker-stage-talking-about-how-success_146508-7260.jpg?w=740",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src={heroImage}
          alt="Empowered women"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light black overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-4xl">
          <div className="flex justify-center items-center gap-3 mb-6">
            {/* <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm border border-white/30">
              <Users className="w-10 h-10 text-[#E0B3FF]" />
            </div> */}
            <img
              src="https://mentalhealth.uark.edu/files/2021/05/Ribbon-Suicide-Prevention.png"
              alt="Woman Icon"
              className="w-14 h-14 md:w-20 md:h-20 drop-shadow-md"
            />
            <h3 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
              Respect Women. Empower the Future.
            </h3>

            {/* Women Icon */}
          </div>
          <p className="text-base md:text-xl text-gray-100 mb-8">
            Empowering women through awareness, education, and action. Together
            we create a world of respect and equality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/initiative">
              <Button
                size="lg"
                className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white text-lg px-8"
              >
                Learn More
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-white text-[#7B28B5] hover:bg-white hover:text-[#5A0FC8]"
              >
                Join the Movement
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#F4E8F9] to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1140611137/photo/a-panel-of-women-present-information.jpg?s=612x612&w=0&k=20&c=9bjySm4MvhrzEFoWPwKF5uIWcMHWreEtunKm-vCg0yU="
              alt="Group of Women"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#7B28B5]">
              Building Awareness & Equality
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              Our mission is to spread awareness, create educational
              opportunities, and foster confidence among women everywhere.
              Through impactful workshops, leadership training, and social
              initiatives, we aim to bridge the gap between gender bias and
              equal opportunity.
            </p>

            {/* Icons Section */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Education Access
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Community Support
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Women Leadership
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Empowerment & Equality
                </span>
              </div>
            </div>

            <Link to="/about">
              <Button className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white">
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INITIATIVES SECTION */}
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-widest text-[#C9A8FF] font-semibold mb-3">
            Our Core Initiatives
          </p>
          <h2 className="text-4xl font-bold mb-4">
            We work across multiple fronts to create real impact — from
            education to health, from mentorship to advocacy.
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12"></p>

          {/* Card Grid Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold mb-2 text-[#7B28B5]">
                    {item.title || "Mental Health Condition"}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Tristique diam ne rhoncus tortor ut viverra porttitor
                    posuere tristique
                  </p>
                  {/* <a
                    href="#"
                    className="text-[#009669] font-medium hover:underline flex items-center gap-1"
                  >
                    Find Out More <span className="text-[#009669]">›</span>
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-[#5A0FC8]">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="border-none shadow-md hover:shadow-xl transition"
              >
                <CardContent className="py-8">
                  <stat.icon className="w-10 h-10 text-[#A13BAA] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#5A0FC8]">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#F5E3FA] to-[#EAD6F5]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#7B28B5]">
              Inspiring Stories from Real Women
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              {" "}
              Every woman has a story — of strength, courage, and resilience.
              From overcoming social barriers to achieving personal and
              professional success, these stories highlight the power of
              determination and unity. Discover the journeys of women who turned
              challenges into opportunities, inspired others through leadership,
              and continue to make a difference in their communities. Each story
              is a reminder that change begins with confidence, compassion, and
              the courage to rise above.{" "}
            </p>
            <Link to="/stories">
              <Button className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white">
                Read Stories
              </Button>
            </Link>
          </div>
          <img
            src={storiesImage}
            alt="Inspiring stories"
            className="rounded-3xl shadow-xl object-cover w-full"
          />
        </div>
      </section>

      {/* GET INVOLVED SECTION */}
      <section className="py-20 bg-[#F9F4FF]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#7B28B5]">
            Get Involved & Make a Difference
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you want to volunteer, mentor, or spread awareness — every
            effort counts. Be part of a growing community that stands for
            equality, empowerment, and hope.
          </p>

          {/* Three involvement options */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8">
              <img
                src="https://www.unearthwomen.com/wp-content/uploads/2019/06/shutterstock_570462865-3-1200x600.jpg"
                alt="Volunteer"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold text-[#7B28B5] mb-3">
                Volunteer With Us
              </h3>
              <p className="text-gray-600 mb-4">
                Join hands in organizing events, workshops, and outreach
                campaigns that inspire change.
              </p>
              <Button className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white">
                Sign Up
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8">
              <img
                src="http://womeninstrata.com.au/wp-content/uploads/2017/07/How-One-Start-Up-Is-Helping-Female-Professionals-Find-Mentors.jpg"
                alt="Mentorship"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold text-[#7B28B5] mb-3">
                Become a Mentor
              </h3>
              <p className="text-gray-600 mb-4">
                Share your experience and guide women in leadership,
                entrepreneurship, and education.
              </p>
              <Button className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white">
                Learn More
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8">
              <img
                src="https://wiredimpact.com/wp-content/uploads/2020/08/spreading-awareness-online-813x543.jpg"
                alt="Awareness"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold text-[#7B28B5] mb-3">
                Spread Awareness
              </h3>
              <p className="text-gray-600 mb-4">
                Use your voice to share women’s stories, support campaigns, and
                drive positive change.
              </p>
              <Button className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white">
                Share Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-[#7B28B5] to-[#5A0FC8] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Together, We Rise.</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[#EAD6F5]">
            Join our community of changemakers, advocates, and dreamers. Your
            voice matters — let’s build a future of respect and equality.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#7B28B5] hover:bg-[#F4E8F9] text-lg px-8"
            >
              Join the Movement
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
