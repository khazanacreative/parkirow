
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-background">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 w-full overflow-hidden">
          <AppSidebar isOpen={isSidebarOpen} />
          <main 
            className={cn(
              "flex-1 p-6 transition-all duration-300 overflow-y-auto", 
              isSidebarOpen ? "md:ml-64" : ""
            )}
          >
            <div className="mx-auto max-w-6xl w-full animate-fade-in">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
