import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Target } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Django",
    "PyTorch", "LangChain", "LangGraph", "LLMs", "Flask",
    "Kafka", "Hadoop", "Docker", "SQLite", "PostgreSQL",
    "AI/ML", "Generative AI", "Data Science", "Full-Stack Development"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Về <span className="hero-text">Tôi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Engineer với kinh nghiệm thực tế trong phát triển hệ thống AI và ứng dụng thông minh
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Background Card */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Tôi là Tống Duy Tân, AI Engineer và sinh viên chuyên ngành Trí tuệ Nhân tạo 
                tại Đại học Công nghệ, ĐHQGHN. Với kinh nghiệm thực tế tại Goline Financial 
                Technology JSC và các dự án nghiên cứu AI, tôi sẵn sàng đóng góp vào các dự án 
                công nghệ tiên tiến.
              </p>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Đại học Công nghệ, ĐHQGHN</h3>
                <p className="text-muted-foreground">Cử nhân Trí tuệ Nhân tạo</p>
                <p className="text-sm text-muted-foreground">GPA: 3.21/4.00 | 2022 - Hiện tại</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Chuyên sâu về AI/ML, phát triển hệ thống thông minh, 
                và ứng dụng công nghệ trong thực tiễn.
              </p>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Career Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Tìm kiếm cơ hội ứng dụng kỹ năng AI/ML trong môi trường làm việc 
                năng động. Mong muốn đóng góp vào các dự án đổi mới công nghệ 
                và phát triển nghề nghiệp bền vững.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Kỹ năng Công nghệ</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;