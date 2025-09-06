import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "React", level: 80, color: "bg-blue-500" },
    { name: "Node.js", level: 75, color: "bg-green-500" },
    { name: "Python", level: 60, color: "bg-purple-500" },
    { name: "Git/GitHub", level: 85, color: "bg-gray-600" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuously developing expertise in modern web technologies and programming languages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out ${isVisible ? '' : 'w-0'}`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">React, HTML5, CSS3, JavaScript</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Express.js</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Learning</h4>
                <p className="text-sm text-muted-foreground">Python, AI/ML, German</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                <p className="text-sm text-muted-foreground">Git, VS Code, GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;