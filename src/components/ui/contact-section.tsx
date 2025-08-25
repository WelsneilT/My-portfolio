import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Kết nối <span className="hero-text">cùng tôi</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sẵn sàng thảo luận cơ hội và hiện thực hóa ý tưởng
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle>Liên hệ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">td.tan2711@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">0327728199</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">25/89 Thịnh Quang, Đống Đa, HN</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Kết nối qua mạng xã hội:
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Card */}
          <Card className="section-gradient card-hover border-border/50">
            <CardHeader>
              <CardTitle>Tình trạng hiện tại</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tình trạng</span>
                  <Badge className="bg-green-500/10 text-green-400 hover:bg-green-500/20">
                    Sẵn sàng làm việc
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Thời gian phản hồi</span>
                  <Badge variant="secondary">Trong vòng 24h</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Liên hệ ưa thích</span>
                  <Badge variant="outline">Email</Badge>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Tôi đang tích cực tìm kiếm cơ hội mới và mong muốn thảo luận về cách 
                  đóng góp vào sự thành công của đội ngũ.
                </p>
                <Button className="w-full gap-2">
                  <Mail className="w-4 h-4" />
                  Gửi tin nhắn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;