import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, Github, Linkedin, ChevronDown } from "lucide-react";
import PlexusBackground from "@/components/ui/plexus-background";

const HeroSection = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTypingComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" style={{ backgroundColor: '#0d1a2d' }}>
      {/* Animated Plexus Background */}
      <PlexusBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Mobile: Single column centered layout, Desktop: Two column grid */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 xl:gap-10 items-center xl:items-start">
          {/* Text Content */}
          <div className="space-y-6 xl:space-y-8 text-center xl:text-left w-full">
            <div className="space-y-4">
              <div className="flex justify-center xl:justify-start">
                <Badge variant="secondary" className="w-fit bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                  Available for Opportunities
                </Badge>
              </div>
              <h1 className="text-xl xl:text-2xl text-gray-300 font-medium mb-4">
                Hello, I'm
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-white break-words">
                <span className="typewriter hero-text bg-gradient-to-r from-cyan-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">Tong Duy Tan</span>
              </h2>
              <p className="text-lg xl:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto xl:mx-0">
                AI Engineer | Student at UET University of Engineering and Technology
                specializing in Artificial Intelligence and intelligent system development.
              </p>
            </div>
            
            <div className="flex justify-center xl:justify-start">
              <Button 
                size="lg" 
                className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                onClick={() => window.open('mailto:td.tan2711@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center xl:justify-start">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/30"
                onClick={() => window.open('https://github.com/WelsneilT', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/30"
                onClick={() => window.open('https://www.linkedin.com/in/duy-t%C3%A2n-t%E1%BB%91ng-571bb7365/', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="flex justify-center xl:justify-end mt-8 xl:mt-0 w-full">
            <Card className="p-6 xl:p-8 bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-cyan-500/10 w-full max-w-sm xl:max-w-md">
               <div className="grid grid-cols-2 gap-6 xl:gap-8 text-center">
                <div>
                  <div className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">UET</div>
                  <div className="text-xs xl:text-sm text-gray-400">University</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">AI</div>
                  <div className="text-xs xl:text-sm text-gray-400">Major</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">3.21</div>
                  <div className="text-xs xl:text-sm text-gray-400">GPA</div>
                </div>
                <div>
                  <div className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">Ready</div>
                  <div className="text-xs xl:text-sm text-gray-400">For Work</div>
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