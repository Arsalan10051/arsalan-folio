import { Code, Palette, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern websites using React, Node.js, and cutting-edge technologies for optimal performance and user experience.",
      features: ["React Applications", "Node.js Backend", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "Portfolio Creation",
      description: "Helping professionals and businesses showcase their work with stunning, professional portfolio websites that make lasting impressions.",
      features: ["Custom Design", "Professional Layout", "SEO Optimized", "Mobile Friendly"]
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Creating intuitive user interfaces with modern frameworks, focusing on accessibility, performance, and beautiful user experiences.",
      features: ["Modern UI/UX", "Cross-browser Support", "Interactive Elements", "Accessibility First"]
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end web solutions combining frontend excellence with robust backend architecture for complete digital experiences.",
      features: ["Database Design", "API Development", "Authentication", "Cloud Deployment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Offering comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mr-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's work together to create something amazing. I'm committed to delivering 
                high-quality solutions that exceed expectations.
              </p>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;