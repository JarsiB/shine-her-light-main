import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Respect Women
            </h3>
            <p className="text-muted-foreground mb-4">
              Empowering women through awareness, education, and action.
              Together we create a world of respect and equality.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/initiative"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  Initiative By
                </Link>
              </li>
              <li>
                <Link
                  to="/stories"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  Inspiring Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/achievers"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  Achievers
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/news"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/supporters"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  Supporters Voice
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="no-underline text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail size={18} className="mt-1 text-primary" />
                <span>contact@respectwomen.org</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone size={18} className="mt-1 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="mt-1 text-primary" />
                <span>123 Empowerment Street, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Respect Women Campaign. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
