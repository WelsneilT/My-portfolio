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

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/20 hover:border-primary/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-sm px-3 py-1.5 font-medium bg-primary/10 text-primary border-primary/20">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 mb-3">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed min-h-[120px]">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-sm px-3 py-1.5 bg-background/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 6 && (
                      <Badge variant="outline" className="text-sm px-3 py-1.5 bg-background/50">
                        +{project.technologies.length - 6}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="gap-3 flex-1 text-base font-medium group/btn hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      {project.githubUrl.includes('kaggle') ? 'Kaggle' : 'View Code'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="gap-3 flex-1 text-base font-medium hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
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