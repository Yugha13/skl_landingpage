import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const Hero = () => {
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
          <span className="inline-block animate-fade-down px-4 py-1.5 mb-6 text-sm font-medium bg-secondary rounded-full">
            Welcome to Kiudtech
          </span>
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
            Learn Faster. Build Better.
          </h1>
          <p className="animate-fade-up animation-delay-2000 text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Accelerate your learning journey with Kiudtech. Master new skills, build projects, and achieve your goals faster than ever.
          </p>
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

export default Hero