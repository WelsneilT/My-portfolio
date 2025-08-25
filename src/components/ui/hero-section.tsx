import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Available for Opportunities
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm{" "}
                <span className="hero-text">Duy Tan</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Engineering Student from University of Engineering and Technology (UET)
                passionate about technology and innovation.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
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
                  <div className="text-3xl font-bold hero-text">2024</div>
                  <div className="text-sm text-muted-foreground">Class of</div>
                </div>
                <div>
                  <div className="text-3xl font-bold hero-text">Tech</div>
                  <div className="text-sm text-muted-foreground">Focus</div>
                </div>
                <div>
                  <div className="text-3xl font-bold hero-text">Ready</div>
                  <div className="text-sm text-muted-foreground">To Work</div>
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