import { useState } from "react";
import { Search, ZoomIn, ZoomOut, Maximize2, Filter, Network } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Explorer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodes = [
    { id: "bone-loss", label: "Bone Loss", type: "condition", connections: 5 },
    { id: "microgravity", label: "Microgravity", type: "factor", connections: 8 },
    { id: "osteoclast", label: "Osteoclast Activity", type: "mechanism", connections: 4 },
    { id: "countermeasures", label: "Countermeasures", type: "solution", connections: 6 },
    { id: "exercise", label: "Resistance Exercise", type: "solution", connections: 3 },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Controls */}
        <aside className="w-80 border-r bg-card overflow-y-auto">
          <div className="p-4 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Knowledge Graph Explorer</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Visualize relationships between research entities
              </p>
            </div>

            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search entities..."
                  className="pl-9"
                />
              </div>

              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="condition">Conditions</SelectItem>
                  <SelectItem value="factor">Factors</SelectItem>
                  <SelectItem value="mechanism">Mechanisms</SelectItem>
                  <SelectItem value="solution">Solutions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Network className="h-4 w-4" />
                Graph Controls
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <ZoomIn className="h-3 w-3" />
                  Zoom
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <ZoomOut className="h-3 w-3" />
                  Out
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Maximize2 className="h-3 w-3" />
                  Fit
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Entities</h3>
              <div className="space-y-2">
                {nodes.map((node) => (
                  <Card
                    key={node.id}
                    className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                      selectedNode === node.id ? "border-primary bg-accent" : ""
                    }`}
                    onClick={() => setSelectedNode(node.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{node.label}</p>
                        <p className="text-xs text-muted-foreground capitalize">{node.type}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {node.connections}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Graph Canvas */}
        <main className="flex-1 bg-gradient-to-br from-background to-muted/30 p-6">
          <Card className="h-full border-2 shadow-lg overflow-hidden">
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-background relative">
              {/* Graph Visualization Placeholder */}
              <div className="relative w-full h-full p-8">
                <svg className="w-full h-full" viewBox="0 0 800 600">
                  {/* Central Node */}
                  <g>
                    <circle cx="400" cy="300" r="50" fill="hsl(243 75% 59%)" opacity="0.2" />
                    <circle cx="400" cy="300" r="35" fill="hsl(243 75% 59%)" />
                    <text x="400" y="305" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                      Bone Loss
                    </text>
                  </g>

                  {/* Connected Nodes */}
                  <g>
                    <line x1="400" y1="300" x2="250" y2="150" stroke="hsl(243 75% 59%)" strokeWidth="2" opacity="0.3" />
                    <circle cx="250" cy="150" r="30" fill="hsl(187 92% 69%)" />
                    <text x="250" y="155" textAnchor="middle" fill="white" fontSize="10">
                      Micro-
                    </text>
                    <text x="250" y="165" textAnchor="middle" fill="white" fontSize="10">
                      gravity
                    </text>
                  </g>

                  <g>
                    <line x1="400" y1="300" x2="550" y2="150" stroke="hsl(243 75% 59%)" strokeWidth="2" opacity="0.3" />
                    <circle cx="550" cy="150" r="30" fill="hsl(187 92% 69%)" />
                    <text x="550" y="155" textAnchor="middle" fill="white" fontSize="10">
                      Osteoclast
                    </text>
                  </g>

                  <g>
                    <line x1="400" y1="300" x2="250" y2="450" stroke="hsl(243 75% 59%)" strokeWidth="2" opacity="0.3" />
                    <circle cx="250" cy="450" r="30" fill="hsl(142 71% 45%)" />
                    <text x="250" y="455" textAnchor="middle" fill="white" fontSize="10">
                      Exercise
                    </text>
                  </g>

                  <g>
                    <line x1="400" y1="300" x2="550" y2="450" stroke="hsl(243 75% 59%)" strokeWidth="2" opacity="0.3" />
                    <circle cx="550" cy="450" r="30" fill="hsl(142 71% 45%)" />
                    <text x="550" y="450" textAnchor="middle" fill="white" fontSize="10">
                      Counter-
                    </text>
                    <text x="550" y="460" textAnchor="middle" fill="white" fontSize="10">
                      measures
                    </text>
                  </g>

                  <g>
                    <line x1="400" y1="300" x2="650" y2="300" stroke="hsl(243 75% 59%)" strokeWidth="2" opacity="0.3" />
                    <circle cx="650" cy="300" r="25" fill="hsl(187 92% 69%)" />
                    <text x="650" y="305" textAnchor="middle" fill="white" fontSize="9">
                      Loading
                    </text>
                  </g>
                </svg>

                {/* Info Overlay */}
                {selectedNode && (
                  <div className="absolute bottom-6 right-6 max-w-xs">
                    <Card className="p-4 shadow-lg animate-fade-in">
                      <h4 className="font-semibold mb-2">Node Information</h4>
                      <p className="text-sm text-muted-foreground">
                        Selected: <span className="text-foreground font-medium">
                          {nodes.find(n => n.id === selectedNode)?.label}
                        </span>
                      </p>
                      <Button size="sm" className="w-full mt-3">
                        View Details
                      </Button>
                    </Card>
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="absolute top-6 right-6">
                <Card className="p-3 space-y-2">
                  <p className="text-xs font-semibold mb-2">Legend</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs">Condition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-xs">Factor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="text-xs">Solution</span>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Explorer;
