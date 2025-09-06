import profileImg from "@/assets/profile-new.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Hi, I'm Arsalan Hyder Abbasi.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                I am a dedicated and aspiring AI programmer and web developer, equipped with a solid foundation from my secondary education and currently advancing my skills at <strong className="text-foreground">Aptech Pakistan</strong>.
              </p>

              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                My journey in technology is fueled by a deep passion for creating intelligent systems and modern, responsive web solutions. I am proficient in leveraging cutting-edge technologies like React, Node.js, and Python to build efficient and user-focused applications.
              </p>

              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Looking ahead, I am actively preparing for an international career by currently studying the German language. My goal is to pursue higher education in Germany, immersing myself in its renowned tech industry and innovation ecosystem.
              </p>

              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                I am constantly seeking new challenges to expand my skill set and contribute to meaningful technological advancements.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">Secondary Completed</p>
                  <p className="text-muted-foreground">Currently at Aptech</p>
                  <p className="text-muted-foreground">Soon: Universität Hamburg</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Focus</h3>
                  <p className="text-muted-foreground">Web Development ✓</p>
                  <p className="text-muted-foreground">App Development ✓</p>
                  <p className="text-muted-foreground">Game Development ✓</p>
                  <p className="text-muted-foreground">AI Learning</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 text-center">
              <div className="relative inline-block">
                <img 
                  src={profileImg} 
                  alt="Arsalan Hyder Abbasi - AI Programmer & Web Developer" 
                  className="w-80 h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;