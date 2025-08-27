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
      content: "Hello! I'm Tan's AI Assistant. I can help you learn about his experience, projects, and skills. What would you like to know?",
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "Work Experience",
    "Featured AI Projects", 
    "Technical Skills",
    "Contact Information"
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
      
      if (lowerInput.includes("experience") || lowerInput.includes("work")) {
        botResponse = "Tan has practical experience at Goline Financial Technology JSC as an AI Intern, developing Strategy Generator Agent and researching AI in FinTech. He's also researching AI in Education under supervision of Dr. Tran Van Khanh.";
      } else if (lowerInput.includes("project") || lowerInput.includes("ai")) {
        botResponse = "Tan has completed impressive projects like AI Storybook & Podcast Producer (using LLM, Diffusion, TTS), Real-time Smartphone Price Prediction (Kafka, Hadoop), and Lightweight GANs for Medical Imaging. All applying cutting-edge AI technology.";
      } else if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
        botResponse = "Tan's core skills include: Python, JavaScript, PyTorch, LangChain, LangGraph, LLMs, Django, Flask, Kafka, Hadoop, Docker and many other AI/ML technologies. He has strong experience in Generative AI and Full-Stack Development.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("reach")) {
        botResponse = "You can contact Tan via:\n📧 Email: td.tan2711@gmail.com\n📱 Phone: +84 327 728 199\n📍 Address: Dong Da, Hanoi, Vietnam\nHe's always ready to respond within 24h!";
      } else {
        botResponse = "Thanks for your interest! I can share more about Tan's work experience, AI projects, technical skills, or contact information. What would you like to know specifically?";
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
                      <span className="text-xs text-muted-foreground">Online</span>
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
                  <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
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
                    placeholder="Type your question..."
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