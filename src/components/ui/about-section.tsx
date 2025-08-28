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

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="gradient-border">
              <div className="w-80 h-96 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/5ccaa63b-23b8-4a00-a482-44838fdebc0a.png" 
                  alt="Professional photo of Tong Tan"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My experience at <span className="text-primary font-semibold">Goline Financial Technology JSC</span> and 
                research collaboration with <span className="text-primary font-semibold">FPT.AI</span> have shaped my passion: 
                leveraging Generative AI and deep learning models to solve real-world challenges in FinTech and EdTech.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Key Achievements</h3>
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Goals Cards */}
            <div className="grid gap-6">
              <Card className="section-gradient card-hover border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">VNU University of Engineering and Technology</h3>
                    <p className="text-muted-foreground">Bachelor's Degree in Artificial Intelligence</p>
                    <p className="text-sm text-accent">GPA: 3.21/4.00 | 2022 - Present</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="section-gradient card-hover border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Career Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking opportunities to apply AI/ML skills in dynamic environments. 
                    Eager to contribute to innovative technology projects and sustainable career development.
                  </p>
                </CardContent>
              </Card>
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