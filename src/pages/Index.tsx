import { useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const Index = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="hero" smooth={true} duration={500} className="text-xl font-bold cursor-pointer">
              Kriudtech
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="features" smooth={true} duration={500} className="text-sm font-medium hover:text-primary/80 cursor-pointer">
                Features
              </Link>
              <Link to="about" smooth={true} duration={500} className="text-sm font-medium hover:text-primary/80 cursor-pointer">
                About
              </Link>
              <Link to="pricing" smooth={true} duration={500} className="text-sm font-medium hover:text-primary/80 cursor-pointer">
                Pricing
              </Link>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none" />
        <div className="container max-w-6xl mx-auto text-center">
          <span className="inline-block animate-fade-down px-4 py-1.5 mb-6 text-sm font-medium bg-secondary rounded-full">
            Welcome to Kriudtech
          </span>
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Learn Faster. Build Better.
          </h1>
          <p className="animate-fade-up animation-delay-2000 text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Accelerate your learning journey with Kriudtech. Master new skills, build projects, and achieve your goals faster than ever.
          </p>
          <div className="animate-fade-up animation-delay-4000 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Empower Section */}
      <section className="py-24 md:m-10 lg:m-20 rounded-3xl bg-[#4A148C]">
        <div className="container max-w-8xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Empower, Enhance and Excel
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* School Management Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 relative reveal">
              <span className="text-gray-600 mb-4 block">Cloud-Based School Management Software</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Streamline your school<br />operations and enhance<br />efficiency.
              </h3>
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/833561fe-1c33-44bf-94a3-742984577e40.png" 
                  alt="School Management Dashboard" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-black rounded-full p-2">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
            
            {/* Learning Solution Card */}
            <div className="bg-[#1E1F25] rounded-3xl p-8 text-white relative reveal">
              <span className="text-gray-400 mb-4 block">Learning Management Solution</span>
              <div className="mt-24">
                <h3 className="text-3xl font-bold">
                  Education moves<br />
                  <span className="inline-block mt-4">forward.</span>
                </h3>
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                <ArrowRight className="h-6 w-6 text-black" />
              </div>
            </div>

            {/* Software Solutions Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 relative reveal">
              <span className="text-gray-600 mb-4 block">Capacity Building Programs for Teachers</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                To keep you up<br />and running.
              </h3>
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/2aca6299-fd9e-46b5-90f3-bb26b1eec2f4.png" 
                  alt="Capacity Building" 
                  className="w-48 h-auto object-contain"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-black rounded-full p-2">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Finance Section */}
      <section id="pricing" className="py-24 md:m-10 lg:m-20 rounded-3xl mt-5 bg-[#1B4D3E]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Simplify payments, insure lives<br />and assets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fee Finance Card */}
            <div className="bg-white rounded-3xl p-8 reveal">
              <h3 className="text-lg font-semibold mb-4">Fee Finance for Students</h3>
              <h4 className="text-3xl font-bold mb-8">Get all the great benefits.</h4>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#8B7355] rounded-full" />
                <div className="w-10 h-10 bg-[#8B7355] rounded-full mt-4" />
              </div>
            </div>
            {/* Insurance Card */}
            <div className="bg-[#1E1F25] rounded-3xl p-8 reveal">
              <h3 className="text-lg font-semibold text-white mb-4">
                Insurance : For Parent, Students and Assets
              </h3>
              <h4 className="text-3xl font-bold text-white mb-2">
                Good for your <span className="text-[#FFD700]">school</span>.
              </h4>
              <h4 className="text-3xl font-bold text-white mb-8">
                Good for your <span className="text-[#FFD700]">assets</span>.
              </h4>
              <img 
                src="/lovable-uploads/ac770aaf-137c-4b1e-8fde-4368e92117c4.png" 
                alt="School Bus" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Kriudtech?
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Experience a revolutionary learning platform designed to accelerate your growth and maximize your potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                </div>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="reveal bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers with Kriudtech.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-primary hover:bg-white/90"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Kriudtech</h3>
              <p className="text-sm text-foreground/60">
                Empowering learners worldwide to achieve their goals through innovative education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">About</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Terms</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Kriudtech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    title: "Hands-On Projects",
    description: "Build real projects that showcase your skills to potential employers.",
  },
  {
    title: "Flexible Learning",
    description: "Study at your own pace with our flexible learning paths.",
  },
  {
    title: "Career Support",
    description: "Get guidance and support to help you achieve your career goals.",
  },
  {
    title: "Community",
    description: "Join a community of learners and mentors who support your growth.",
  },
  {
    title: "Certification",
    description: "Earn recognized certificates to validate your expertise.",
  },
];

export default Index;
