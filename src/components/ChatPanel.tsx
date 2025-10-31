import { useState } from "react";
import { Send, Cpu, BarChart, Share2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ChatPanel = () => {
  const [message, setMessage] = useState("");

  const quickPrompts = [
    "How does microgravity affect bone density?",
    "Show me countermeasures for radiation exposure",
    "What are the latest findings on Mars soil composition?",
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-background to-muted/30">
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Welcome Message */}
          <Card className="p-5 border shadow-sm animate-fade-in">
            <div className="flex items-start space-x-3">
              <div className="bg-accent p-2.5 rounded-lg flex-shrink-0">
                <Cpu className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-lg mb-2">Welcome to BodhiRAG</h2>
                <p className="text-muted-foreground">
                  Ask me anything about research findings, and I'll help you explore the knowledge graph.
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Prompt Buttons */}
          <div className="flex flex-wrap gap-2 animate-slide-up">
            {quickPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-sm text-left justify-start h-auto py-2 px-3 hover:border-primary hover:text-primary transition-colors"
                onClick={() => setMessage(prompt)}
              >
                {prompt}
              </Button>
            ))}
          </div>

          {/* Sample Conversation */}
          <div className="space-y-4 animate-slide-up">
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                How does microgravity affect bone density?
              </div>
            </div>

            <Card className="p-5 border shadow-sm">
              <div className="space-y-3">
                <p className="text-foreground leading-relaxed">
                  Microgravity exposure during spaceflight leads to significant bone loss, primarily through these mechanisms:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="text-foreground">• Reduced mechanical loading on bones</li>
                  <li className="text-foreground">• Increased osteoclast activity (bone resorption)</li>
                  <li className="text-foreground">• Decreased osteoblast activity (bone formation)</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  Studies show astronauts lose 1-2% of bone mass per month in weight-bearing bones like the femur and lumbar spine.
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t">
                  <Button variant="outline" size="sm" className="gap-2">
                    <BarChart className="h-4 w-4" />
                    View Chart
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t bg-card p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question about research findings..."
              className="min-h-[60px] pr-12 resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  // Handle send
                }
              }}
            />
            <Button
              size="icon"
              className="absolute bottom-2 right-2 rounded-lg"
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
