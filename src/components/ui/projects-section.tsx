import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Storybook & Podcast Producer",
      period: "6/2025 - 7/2025",
      description: "Phát triển nền tảng full-stack tự động tạo sách truyện minh họa và podcast cho trẻ em, sử dụng pipeline AI đa mô thức (LLM, Diffusion, TTS).",
      technologies: ["Python", "Django", "Celery", "Redis", "LLMs", "Diffusers", "TTS", "JavaScript"],
      type: "Generative AI & Full-Stack Systems"
    },
    {
      title: "Online Bookstore",
      period: "4/2024 - 7/2024", 
      description: "Phát triển nền tảng thương mại điện tử full-stack, quản lý frontend, backend và cơ sở dữ liệu người dùng sử dụng Django và SQLite.",
      technologies: ["Python", "Django", "Docker", "SQLiteStudio", "JavaScript"],
      type: "Web & Data Engineering"
    },
    {
      title: "Real-time Smartphone Price Prediction",
      period: "8/2024 - 11/2024",
      description: "Thiết kế hệ thống big data cung cấp dự đoán giá thời gian thực, xử lý dữ liệu streaming với Kafka và Hadoop, trực quan hóa insights trên Flask web app.",
      technologies: ["Python", "Apache Kafka", "Hadoop", "HBase", "Flask", "Power BI"],
      type: "Deep Learning & Data Science"
    },
    {
      title: "Lightweight GANs for Medical Imaging",
      period: "2/2025 - 5/2025",
      description: "Thiết kế lightweight GAN để tạo ra hình ảnh y tế chất lượng cao với chi phí thấp, triển khai Teacher-Student Knowledge Distillation framework.",
      technologies: ["Python", "PyTorch", "WGANs"],
      type: "Deep Learning & Data Science"
    },
    {
      title: "Churn Prediction and Analysis",
      period: "2/2025 - 4/2025",
      description: "Phát triển hệ thống chủ động xác định và giữ chân khách hàng có nguy cơ rời bỏ, áp dụng Machine Learning và Survival Analysis.",
      technologies: ["Python", "R", "Django"],
      type: "Deep Learning & Data Science"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Dự án <span className="hero-text">Nổi bật</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Một số dự án AI và phát triển hệ thống tôi đã thực hiện
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
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Chi tiết
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