import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { Menu, X, Phone, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { to: "features", label: "Features" },
    { to: "about", label: "About" },
    { to: "pricing", label: "Pricing" },
    { to: "contact", label: "Contact Us" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center gap-4 mr-8">
            <Instagram className="h-5 w-5 cursor-pointer text-pink-500" />
            <Twitter className="h-5 w-5 cursor-pointer text-blue-500" />
          </div>

          {/* Kiudtech Logo */}
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="text-xl font-bold cursor-pointer"
            onClick={handleLinkClick}
          >
            Kiudtech
          </Link>

          {/* Centered Menu Items */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-primary/80 cursor-pointer"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right End: WhatsApp Contact */}
          <div className="hidden md:flex items-center gap-3">
            <Phone className="h-5 w-5 text-green-500" />
            <span className="text-sm">+91-85953-89881</span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:hidden transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="flex flex-col gap-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-primary/80 cursor-pointer"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile Contact Number */}
            <div className="flex items-center gap-3 pt-2">
              <Phone className="h-5 w-5 text-green-500" />
              <span className="text-sm">+91-85953-89881</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
