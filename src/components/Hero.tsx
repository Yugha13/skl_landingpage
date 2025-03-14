import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 w-full max-w-3xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Reserve Your Free Testimonial</h2>
              <p className="text-gray-600 mb-8">Fill out the form below to claim your complimentary testimonial spot. Our team will contact you shortly to schedule the session.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="school" className="text-sm font-medium">School Name</Label>
                    <Input
                      id="school"
                      type="text"
                      placeholder="St. Mary's School"
                      required
                      className="w-full h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="w-full h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">School Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete school address"
                    required
                    className="w-full min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your school and what you're looking for..."
                    className="w-full min-h-[100px]"
                  />
                </div>

                <div className="flex gap-4 justify-end pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setShowForm(false)}
                    className="px-8"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    size="lg"
                    className="px-8"
                  >
                    Submit Request
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
