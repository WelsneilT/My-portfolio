import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Target } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Python", "Java", "Git", "Database Design",
    "Problem Solving", "Team Collaboration"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="hero-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A dedicated engineering student with a passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Background Card */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm Duy Tan, an ambitious engineering student at the University of Engineering 
                and Technology (UET). With a strong foundation in technology and a drive for 
                continuous learning, I'm ready to contribute to innovative projects.
              </p>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">University of Engineering and Technology</h3>
                <p className="text-muted-foreground">Bachelor's Degree in Engineering</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2024</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Focused on modern engineering practices, software development, 
                and technological innovation.
              </p>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Career Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Seeking opportunities to apply my technical skills in a dynamic 
                work environment. Eager to contribute to innovative projects while 
                continuing to grow professionally.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;