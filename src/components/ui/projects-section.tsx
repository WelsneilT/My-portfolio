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

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="hero-text bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Some AI and system development projects I have completed
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/20 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:shadow-primary/15 min-h-[700px] flex flex-col">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="pb-8 relative z-10 flex-shrink-0">
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-base px-4 py-2 font-semibold bg-primary/10 text-primary border-primary/20 whitespace-nowrap">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-base text-muted-foreground bg-muted/50 px-4 py-2 rounded-full w-fit">
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap font-medium">{project.period}</span>
                  </div>
                </div>
                <CardTitle className="text-3xl lg:text-4xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 mb-4">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-8 relative z-10 flex-1 flex flex-col">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-6 flex-shrink-0">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-base px-4 py-2 bg-background/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 6 && (
                      <Badge variant="outline" className="text-base px-4 py-2 bg-background/50 font-medium">
                        +{project.technologies.length - 6}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="gap-3 flex-1 text-lg font-semibold py-4 group/btn hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                      {project.githubUrl.includes('kaggle') ? 'Kaggle' : 'View Code'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="gap-3 flex-1 text-lg font-semibold py-4 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;