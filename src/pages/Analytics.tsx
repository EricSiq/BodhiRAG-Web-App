import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, FileText, Target, Calendar, BarChart3, Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Analytics = () => {
  const researchTrends = [
    { topic: "Bone Density Studies", count: 142, change: "+12%", trend: "up" },
    { topic: "Radiation Countermeasures", count: 98, change: "+8%", trend: "up" },
    { topic: "Mars Soil Analysis", count: 76, change: "-3%", trend: "down" },
    { topic: "Microgravity Effects", count: 134, change: "+15%", trend: "up" },
  ];

  const topResearchers = [
    { name: "Dr. Sarah Chen", papers: 28, citations: 342 },
    { name: "Dr. James Wilson", papers: 24, citations: 298 },
    { name: "Dr. Maria Rodriguez", papers: 22, citations: 276 },
    { name: "Dr. Robert Kim", papers: 19, citations: 245 },
  ];

  const keyGaps = [
    {
      area: "Long-term Radiation Effects",
      severity: "high",
      papers: 12,
      description: "Limited longitudinal studies on deep space radiation exposure",
    },
    {
      area: "Mars Habitat Design",
      severity: "medium",
      papers: 8,
      description: "Insufficient data on sustainable habitat systems",
    },
    {
      area: "Psychological Adaptation",
      severity: "high",
      papers: 15,
      description: "Need more research on extended isolation effects",
    },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Research Analytics</h1>
              <p className="text-muted-foreground">
                Insights and trends from the knowledge graph
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="30">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 border shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <FileText className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="bg-success/10 text-success">
                  +12%
                </Badge>
              </div>
              <p className="text-2xl font-bold">1,247</p>
              <p className="text-sm text-muted-foreground">Total Documents</p>
            </Card>

            <Card className="p-4 border shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="h-5 w-5 text-secondary" />
                <Badge variant="secondary" className="bg-success/10 text-success">
                  +8%
                </Badge>
              </div>
              <p className="text-2xl font-bold">3,892</p>
              <p className="text-sm text-muted-foreground">Entities Mapped</p>
            </Card>

            <Card className="p-4 border shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-5 w-5 text-primary" />
                <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                  35
                </Badge>
              </div>
              <p className="text-2xl font-bold">35</p>
              <p className="text-sm text-muted-foreground">Research Gaps</p>
            </Card>

            <Card className="p-4 border shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <Badge variant="secondary" className="bg-success/10 text-success">
                  +24
                </Badge>
              </div>
              <p className="text-2xl font-bold">156</p>
              <p className="text-sm text-muted-foreground">New This Month</p>
            </Card>
          </div>

          {/* Research Trends */}
          <Card className="p-6 border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Trending Research Topics</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {researchTrends.map((trend, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-accent/50 hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      trend.trend === "up" ? "bg-success/10" : "bg-destructive/10"
                    }`}>
                      {trend.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-success" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{trend.topic}</p>
                      <p className="text-sm text-muted-foreground">
                        {trend.count} documents
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      trend.trend === "up"
                        ? "bg-success/10 text-success"
                        : "bg-destructive/10 text-destructive"
                    }
                  >
                    {trend.change}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Researchers */}
            <Card className="p-6 border shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Top Contributors</h2>
              <div className="space-y-3">
                {topResearchers.map((researcher, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium">{researcher.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {researcher.papers} papers · {researcher.citations} citations
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Research Gaps */}
            <Card className="p-6 border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Critical Research Gaps</h2>
                <Badge variant="destructive">High Priority</Badge>
              </div>
              <div className="space-y-3">
                {keyGaps.map((gap, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{gap.area}</h3>
                      <Badge
                        variant={gap.severity === "high" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {gap.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {gap.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Only {gap.papers} related papers found
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Publication Timeline Chart Placeholder */}
          <Card className="p-6 border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Publication Timeline</h2>
            <div className="h-64 bg-accent/30 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">
                  Interactive chart visualization will be displayed here
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
