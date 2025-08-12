import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortfolioSidebar } from "@/components/PortfolioSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { Menu } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      {/* Mobile Header with Sidebar Trigger */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--gradient-primary)] flex items-center justify-center text-white font-bold text-sm">
              RC
            </div>
            <span className="font-bold text-lg text-gradient">Raj Choudhary</span>
          </div>
          <SidebarTrigger className="p-2">
            <Menu className="h-6 w-6" />
          </SidebarTrigger>
        </div>
      </header>

      <div className="flex min-h-screen w-full">
        <PortfolioSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="pt-16 lg:pt-0">
            <HeroSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
