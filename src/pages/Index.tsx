import Header from "@/components/Header";
import ChatPanel from "@/components/ChatPanel";
import InsightsSidebar from "@/components/InsightsSidebar";

const Index = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <ChatPanel />
        <InsightsSidebar />
      </div>
    </div>
  );
};

export default Index;
