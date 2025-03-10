import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
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
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="text-xl font-bold cursor-pointer"
            onClick={handleLinkClick}
          >
            Kiudtech
          </Link>


          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
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
           <Link to="contact">
            <Button size="sm" className="w-full">
              Contact Us
            </Button>
            </Link>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
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
            <Link
                to="contact"
            >
            <Button size="sm" className="w-full">
              Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;