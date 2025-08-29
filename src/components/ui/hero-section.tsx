import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, Github, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTypingComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Available for Opportunities
              </Badge>
              <h1 className="text-2xl text-muted-foreground font-medium mb-4">
                Hello, I'm
              </h1>
              <h2 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="typewriter hero-text">Tong Duy Tan</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI Engineer | Student at UET University of Engineering and Technology
                specializing in Artificial Intelligence and intelligent system development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('mailto:td.tan2711@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="flex justify-center">
            <Card className="p-8 section-gradient card-hover border-border/50">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold hero-text">UET</div>
                  <div className="text-sm text-muted-foreground">University</div>
                </div>
                <div>
                  <div className="text-3xl font-bold hero-text">AI</div>
                  <div className="text-sm text-muted-foreground">Major</div>
                </div>
                <div>
                  <div className="text-3xl font-bold hero-text">3.21</div>
                  <div className="text-sm text-muted-foreground">GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold hero-text">Ready</div>
                  <div className="text-sm text-muted-foreground">For Work</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;