import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, User, Target, CheckCircle, Mail, Download, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  const principles = [
    {
      icon: "⟷",
      title: "From Research to Reality",
      description: "I thrive on translating complex, state-of-the-art research into practical, functional systems. My work begins where the academic paper ends, focusing on building robust and scalable implementations."
    },
    {
      icon: "⚡",
      title: "Product-Minded Engineering",
      description: "Technology is a tool to solve a human problem. I prioritize understanding the end-user and the business context, ensuring that every line of code contributes to a valuable and impactful final product."
    },
    {
      icon: "🎯",
      title: "Specialized Domain Focus",
      description: "I believe in the power of deep, focused expertise. My energy and learning are concentrated on applying AI to create meaningful advancements in Education Technology (EdTech) and Financial Technology (FinTech)."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-7xl">
        {/* Asymmetrical 2-Column Layout */}
        <div className="grid lg:grid-cols-5 gap-16 items-start relative">
          {/* Left Column - 40% width (Identity) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-64 h-64 rounded-full overflow-hidden relative border-4 border-background shadow-2xl group-hover:shadow-accent/20 transition-all duration-500">
                  <img 
                    src="/lovable-uploads/5ccaa63b-23b8-4a00-a482-44838fdebc0a.png" 
                    alt="Professional photo of Tong Duy Tan"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>
                {/* Hover Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500 shadow-lg"></div>
              </div>
            </div>

            {/* Identity Section */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  Tong Duy Tan
                </h1>
                <h2 className="text-xl lg:text-2xl text-accent font-medium">
                  AI Engineer
                </h2>
              </div>
              
              {/* Professional Summary */}
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  I am an AI Engineer driven to bridge the gap between advanced AI research and tangible, real-world applications. My passion lies in leveraging this approach to tackle meaningful challenges, with a core focus on innovating within the EdTech and FinTech sectors.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center lg:justify-start">
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-10 h-10"
                  onClick={() => window.open('https://www.linkedin.com/in/duy-t%C3%A2n-t%E1%BB%91ng-571bb7365/', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - 60% width (Philosophy) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                My Approach
              </h3>
            </div>

            {/* Principle Cards */}
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <Card 
                  key={index} 
                  className="group p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-xl text-accent flex-shrink-0 border border-accent/20">
                      {principle.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {principle.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Languages Section */}
            <div className="mt-12 p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-border/30">
              <h4 className="text-lg font-semibold text-foreground mb-4">Languages</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-accent">IELTS 6.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Japanese</span>
                  <span className="text-accent">JLPT N4 (Pursuing N3)</span>
                </div>
                <div className="flex justify-between">
                  <span>Vietnamese</span>
                  <span className="text-accent">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;