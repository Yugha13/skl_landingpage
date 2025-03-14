import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFreeButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowForm(false);
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center px-4 pt-16"
      style={{
        backgroundImage: "url('/uploads/mac.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none" />
      <div className="container max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <button 
            onClick={handleFreeButtonClick}
            className="animate-fade-down text-sm font-medium px-4 py-1.5 bg-yellow-200 text-orange-600 rounded-full shadow-md hover:bg-yellow-300 transition-colors"
          >
            FREE: Reserve Your Complimentary Testimonial Today! →
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Reserve Your Free Testimonial</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  placeholder="School Name"
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  placeholder="Address"
                  required
                  className="w-full"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full"
                />
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
            Powering Education in the Clouds
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            "Take your school to Smart Schools, Seamless Management – Effortlessly Powering Education in the Cloud!"
          </p>
        </div>
        <div className="animate-fade-up animation-delay-4000 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="contact">
            <Button size="lg" className="group">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
