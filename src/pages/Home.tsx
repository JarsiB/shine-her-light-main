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

import React, { useState,useEffect } from "react";
import { ArrowLeft, } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { MapPin, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const heroImage =
  "https://womeningh.org/wp-content/uploads/2023/03/B5D8EFBE-C93D-4771-9F77-38FBD8709B1D_1_201_a-scaled.jpeg";
const aboutImage =
  "https://media.istockphoto.com/id/1140611137/photo/a-panel-of-women-present-information.jpg?s=612x612&w=0&k=20&c=9bjySm4MvhrzEFoWPwKF5uIWcMHWreEtunKm-vCg0yU=";
const storiesImage =
  "https://e3.365dm.com/23/05/2048x1152/skynews-chelsea-wsl_6170197.jpg?20230527184756";

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [current]);
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slides = [
    {
      image:
        "https://womeningh.org/wp-content/uploads/2023/03/B5D8EFBE-C93D-4771-9F77-38FBD8709B1D_1_201_a-scaled.jpeg",
      title: "Manapakkam Apartments",
      subtitle: "LAUNCHING",
      location: "Education for Every Girl",
      type: "Apartments",
      units: "318",
    },
    {
      image:
        "https://i.pinimg.com/originals/ba/52/ff/ba52ff2e19140b4a8666931cb55167f9.jpg",
      title: "KNR Residences",
      subtitle: "LAUNCHED",
      location: "Leadership & Career",
      type: "Premium Apartments",
      units: "Sold Out",
    },
    {
      image:
        "https://www.orissapost.com/wp-content/uploads/2019/01/Women-empowerment.jpg",
      title: "Skyline Homes",
      subtitle: "COMING SOON",
      location: "Global Voices",
      type: "Luxury Apartments",
      units: "280",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200, // slightly longer for smooth feel
      easing: "ease-in-out", // smoother motion curve
      offset: 100, // triggers a bit before visible
      delay: 50, // gentle stagger start
      once: true, // animate only once
      mirror: false, // disable reverse animation on scroll up
    });

    // Refresh AOS when images load or layout shifts
    window.addEventListener("load", AOS.refresh);
    return () => window.removeEventListener("load", AOS.refresh);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visible
  });
  const stats = [
    { icon: Users, value: 8705, label: "Donations", filled: true },
    { icon: Heart, value: 380, label: "Campaigns", filled: false },
    { icon: Award, value: 9450, label: "Funds Raised", filled: false },
    { icon: Calendar, value: 707, label: "Volunteers", filled: true },
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
    // {
    //   title: "Health & Wellness",
    //   description:
    //     "Raising awareness on menstrual hygiene, mental health, and nutrition.",
    //   icon: Heart,
    //   color: "from-fuchsia-500 to-pink-400",
    //   image:
    //     "https://img.freepik.com/premium-vector/women-s-health-iconlogo-illustration-vector_643279-164.jpg?w=2000",
    // },
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
      {/* <section className="relative h-[100vh] flex items-center justify-center text-center">
        <img
          src={heroImage}
          alt="Empowered women"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-4xl">
          <div className="flex justify-center items-center gap-3 mb-6">
            <img
              src="https://mentalhealth.uark.edu/files/2021/05/Ribbon-Suicide-Prevention.png"
              alt="Woman Icon"
              className="w-14 h-14 md:w-20 md:h-20 drop-shadow-md"
            />
            <h3
              className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Respect Women. Empower the Future.
            </h3>
          </div>
          <p
            className="text-base md:text-xl text-gray-100 mb-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Empowering women through awareness, education, and action. Together
            we create a world of respect and equality.
          </p>
        </div>
      </section> */}

      <section className="relative h-[100vh] overflow-hidden">
        {/* SLIDES */}
        {[
          {
            image:
              "https://womeningh.org/wp-content/uploads/2023/03/B5D8EFBE-C93D-4771-9F77-38FBD8709B1D_1_201_a-scaled.jpeg",
            title: "Respect Women. Empower the Future.",
            description:
              "Empowering women through awareness, education, and action. Together we create a world of respect and equality.",
          },
          {
            image:
              "https://i.pinimg.com/originals/ba/52/ff/ba52ff2e19140b4a8666931cb55167f9.jpg",
            title: "Education for Every Girl",
            description:
              "Creating opportunities for girls worldwide through education and mentorship.",
          },
          {
            image:
              "https://www.orissapost.com/wp-content/uploads/2019/01/Women-empowerment.jpg",
            title: "Leadership for Tomorrow",
            description:
              "Empowering women to lead, innovate, and inspire the next generation.",
          },
        ].map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
              index === current
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-10 scale-105"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-700" />

            {/* LEFT CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center items-start text-left text-white px-6 md:px-16 max-w-2xl">
              <div
                className="flex items-center gap-3 mb-6"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <img
                  src="https://mentalhealth.uark.edu/files/2021/05/Ribbon-Suicide-Prevention.png"
                  alt="Icon"
                  className="w-20 h-20 md:w-28 md:h-28 drop-shadow-lg"
                />
                <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                  {slide.title}
                </h3>
              </div>
              <p
                className="text-base md:text-xl text-gray-100 mb-8 leading-relaxed"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* --- SLIDE INDICATORS --- */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                current === index ? "bg-[#7B28B5] scale-125" : "bg-white/60"
              }`}
            ></button>
          ))}
        </div>

        {/* --- CATEGORY ICONS --- */}
        <div className="absolute bottom-24 left-10 z-20 flex gap-10 bg-black/40 backdrop-blur-md px-8 py-4 rounded-full shadow-lg">
          <div className="flex flex-col items-center text-white">
            <BookOpen className="w-8 h-8 mb-2 text-[#E2B4FF]" />
            <span className="text-sm font-medium">Education & Awareness</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <Users className="w-8 h-8 mb-2 text-[#E2B4FF]" />
            <span className="text-sm font-medium">Leadership & Mentorship</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <Heart className="w-8 h-8 mb-2 text-[#E2B4FF]" />
            <span className="text-sm font-medium">Health & Wellbeing</span>
          </div>
        </div>

        {/* --- THUMBNAILS --- */}
        <div className="absolute bottom-10 right-10 flex gap-5 z-20 bg-black/30 backdrop-blur-md p-4 rounded-xl shadow-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-44 h-28 cursor-pointer rounded-lg overflow-hidden border-[3px] transition-all duration-700 ${
                current === index
                  ? "border-[#7B28B5] scale-110 shadow-purple-500/40"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* <section className="relative h-[100vh] overflow-hidden">
        <div
          className="flex transition-transform duration-[4500ms] ease-[cubic-bezier(0.77,0,0.175,1)] h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 flex flex-col justify-end h-full px-10 md:px-24 pb-28 text-white">
                <p className="text-sm tracking-widest uppercase mb-3 text-[#D3C0FF]">
                  Empowering Women
                </p>

                <h2 className="text-5xl md:text-7xl font-bold mb-5 leading-tight text-white drop-shadow-md">
                  Empowerment in Action
                </h2>

                <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
                  Empowering women through awareness, education, and action.
                  Together we create a world of respect and equality.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-16 text-sm md:text-base">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="0"
                  >
                    <p className="font-semibold text-white mb-1">Our Work</p>
                    <div className="h-[2px] w-10 bg-[#7B28B5] mb-2"></div>
                    <p className="text-gray-200">{slide.location}</p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-9 right-6 flex gap-3 z-20">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-36 h-30 cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-700 ${
                current === index
                  ? "border-[#7B28B5] scale-110 shadow-lg"
                  : "border-transparent opacity-80"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover hover:opacity-90 transition-all"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/initiative">
              <Button
                size="lg"
                className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white text-lg px-8"
                data-aos="fade-up"
                data-aos-duration="3000"
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
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Join the Movement
              </Button>
            </Link>
          </div> */}

      {/* <div className="fixed right-0 top-1/3 flex flex-col items-end z-50 space-y-3">
        <a
          href="#enquire"
          className="group relative bg-[#D70000] text-white font-semibold text-xs px-3 py-3 w-[40px] overflow-hidden rounded-l-md transition-all duration-500 hover:w-[160px]"
        >
          <span className="absolute inset-0 flex items-center justify-center transform -rotate-90 group-hover:rotate-0 transition-all duration-500 origin-center">
            ENQUIRE NOW
          </span>
        </a>

        <a
          href="#projects"
          className="group relative bg-gray-700 text-white font-semibold text-xs px-3 py-3 w-[40px] overflow-hidden rounded-l-md transition-all duration-500 hover:w-[160px]"
        >
          <span className="absolute inset-0 flex items-center justify-center transform -rotate-90 group-hover:rotate-0 transition-all duration-500 origin-center">
            PROJECTS
          </span>
        </a>

        <a
          href="#hiring"
          className="group relative bg-[#D70000] text-white font-semibold text-xs px-3 py-3 w-[40px] overflow-hidden rounded-l-md transition-all duration-500 hover:w-[160px]"
        >
          <span className="absolute inset-0 flex items-center justify-center transform -rotate-90 group-hover:rotate-0 transition-all duration-500 origin-center">
            HIRING
          </span>
        </a>
      </div> */}

      {/* ABOUT SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#F4E8F9] to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1140611137/photo/a-panel-of-women-present-information.jpg?s=612x612&w=0&k=20&c=9bjySm4MvhrzEFoWPwKF5uIWcMHWreEtunKm-vCg0yU="
              alt="Group of Women"
              className="rounded-2xl shadow-lg w-full object-cover"
              data-aos="zoom-in"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2
              className="text-4xl font-bold mb-6 text-[#7B28B5]"
              data-aos="fade-left"
            >
              Building Awareness & Equality
            </h2>
            <p
              className="text-lg text-gray-600 mb-6 text-justify"
              data-aos="fade-left"
            >
              Our mission is to spread awareness, create educational
              opportunities, and foster confidence among women everywhere.
              Through impactful workshops, leadership training, and social
              initiatives, we aim to bridge the gap between gender bias and
              equal opportunity.
            </p>

            {/* Icons Section */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3" data-aos="zoom-in">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Education Access
                </span>
              </div>

              <div className="flex items-center space-x-3" data-aos="zoom-in">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Community Support
                </span>
              </div>

              <div className="flex items-center space-x-3" data-aos="zoom-in">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Women Leadership
                </span>
              </div>

              <div className="flex items-center space-x-3" data-aos="zoom-in">
                <div className="bg-[#7B28B5]/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-[#7B28B5]" />
                </div>
                <span className="font-medium text-gray-700">
                  Empowerment & Equality
                </span>
              </div>
            </div>

            <Link to="/about">
              <Button
                className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white"
                data-aos="zoom-in"
              >
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h4
            className="text-[#7B28B5] font-semibold text-lg uppercase tracking-wide"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Our Mission
          </h4>
          <div className="relative inline-block mt-1 mb-2">
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-[3px] bg-[#F59E0B] rounded"></div>
          </div>
          <h2
            className="text-4xl font-bold text-gray-900 mt-3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Respect Women. Empower the Future.
          </h2>
          <p
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Empowering women through awareness, education, and action. Together
            we create a world of respect and equality.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Left Image Card */}
          <div className="md:col-span-2 space-y-6">
            <div
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border hover:shadow-md transition"
              data-aos="fade-right"
            >
              <img
                src="https://images.inc.com/uploaded_files/image/1920x1080/getty_484222033_208601.jpg"
                alt="Empowered Women"
                className="w-full md:w-1/2 h-64 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
              />
              <div className="p-6 flex flex-col justify-center group hover:bg-[#7B28B5] transition duration-300 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-white">
                  Creating Equal Opportunities
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center gap-1 group-hover:text-white">
                    <MapPin className="w-4 h-4 text-[#1E7C6D] group-hover:text-white" />
                    Global Outreach
                  </span>
                  <span className="flex items-center gap-1 group-hover:text-white">
                    <Clock className="w-4 h-4 text-[#1E7C6D] group-hover:text-white" />
                    Ongoing Support
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed group-hover:text-white">
                  We work to provide women with equal access to education,
                  safety, and leadership opportunities across communities.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border hover:shadow-md transition"
              data-aos="fade-right"
            >
              <img
                src="https://www.fearlesspresentations.com/wp-content/uploads/2019/02/Fearless-Presentations-Background.jpeg"
                alt="Women Empowerment Workshop"
                className="w-full md:w-1/2 h-64 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
              />
              <div className="p-6 flex flex-col justify-center group hover:bg-[#7B28B5] transition duration-300 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-white">
                  Promoting Awareness
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center gap-1 group-hover:text-white">
                    <MapPin className="w-4 h-4 text-[#1E7C6D] group-hover:text-white" />
                    Local Communities
                  </span>
                  <span className="flex items-center gap-1 group-hover:text-white">
                    <Clock className="w-4 h-4 text-[#1E7C6D] group-hover:text-white" />
                    Monthly Programs
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed group-hover:text-white">
                  Awareness drives change — our outreach programs aim to spark
                  conversations and inspire social transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Newsletter Box */}
          <div
            className="bg-white rounded-xl shadow-sm border p-8 flex flex-col justify-center"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Join the Movement
            </h3>
            <p className="text-gray-500 text-center mb-6">
              Sign up to stay updated on new initiatives, workshops, and success
              stories.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E7C6D]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E7C6D]"
              />
              <button
                type="submit"
                className="w-full bg-[#7B28B5] text-white font-semibold py-3 rounded-lg hover:bg-[#E78E00] transition"
              >
                Subscribe Now
              </button>
            </form>
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
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-6 text-center text-white">
          <p
            className="uppercase tracking-widest text-[#C9A8FF] font-semibold mb-3"
            data-aos="zoom-in"
          >
            Our Core Initiatives
          </p>
          <h2 className="text-4xl font-bold mb-4" data-aos="zoom-in">
            We work across multiple fronts to create real impact — from
            education to health, from mentorship to advocacy.
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12"></p>

          <div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto h-[420px]" // increased card height
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out" // image height increased
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-[#7B28B5]">
                    {item.title || "Mental Health Condition"}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {item.description ||
                      "Tristique diam ne rhoncus tortor ut viverra porttitor posuere tristique"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-12 text-[#5A0FC8]"
            data-aos="fade-up"
          >
            Our Impact So Far
          </h2>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {stats.map((stat, i) => (
              <Card
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="border-none bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-xl"
              >
                <CardContent className="py-10">
                  <div className="bg-gradient-to-r from-[#A13BAA] to-[#5A0FC8] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-4xl font-extrabold text-[#5A0FC8] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* STORIES SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#F5E3FA] to-[#EAD6F5]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-4xl font-bold mb-6 text-[#7B28B5]"
              data-aos="fade-right"
            >
              Inspiring Stories from Real Women
            </h2>
            <p
              className="text-lg text-gray-600 mb-6 text-justify"
              data-aos="fade-right"
            >
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
              <Button
                className="bg-[#7B28B5] hover:bg-[#5A0FC8] text-white"
                data-aos="zoom-in"
              >
                Read Stories
              </Button>
            </Link>
          </div>
          <img
            src={storiesImage}
            alt="Inspiring stories"
            className="rounded-3xl shadow-xl object-cover w-full"
            data-aos="zoom-in"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-6 text-[#7B28B5]"
            data-aos="zoom-in"
          >
            Empowerment in Action
          </h2>
          <p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            data-aos="zoom-in"
          >
            Moments that capture strength, unity, and transformation —
            celebrating every woman’s journey toward a brighter tomorrow.
          </p>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C94FC5] to-[#7B28B5] transition-transform duration-700 group-hover:scale-105"></div>
              <img
                src="http://www.voicesofwomenmedia.org/wp-content/uploads/2014/07/1078684_553445924692071_633827631_o.jpg"
                alt="Education & Awareness"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition duration-500"
              />
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl font-semibold">
                Education & Awareness
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C94FC5] to-[#7B28B5] transition-transform duration-700 group-hover:scale-105"></div>
              <img
                src="https://www.mentorcliq.com/wp-content/uploads/2022/09/Women5-scaled.webp"
                alt="Leadership & Mentorship"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition duration-500"
              />
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl font-semibold">
                Leadership & Mentorship
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C94FC5] to-[#7B28B5] transition-transform duration-700 group-hover:scale-105"></div>
              <img
                src="https://womeningh.org/wp-content/uploads/2023/03/B5D8EFBE-C93D-4771-9F77-38FBD8709B1D_1_201_a-scaled.jpeg"
                alt="Community Upliftment"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition duration-500"
              />
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl font-semibold">
                Community Upliftment
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C94FC5] to-[#7B28B5] transition-transform duration-700 group-hover:scale-105"></div>
              <img
                src="https://professional.dce.harvard.edu/wp-content/uploads/sites/9/2020/03/public-speaker.jpg"
                alt="Skill Development"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition duration-500"
              />
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl font-semibold">
                Skill Development
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C94FC5] to-[#7B28B5] transition-transform duration-700 group-hover:scale-105"></div>
              <img
                src="https://www.healthkart.com/connect/wp-content/uploads/2020/08/banner-54.jpg"
                alt="Health & Wellbeing"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition duration-500"
              />
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl font-semibold">
                Health & Wellbeing
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C94FC5] to-[#7B28B5] transition-transform duration-700 group-hover:scale-105"></div>
              <img
                src="https://content.thriveglobal.com/wp-content/uploads/2019/04/black-collaboration-cooperation-943630.jpg"
                alt="Global Collaboration"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition duration-500"
              />
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl font-semibold">
                Global Collaboration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED SECTION */}
      <section className="py-20 bg-[#F9F4FF]">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-6 text-[#7B28B5]"
            data-aos="zoom-in"
          >
            Get Involved & Make a Difference
          </h2>
          <p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            data-aos="zoom-in"
          >
            Whether you want to volunteer, mentor, or spread awareness — every
            effort counts. Be part of a growing community that stands for
            equality, empowerment, and hope.
          </p>

          {/* Three involvement options */}
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8"
              data-aos="zoom-in"
            >
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

            <div
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8"
              data-aos="zoom-in"
            >
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

            <div
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8"
              data-aos="zoom-in"
            >
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

      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c7/7c/81/c77c81202a7272b4eececdf123887c5a.jpg')",
        }}
        ref={ref}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div data-aos="fade-right" className="text-white text-left">
            <h3 className="text-[#5A0FC8] font-semibold mb-3">Empowerment</h3>{" "}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Respect Women. <br /> Empower the Future.{" "}
            </h2>{" "}
            <p className="text-gray-200 max-w-md">
              {" "}
              Empowering women through awareness, education, and collective
              action. Together, we build a future rooted in respect, equality,
              and opportunity for every woman and girl across the world.{" "}
            </p>{" "}
            <button className="mt-6 bg-white text-[#5A0FC8] px-6 py-3 font-semibold rounded-full shadow-md hover:bg-[#5A0FC8] hover:text-white transition">
              {" "}
              Learn More{" "}
            </button>{" "}
          </div>
          {/* RIGHT SIDE */}
          <div
            className="grid grid-cols-2 gap-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {stats.map((stat, i) => (
              <Card
                key={i}
                className={`rounded-xl border-none transition-all duration-500 ${
                  stat.filled
                    ? "bg-[#5A0FC8] text-white shadow-xl"
                    : "bg-transparent border border-white/40 text-white"
                }`}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <CardContent className="py-10 flex flex-col items-center justify-center">
                  <div
                    className={`mb-4 ${
                      stat.filled ? "text-white" : "text-[#5A0FC8]"
                    }`}
                  >
                    <stat.icon className="w-10 h-10" />
                  </div>
                  <div className="text-4xl font-extrabold mb-1">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center text-[#7B28B5] mb-8"
            data-aos="zoom-in"
          >
            Workshops & Programs
          </h2>
          <p
            className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
            data-aos="zoom-in"
          >
            Empowering women with practical skills, leadership training, and
            confidence through interactive, inspiring sessions.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
            >
              <img
                src="https://professional.dce.harvard.edu/wp-content/uploads/sites/9/2020/11/women-leadership.jpg"
                alt="Leadership Training"
                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#7B28B5] mb-3">
                  Leadership Training
                </h3>
                <p className="text-gray-600 mb-5">
                  Hands-on leadership and decision-making workshops that build
                  confidence and inspire future changemakers.
                </p>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white rounded-full bg-gradient-to-r from-[#7B28B5] to-[#b14bf4] hover:from-[#b14bf4] hover:to-[#7B28B5] transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  Find Out More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 text-white animate-pulse"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l1.5 5L19 8l-5 1.5L12 15l-2-5.5L5 8l5.5-1L12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="https://eqmaastricht.com/wp-content/uploads/2019/08/Zelfverdediging-III.gif"
                alt="Self-Defense Sessions"
                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#7B28B5] mb-3">
                  Self-Defense Sessions
                </h3>
                <p className="text-gray-600 mb-5">
                  Learn real-world self-defense techniques to stay safe and
                  confident — empowering both body and mind.
                </p>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white rounded-full bg-gradient-to-r from-[#7B28B5] to-[#b14bf4] hover:from-[#b14bf4] hover:to-[#7B28B5] transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  Find Out More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 text-white animate-pulse"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l1.5 5L19 8l-5 1.5L12 15l-2-5.5L5 8l5.5-1L12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://media.istockphoto.com/photos/personal-development-career-growth-and-motivation-picture-id667434682?k=20&m=667434682&s=612x612&w=0&h=YSr7Vwty2lhyJzDFE87du2m-f-0dYNTNO4l8gq5JPn8="
                alt="Career Guidance"
                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#7B28B5] mb-3">
                  Career Guidance
                </h3>
                <p className="text-gray-600 mb-5">
                  Personalized mentorship and advice for women ready to step
                  boldly into leadership and career growth.
                </p>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white rounded-full bg-gradient-to-r from-[#7B28B5] to-[#b14bf4] hover:from-[#b14bf4] hover:to-[#7B28B5] transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  Find Out More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 text-white animate-pulse"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l1.5 5L19 8l-5 1.5L12 15l-2-5.5L5 8l5.5-1L12 2z" />
                  </svg>
                </a>
              </div>
            </div>
            {/*  */}
            <div
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://orai.com/wp-content/uploads/2021/11/woman-giving-speech-0820.jpg"
                alt="Career Guidance"
                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#7B28B5] mb-3">
                  Entrepreneurship Program
                </h3>
                <p className="text-gray-600 mb-5">
                  A platform to help aspiring women entrepreneurs start and grow
                  their businesses through mentorship and networking.
                </p>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white rounded-full bg-gradient-to-r from-[#7B28B5] to-[#b14bf4] hover:from-[#b14bf4] hover:to-[#7B28B5] transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  Find Out More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 text-white animate-pulse"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l1.5 5L19 8l-5 1.5L12 15l-2-5.5L5 8l5.5-1L12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#F9F4FF] to-[#EFE6FB]">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-6 text-[#7B28B5]"
            data-aos="zoom-in"
          >
            Voices of Change
          </h2>
          <p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            data-aos="zoom-in"
          >
            Every voice matters. These are the inspiring words of women who have
            broken barriers, challenged norms, and continue to inspire change.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Voice 1 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
              data-aos="fade-up"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAY1uHY5MMwPcGDaOCMPZ9Zg5W2DFBx3ymhwdzrMu00YwnJLuYu1QN4H5U1Q6IyyvrQE&usqp=CAU"
                alt="Voice 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#7B28B5]"
              />
              <p className="italic text-gray-600 mb-4">
                “Empowerment is not a gift; it’s a right. Every woman deserves
                the freedom to make her own choices.”
              </p>
              <h3 className="font-semibold text-[#7B28B5]">name</h3>
              <p className="text-sm text-gray-500">Social Activist</p>
            </div>

            {/* Voice 2 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAY1uHY5MMwPcGDaOCMPZ9Zg5W2DFBx3ymhwdzrMu00YwnJLuYu1QN4H5U1Q6IyyvrQE&usqp=CAU"
                alt="Voice 2"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#7B28B5]"
              />
              <p className="italic text-gray-600 mb-4">
                “When women support each other, incredible things happen.”
              </p>
              <h3 className="font-semibold text-[#7B28B5]">name</h3>
              <p className="text-sm text-gray-500">Entrepreneur</p>
            </div>

            {/* Voice 3 */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAY1uHY5MMwPcGDaOCMPZ9Zg5W2DFBx3ymhwdzrMu00YwnJLuYu1QN4H5U1Q6IyyvrQE&usqp=CAU"
                alt="Voice 3"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#7B28B5]"
              />
              <p className="italic text-gray-600 mb-4">
                “Change begins with awareness. Respect turns that awareness into
                action.”
              </p>
              <h3 className="font-semibold text-[#7B28B5]">name</h3>
              <p className="text-sm text-gray-500">Teacher & Mentor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-[#7B28B5] to-[#5A0FC8] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6" data-aos="zoom-in">
            Together, We Rise.
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto text-[#EAD6F5]"
            data-aos="zoom-in"
          >
            Join our community of changemakers, advocates, and dreamers. Your
            voice matters — let’s build a future of respect and equality.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#7B28B5] hover:bg-[#F4E8F9] text-lg px-8"
              data-aos="zoom-in"
            >
              Join the Movement
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[#F9F4FF]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left side image */}
            <div className="md:w-1/2" data-aos="fade-right">
              <img
                src="https://janebenston.com/wp-content/uploads/2016/08/Career-Success1.png"
                alt="Empower Women"
                className="rounded-2xl shadow-lg w-full h-[550px] object-cover object-center"
              />
            </div>

            {/* Right side form */}
            <div
              className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg"
              data-aos="fade-left"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#7B28B5]">
                Get Involved & Make a Difference
              </h2>
              <p className="text-gray-600 mb-6">
                Join the movement — fill out the form below to volunteer,
                mentor, or participate in our awareness programs.
              </p>

              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7B28B5]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7B28B5]"
                  />
                </div>

                <div>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7B28B5]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Area of Interest
                    </option>
                    <option value="volunteer">Volunteer</option>
                    <option value="mentor">Mentor</option>
                    <option value="awareness">Awareness Campaign</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message (optional)"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7B28B5]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7B28B5] text-white font-semibold py-3 rounded-lg hover:bg-[#5A0FC8] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
