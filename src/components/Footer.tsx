import { Link } from "react-scroll";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Solutions Column */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Cloud-Based School Management Software</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Comprehensive Learning Management System</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Student Fee Financing Solutions</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Insurance Coverage for Parents, Students, and Institutional Assets</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Digital Marketing and Branding Solutions</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Website Development</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Professional Development Programs for Educators</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Strategic Management Consultancy Services</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">App Development</Link></li>
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Logo Designing</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-gray-700 hover:text-gray-900">Home</Link></li>
              <li><Link to="features" key="features" className="text-sm text-gray-700 hover:text-gray-900">Features</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-700 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-700 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-700 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link to="/refund" className="text-sm text-gray-700 hover:text-gray-900">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Office No. 01<sup>nd</sup> dandoli,<br />
                post chilkana,<br />
                saharanpur uttar-prades india 247231
              </p>
              
              <p className="text-sm text-gray-700">
                Email: <a href="mailto:kiudtech01@gmail.com" className="hover:text-gray-900">kiudtech01@gmail.com</a>
              </p>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-700 font-medium">Get in Touch:</p>
                <p className="text-sm text-gray-700">+91-8595389881</p>
                <p className="text-sm text-gray-700">Tech & Sales Support</p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
