import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="hero-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional development and research journey
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
                   <span>Led development of "Strategy Generator Agent" - AI system providing personalized investment strategies using DeepSeek LLM for data processing over 10 diverse sources including news and social media</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                   <span>Built Pipeline & Processing system to ensure data privacy and accuracy with real-time retrieval augmented generation (RAG)</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                   <span>Applied research on AI in FinTech by participating in "Intelligent Financial Chatbot Competition"</span>
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
                    <span className="font-medium">Under supervision of Dr. Tran Van Khanh (ICTU - Thai Nguyen University & FPT.AI)</span>
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
                   <span>Conducting ongoing research into AI and LLMs for adaptive education systems, involving state-of-the-art literature analysis</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                   <span>Developing scientific paper analysis agent using LangGraph to automate research processes</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                   <span>Working on graduation thesis: "Building an AI Co-pilot for Differentiated Lesson Plan Design"</span>
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