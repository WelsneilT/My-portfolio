import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Kinh nghiệm <span className="hero-text">Làm việc</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hành trình phát triển chuyên môn và nghiên cứu của tôi
          </p>
        </div>

        <div className="space-y-8">
          {/* Work Experience */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">AI Intern</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="font-medium">Goline Financial Technology JSC</span>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Hanoi, Vietnam
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      6/2025 - 7/2025
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="ml-16 space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Phát triển Strategy Generator Agent sử dụng LLMs để tạo chiến lược đầu tư cá nhân hóa dựa trên hồ sơ rủi ro người dùng và phân tích dữ liệu thị trường</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Nghiên cứu xu hướng AI mới nổi trong FinTech và xây dựng chatbot hỗ trợ khách hàng</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Research Experience */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">AI in Education Research Student</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="font-medium">Dưới sự giám sát của Dr. Trần Văn Khánh (ICTU - Thai Nguyen University & FPT.AI)</span>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      11/2024 - Now
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="ml-16 space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Nghiên cứu AI hiện đại để thiết kế hệ thống multi-agent cho học tập thích ứng, lấy cảm hứng từ frameworks như ATLAS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Xây dựng scientific paper agent sử dụng LangGraph để tự động phân tích, tìm kiếm và tóm tắt các bài báo nghiên cứu phức tạp</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="text-xs">Python</Badge>
                <Badge variant="outline" className="text-xs">LangChain</Badge>
                <Badge variant="outline" className="text-xs">LangGraph</Badge>
                <Badge variant="outline" className="text-xs">LLMs</Badge>
                <Badge variant="outline" className="text-xs">PyTorch</Badge>
                <Badge variant="outline" className="text-xs">Vector Databases</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;