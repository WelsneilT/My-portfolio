import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, User, Target, CheckCircle, Mail, Download, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: "🤖",
      title: "Automated Scientific Review Process",
      description: "Tự động hóa 80% quy trình tổng quan tài liệu khoa học, tiết kiệm hàng giờ nghiên cứu thủ công bằng cách sử dụng LangGraph agents."
    },
    {
      icon: "💰",
      title: "AI Strategy Generator Agent",
      description: "Phát triển hệ thống AI cung cấp chiến lược đầu tư cá nhân hóa, giúp người dùng đưa ra quyết định tài chính thông minh."
    },
    {
      icon: "🎯",
      title: "Interactive Prediction Platform",
      description: "Xây dựng nền tảng web tương tác hỗ trợ cả dự đoán trực tuyến và batch, phục vụ đa dạng nhu cầu người dùng."
    },
    {
      icon: "🏆",
      title: "FinTech Research Excellence",
      description: "Ứng dụng nghiên cứu AI trong lĩnh vực FinTech thông qua các cuộc thi nội bộ, đạt được những thành tựu đáng ghi nhận."
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "C/C++", "Java", "HTML/CSS"] },
    { category: "AI & Machine Learning", items: ["PyTorch", "LangChain", "LangGraph", "LLMs", "Diffusers", "TTS", "Knowledge Distillation", "WGANs"] },
    { category: "Backend & Databases", items: ["Django", "Flask", "Celery", "Redis", "PostgreSQL", "SQLite", "HBase"] },
    { category: "Frontend & Tools", items: ["React", "JavaScript", "HTML5", "CSS3", "Docker"] },
    { category: "Big Data & Analytics", items: ["Apache Kafka", "Hadoop", "Power BI", "Pandas", "NumPy"] }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="hero-text">Bridging Research and Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kiến tạo Trí tuệ, Đem lại Giá trị - Chuyển đổi những nghiên cứu chuyên sâu thành các giải pháp công nghệ có giá trị thực tiễn.
          </p>
        </div>

        {/* Asymmetrical 2-Column Layout */}
        <div className="grid lg:grid-cols-5 gap-16 items-start relative">
          {/* Left Column - 40% width (Personal Focus) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Photo with Enhanced Design */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-transform duration-700 opacity-75"></div>
                
                {/* Main Photo Container */}
                <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm p-3 rounded-3xl border-2 border-primary/20 shadow-2xl group-hover:shadow-primary/40 transition-all duration-500 group-hover:border-primary/40">
                  <div className="w-80 h-96 overflow-hidden rounded-2xl relative">
                    <img 
                      src="/lovable-uploads/5ccaa63b-23b8-4a00-a482-44838fdebc0a.png" 
                      alt="Professional photo of Tong Duy Tan"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Enhanced Floating Tags */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-2xl text-lg font-bold shadow-2xl animate-fade-in border border-primary/30">
                  AI Engineer
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-accent via-accent to-accent/80 text-accent-foreground px-6 py-3 rounded-2xl text-lg font-bold shadow-2xl animate-fade-in border border-accent/30" style={{animationDelay: '0.5s'}}>
                  UET Graduate
                </div>
              </div>
            </div>

            {/* Personal Introduction */}
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                Hello, I'm <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tong Duy Tan</span>
              </h3>
              
              {/* Elevator Pitch */}
              <div className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-2xl border border-border/30">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Tôi là một <span className="text-primary font-semibold">Kỹ sư AI</span> với đam mê biến những nghiên cứu chuyên sâu thành các 
                  <span className="text-accent font-semibold"> giải pháp công nghệ có giá trị thực tiễn</span>. 
                  Tôi tập trung vào việc ứng dụng <span className="text-primary font-semibold">Generative AI</span> để giải quyết 
                  các bài toán thách thức trong lĩnh vực <span className="text-accent font-semibold">FinTech và EdTech</span>.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2 text-lg font-semibold px-8 py-4">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </Button>
                <Button variant="outline" size="lg" className="gap-2 text-lg font-semibold px-8 py-4">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <Github className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <Linkedin className="w-6 h-6" />
                </Button>
              </div>

              {/* Education Info */}
              <div className="mt-8 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/30">
                <div className="text-sm text-muted-foreground">Currently at</div>
                <div className="font-bold text-foreground">UET University of Engineering and Technology</div>
                <div className="text-sm text-muted-foreground">Bachelor's Degree in Artificial Intelligence</div>
                <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary border-primary/20">
                  GPA: 3.21/4.00
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column - 60% width (Achievements & Proof) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground flex items-center gap-4">
                <div className="w-2 h-12 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                Key Achievements
              </h3>
              <p className="text-lg text-muted-foreground">
                Những bằng chứng cụ thể về năng lực và tác động của tôi trong lĩnh vực AI
              </p>
            </div>

            {/* Achievement Cards Grid */}
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                        {achievement.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <h4 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-32 space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Tech Stack & <span className="hero-text">Expertise</span>
            </h3>
            <p className="text-muted-foreground">
              Technologies I use to build intelligent solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="tech-card p-6">
                <h4 className="font-semibold text-lg mb-4 text-foreground">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;