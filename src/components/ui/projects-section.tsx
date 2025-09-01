import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Storybook & Podcast Producer",
      period: "6/2025 - 7/2025",
      description: "Automated multi-modal children's content production with full-stack platform transforming story prompts into complete illustrated storybook and podcast using LLMs, Image Diffusion, and TTS.",
      technologies: ["Python", "Django", "Celery", "Redis", "LLMs", "Diffusers", "TTS", "JavaScript"],
      type: "Generative AI & Full-Stack Systems",
      githubUrl: "https://github.com/WelsneilT/AI-Podcast-Producer"
    },
    {
      title: "Lightweight GANs for Medical Imaging", 
      period: "4/2025 - 5/2025",
      description: "Designed lightweight GAN architecture to efficiently generate high-quality medical images using Teacher-Student Knowledge Distillation framework, reducing computational costs by 73.5M parameters while maintaining 91% accuracy.",
      technologies: ["Python", "PyTorch", "WGANs", "Knowledge Distillation", "ResNet", "NTU Dataset"],
      type: "Deep Learning & Data Science",
      githubUrl: "https://www.kaggle.com/code/welsneil/mri-lightweighted-gan"
    },
    {
      title: "Churn Prediction and Analysis",
      period: "2/2025 - 4/2025",
      description: "Developed comprehensive churn prediction system with novel features from Survival Analysis for accurate customer churn forecasting and actionable retention insights using CatBoost and ensemble forecasting methods.",
      technologies: ["Python", "R", "Django", "CatBoost", "Survival Analysis", "AFT Models", "SQL"],
      type: "Deep Learning & Data Science", 
      githubUrl: "https://github.com/WelsneilT/AI-Churn-Prediction"
    },
    {
      title: "Real-time Smartphone Price Prediction",
      period: "8/2024 - 11/2024",
      description: "Engineered scalable big data system for processing high-velocity streaming data with Apache Kafka, ensuring both real-time processing and robust storage using Hadoop with Flask web application for interactive predictions.",
      technologies: ["Python", "Apache Kafka", "Hadoop", "HBase", "Flask", "Power BI", "REST APIs"],
      type: "Web & Data Engineering",
      githubUrl: "https://github.com/WelsneilT/Big-Data-Project"
    },
    {
      title: "Online Bookstore",
      period: "4/2024 - 7/2024",
      description: "Developed full-stack e-commerce platform with comprehensive user management, inventory system, and secure transaction processing using Django framework and SQLite database.",
      technologies: ["Python", "Django", "Docker", "SQLiteStudio", "JavaScript"],
      type: "Web & Data Engineering",
      githubUrl: "https://github.com/WelsneilT/Online-Bookstore"
    }
  ];

  const heroProject = projects[0]; // AI Storybook & Podcast Producer
  const secondaryProjects = projects.slice(1, 3); // GANs và Churn Prediction

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="hero-text bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From research to reality - Discover AI projects with real-world impact
          </p>
        </div>

        {/* Layout 1 + 2: Hero Project + Secondary Projects */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Hero Project - Left Side (50%) */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-3xl hover:shadow-primary/20 min-h-[800px] flex flex-col">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            
            {/* Hero Badge */}
            <div className="absolute top-6 left-6 z-20">
              <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-lg font-bold shadow-lg border-0">
                ⭐ Featured Project
              </Badge>
            </div>

            <CardHeader className="pb-8 relative z-10 pt-20">
              <div className="space-y-6">
                <CardTitle className="text-4xl lg:text-5xl font-bold leading-tight group-hover:text-primary transition-colors duration-500">
                  {heroProject.title}
                </CardTitle>
                
                <div className="flex items-center gap-3 text-lg text-muted-foreground">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="font-semibold">{heroProject.period}</span>
                </div>

                <Badge variant="secondary" className="text-lg px-6 py-3 font-bold bg-accent/10 text-accent border-accent/20 w-fit">
                  {heroProject.type}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10 flex-1 flex flex-col">
              {/* Problem-Solution-Impact Description */}
              <div className="space-y-6 flex-1">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-red-400">Problem:</span>
                      <span className="text-muted-foreground ml-2">Creating engaging and educational stories for children often requires significant time and cost.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-primary">Solution:</span>
                      <span className="text-muted-foreground ml-2">Developed a platform to fully automate the process, from idea generation to the final story and podcast, utilizing LLMs, Image Diffusion, and TTS.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-green-400">Impact:</span>
                      <span className="text-muted-foreground ml-2">Helped create quality educational content 10 times faster with professional-grade quality.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {heroProject.technologies.slice(0, 8).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-base px-4 py-2 bg-background/80 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-6">
                <Button 
                  size="lg" 
                  className="gap-3 text-lg font-bold py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group/btn"
                  onClick={() => window.open(heroProject.githubUrl, '_blank')}
                >
                  <Github className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                  View Case Study
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-3 text-lg font-bold py-6 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 group/btn"
                >
                  <ExternalLink className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Projects - Right Side (50%) */}
          <div className="space-y-8">
            {secondaryProjects.map((project, index) => (
              <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/20 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 min-h-[380px] flex flex-col">
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <Badge variant="secondary" className="text-sm px-3 py-1 font-semibold bg-accent/10 text-accent border-accent/20 flex-shrink-0">
                      {project.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{project.period}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10 flex-1 flex flex-col">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed flex-1">
                    {index === 0 ? 
                      "Successfully designed a lightweight GAN architecture, reducing 72.5 million parameters while maintaining 91% accuracy for medical imaging tasks." :
                      "Developed a customer churn prediction system with various survival analysis capabilities, helping to devise effective customer retention strategies."
                    }
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-sm px-3 py-1 bg-background/50 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-sm px-3 py-1 bg-background/50">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="gap-2 flex-1 text-sm font-semibold group/btn hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      {project.githubUrl.includes('kaggle') ? 'Kaggle' : 'GitHub'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 flex-1 text-sm font-semibold hover:bg-accent/5 hover:border-accent/30 hover:text-accent transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;