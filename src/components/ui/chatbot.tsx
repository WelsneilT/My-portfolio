import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Xin chào! Tôi là AI Assistant của Duy Tân. Tôi có thể giúp bạn tìm hiểu về kinh nghiệm, dự án và kỹ năng của anh ấy. Bạn muốn biết điều gì?",
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "Kinh nghiệm làm việc",
    "Dự án AI nổi bật", 
    "Kỹ năng công nghệ",
    "Thông tin liên hệ"
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      content: input,
      time: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("kinh nghiệm") || lowerInput.includes("làm việc")) {
        botResponse = "Duy Tân có kinh nghiệm thực tế tại Goline Financial Technology JSC với vai trò AI Intern, phát triển Strategy Generator Agent và nghiên cứu AI trong FinTech. Anh cũng đang nghiên cứu AI in Education dưới sự giám sát của Dr. Trần Văn Khánh.";
      } else if (lowerInput.includes("dự án") || lowerInput.includes("ai")) {
        botResponse = "Duy Tân đã thực hiện nhiều dự án ấn tượng như AI Storybook & Podcast Producer (sử dụng LLM, Diffusion, TTS), Real-time Smartphone Price Prediction (Kafka, Hadoop), và Lightweight GANs for Medical Imaging. Tất cả đều ứng dụng công nghệ AI tiên tiến.";
      } else if (lowerInput.includes("kỹ năng") || lowerInput.includes("công nghệ")) {
        botResponse = "Kỹ năng chính của Duy Tân bao gồm: Python, JavaScript, PyTorch, LangChain, LangGraph, LLMs, Django, Flask, Kafka, Hadoop, Docker và nhiều công nghệ AI/ML khác. Anh có kinh nghiệm mạnh về Generative AI và Full-Stack Development.";
      } else if (lowerInput.includes("liên hệ") || lowerInput.includes("contact")) {
        botResponse = "Bạn có thể liên hệ với Duy Tân qua:\n📧 Email: td.tan2711@gmail.com\n📱 Phone: 0327728199\n📍 Địa chỉ: 25/89 Thịnh Quang, Đống Đa, HN\nAnh luôn sẵn sàng phản hồi trong vòng 24h!";
      } else {
        botResponse = "Cảm ơn bạn đã quan tâm! Tôi có thể chia sẻ thêm về kinh nghiệm làm việc, các dự án AI, kỹ năng công nghệ hoặc thông tin liên hệ của Duy Tân. Bạn muốn tìm hiểu về điều gì cụ thể?";
      }

      const botMessage = {
        type: "bot",
        content: botResponse,
        time: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInput("");
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] animate-scale-in">
          <Card className="h-full section-gradient border-primary/20 shadow-2xl">
            {/* Header */}
            <CardHeader className="pb-3 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AI Assistant</h3>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Đang hoạt động</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="p-0 flex flex-col h-full">
              <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[320px]">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'bot' && (
                      <div className="p-1.5 bg-primary/10 rounded-full">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.time}
                      </span>
                    </div>
                    {message.type === 'user' && (
                      <div className="p-1.5 bg-muted rounded-full">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Câu hỏi gợi ý:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Nhập câu hỏi của bạn..."
                    className="flex-1 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={!input.trim()}
                    className="h-9 w-9"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;