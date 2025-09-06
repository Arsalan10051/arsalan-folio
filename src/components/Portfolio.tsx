import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design principles.",
      tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      github: "https://github.com/arsalanhyder",
      live: "#",
      category: "Web Development"
    },
    {
      title: "E-Commerce Frontend",
      description: "A modern e-commerce frontend with product catalog, shopping cart, and responsive design for optimal user experience.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      github: "https://github.com/arsalanhyder",
      live: "#",
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "A productivity app for task management with drag-and-drop functionality, built using modern web technologies.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      github: "https://github.com/arsalanhyder",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts and beautiful data visualizations.",
      tech: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
      github: "https://github.com/arsalanhyder",
      live: "#",
      category: "JavaScript"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">My Portfolio</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent projects demonstrating skills in modern web development, 
              user interface design, and full-stack application development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-6 w-6 text-white" />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-card p-8 rounded-lg border border-border">
              <Code2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">More Projects on GitHub</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore my complete collection of projects, contributions, and code samples on GitHub. 
                Each project showcases different aspects of my development journey.
              </p>
              <Button asChild size="lg">
                <a 
                  href="https://github.com/arsalanhyder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;