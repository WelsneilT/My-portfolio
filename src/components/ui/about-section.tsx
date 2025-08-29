import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Target, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    "Led development of Strategy Generator Agent - AI system providing personalized investment strategies",
    "Automated 80% of scientific literature review process using LangGraph agents",
    "Built interactive web applications for both online and batch predictions",
    "Applied research on AI in FinTech by participating in internal competitions"
  ];

  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "C/C++", "Java", "HTML/CSS"] },
    { category: "AI & Machine Learning", items: ["PyTorch", "LangChain", "LangGraph", "LLMs", "Diffusers", "TTS", "Knowledge Distillation", "WGANs"] },
    { category: "Backend & Databases", items: ["Django", "Flask", "Celery", "Redis", "PostgreSQL", "SQLite", "HBase"] },
    { category: "Frontend & Tools", items: ["React", "JavaScript", "HTML5", "CSS3", "Docker"] },
    { category: "Big Data & Analytics", items: ["Apache Kafka", "Hadoop", "Power BI", "Pandas", "NumPy"] }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            A Product-Minded <span className="hero-text">AI Engineer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Starting my journey at the prestigious Kim Lien High School and now pursuing my degree 
            in Artificial Intelligence at VNU-UET, I bridge the gap between cutting-edge research and 
            practical, industry-ready solutions.
          </p>
        </div>

        <div className="relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Professional Photo with Enhanced Design */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Floating Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Main Photo Container */}
                <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm p-2 rounded-2xl border border-border/50 shadow-2xl group-hover:shadow-primary/25 transition-all duration-500">
                  <div className="w-80 h-96 overflow-hidden rounded-xl relative">
                    <img 
                      src="/lovable-uploads/5ccaa63b-23b8-4a00-a482-44838fdebc0a.png" 
                      alt="Professional photo of Tong Tan"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-lg animate-fade-in">
                  AI Engineer
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
                  3.21 GPA
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="space-y-8">
              {/* Introduction Text with Better Typography */}
              <div className="space-y-6">
                <div className="relative">
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    My experience at <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">Goline Financial Technology JSC</span> and 
                    research collaboration with <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-lg">FPT.AI</span> have shaped my passion: 
                    leveraging Generative AI and deep learning models to solve real-world challenges in FinTech and EdTech.
                  </p>
                </div>

                {/* Key Achievements with Stagger Animation */}
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    Key Achievements
                  </h3>
                  <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group animate-fade-in"
                        style={{animationDelay: `${index * 0.2}s`}}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Education & Goals Cards */}
              <div className="grid gap-6">
                <Card className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <CardTitle className="flex items-center gap-4 text-xl lg:text-2xl">
                      <div className="p-3 bg-gradient-to-br from-primary to-primary/70 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <div className="space-y-3">
                      <h3 className="font-bold text-foreground text-lg">UET University of Engineering and Technology</h3>
                      <p className="text-muted-foreground text-base">Bachelor's Degree in Artificial Intelligence</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-medium">
                          GPA: 3.21/4.00
                        </Badge>
                        <Badge variant="outline" className="border-accent/20 text-accent">
                          2022 - Present
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/20 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <CardTitle className="flex items-center gap-4 text-xl lg:text-2xl">
                      <div className="p-3 bg-gradient-to-br from-accent to-accent/70 rounded-xl">
                        <Target className="w-6 h-6 text-accent-foreground" />
                      </div>
                      Career Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      Seeking opportunities to apply AI/ML skills in dynamic environments. 
                      Eager to contribute to innovative technology projects and sustainable career development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Tech Stack & <span className="hero-text">Expertise</span>
            </h3>
            <p className="text-muted-foreground">
              Technologies I use to build intelligent solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="tech-card p-6">
                <h4 className="font-semibold text-lg mb-4 text-foreground">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;