import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Maximize2 } from "lucide-react";

const InsightsSidebar = () => {
  return (
    <aside className="w-80 border-l bg-card overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* Research Insights Section */}
        <div>
          <h3 className="font-semibold text-foreground mb-1">Research Insights</h3>
          <p className="text-sm text-muted-foreground mb-4">Context-aware visual snippets</p>

          <Card className="p-4 bg-gradient-to-br from-accent/50 to-accent border-none shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                New
              </Badge>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Key Finding</h4>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Bone loss in microgravity is accelerated by reduced mechanical loading and increased osteoclast activity.
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              Updated 2 hours ago
            </div>
          </Card>
        </div>

        {/* Knowledge Graph Section */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Knowledge Graph</h3>
          <Card className="p-4 border shadow-sm">
            <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center mb-3">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="6" cy="6" r="2" />
                    <circle cx="18" cy="6" r="2" />
                    <circle cx="6" cy="18" r="2" />
                    <circle cx="18" cy="18" r="2" />
                    <line x1="9" y1="7" x2="15" y2="7" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                    <line x1="7" y1="9" x2="7" y2="15" />
                    <line x1="17" y1="9" x2="17" y2="15" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Relationship visualization</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full gap-2">
              <Maximize2 className="h-4 w-4" />
              Expand Graph
            </Button>
          </Card>
        </div>

        {/* Source Documents Section */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Source Documents</h3>
          <div className="space-y-2">
            <Card className="p-3 border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">Smith et al. (2023)</p>
                  <p className="text-xs text-muted-foreground truncate">
                    Bone Density Changes in Long-Duration Spaceflight
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3 border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">NASA Technical Report (2022)</p>
                  <p className="text-xs text-muted-foreground truncate">
                    Countermeasures for Skeletal Deterioration
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default InsightsSidebar;
