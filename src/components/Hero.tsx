import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Arsalan Hyder Abbasi
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-accent">
            Aspiring AI Programmer & Web Developer
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Passionate about building modern web solutions and exploring AI programming. 
            Dedicated to creating innovative digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("portfolio")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg teal-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/Arsalan10051" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:Arsalanabbasi507@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;