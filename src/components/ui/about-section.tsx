import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Target, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    "Contributed to a 20% improvement in risk profile personalization accuracy",
    "Automated 80% of the scientific literature review process for research projects", 
    "Engineered and deployed 5+ end-to-end AI/ML projects from concept to production"
  ];

  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "R"] },
    { category: "AI/ML", items: ["PyTorch", "LangChain", "LLMs", "Diffusers", "Scikit-learn"] },
    { category: "Backend & Full-Stack", items: ["Django", "Flask", "Node.js", "Celery"] },
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3"] },
    { category: "Data & DevOps", items: ["Kafka", "Hadoop", "Docker", "PostgreSQL", "Redis"] }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            A Product-Minded <span className="hero-text">AI Engineer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kicking off my journey at the prestigious Kim Lien High School and now honing my expertise 
            in Artificial Intelligence at VNU-UET, I bridge the gap between deep academic theory and 
            practical, impactful applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Professional Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="gradient-border">
              <div className="w-80 h-96 bg-gradient-to-br from-card via-card to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                    <User className="w-16 h-16 text-primary" />
                  </div>
                  <div className="text-muted-foreground">
                    Professional Photo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My experiences at <span className="text-primary font-semibold">Goline Financial Technology</span> and 
                <span className="text-primary font-semibold"> FPT.AI</span> have solidified my career goal: to leverage 
                Generative AI and deep learning models to solve complex challenges in FinTech and EdTech.
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