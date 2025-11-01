// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/r1.jpg";


// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "Initiative By", path: "/initiative" },
//     { label: "Inspiring Stories", path: "/stories" },
//     { label: "Achievers", path: "/achievers" },
//     { label: "News", path: "/news" },
//     { label: "Supporters Voice", path: "/supporters" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Events", path: "/events" },
//     { label: "Reach Us", path: "/contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/100 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Respect Women
//           </Link> */}
//           <Link to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="Respect Women Logo"
//               className="h-14 md:h-20 w-auto"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-1">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                   isActive(item.path)
//                     ? "bg-primary text-primary-foreground"
//                     : "text-foreground hover:bg-muted"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X /> : <Menu />}
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden pb-4 animate-fade-in">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
//                   isActive(item.path)
//                     ? "bg-primary text-primary-foreground"
//                     : "text-foreground hover:bg-muted"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;



import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/r1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Initiative By", path: "/initiative" },
    { label: "Reach Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      offset: 100,
      delay: 50,
      once: true,
      mirror: false,
    });

    window.addEventListener("load", AOS.refresh);
    return () => window.removeEventListener("load", AOS.refresh);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/100 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col items-center no-underline text-inherit"
          >
            <img
              src={logo}
              alt="Respect Women Logo"
              className="h-20 md:h-20 w-auto"
              data-aos="zoom-in"
            />
            <span
              className="mt-1 text-sm md:text-base font-semibold text-gray-800"
              data-aos="fade-up"
            >
              # CELEBRATING HER
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base md:text-lg font-semibold no-underline transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-[#5A0FC8]"
                    : "text-gray-800 hover:text-[#5A0FC8]"
                }`}
                data-aos="zoom-in"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg md:text-xl font-medium no-underline ${
                  isActive(item.path)
                    ? "text-[#5A0FC8]"
                    : "text-gray-800 hover:text-[#5A0FC8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


// import AOS from "aos";
// import "aos/dist/aos.css";
// import React, { useEffect } from "react";

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/r1.jpg";

// const Navigation = () => {

//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // slightly longer for smooth feel
//       easing: "ease-in-out", // smoother motion curve
//       offset: 100, // triggers a bit before visible
//       delay: 50, // gentle stagger start
//       once: true, // animate only once
//       mirror: false, // disable reverse animation on scroll up
//     });

//     // Refresh AOS when images load or layout shifts
//     window.addEventListener("load", AOS.refresh);
//     return () => window.removeEventListener("load", AOS.refresh);
//   }, []);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "Initiative By", path: "/initiative" },
//     // { label: "Inspiring Stories", path: "/stories" },
//     // { label: "Achievers", path: "/achievers" },
//     // { label: "News", path: "/news" },
//     // { label: "Supporters Voice", path: "/supporters" },
//     // { label: "Gallery", path: "/gallery" },
//     // { label: "Events", path: "/events" },
//     { label: "Reach Us", path: "/contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/100 backdrop-blur-sm border-b border-gray-200">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-28">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex flex-col items-center no-underline text-inherit"
//           >
//             <img
//               src={logo}
//               alt="Respect Women Logo"
//               className="h-20 md:h-20 w-auto"
//               data-aos="zoom-in"
//             />
//             <span
//               className="mt-0. text-sm md:text-base font-semibold text-gray"
//               data-aos="fade-up"
//             >
//               # CELEBRATING HER
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`text-sm font-semibold no-underline transition-colors duration-200 ${
//                   isActive(item.path)
//                     ? "text-[#5A0FC8]"
//                     : "text-gray-800 hover:text-[#5A0FC8]"
//                 }`}
//                 data-aos="zoom-in"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X /> : <Menu />}
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden pb-4 animate-fade-in flex flex-col space-y-3">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-base md:text-lg font-semibold no-underline transition-colors duration-200 ${
//                   isActive(item.path)
//                     ? "text-[#5A0FC8]"
//                     : "text-gray-800 hover:text-[#5A0FC8]"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;