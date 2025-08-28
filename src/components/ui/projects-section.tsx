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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="hero-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some AI and system development projects I have completed
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="section-gradient card-hover border-border/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    {project.githubUrl.includes('kaggle') ? 'Kaggle' : 'Code'}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </Button>
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