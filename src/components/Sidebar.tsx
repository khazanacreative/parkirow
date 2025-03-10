
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  LayoutDashboard,
  Clock,
  CreditCard,
  BarChart3,
  Settings,
  Car
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  isOpen: boolean;
}

const AppSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: Car,
      label: "Kendaraan Masuk",
      path: "/entry",
    },
    {
      icon: Clock,
      label: "Kendaraan Keluar",
      path: "/exit",
    },
    {
      icon: CreditCard,
      label: "Tiket",
      path: "/tickets",
    },
    {
      icon: BarChart3,
      label: "Laporan",
      path: "/reports",
    },
    {
      icon: Settings,
      label: "Pengaturan",
      path: "/settings",
    },
  ];

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col bg-sidebar border-r pt-16 transition-all duration-300 ease-in-out",
        isOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full md:w-16 md:translate-x-0",
      )}
    >
      <div className="overflow-y-auto overflow-x-hidden flex flex-col flex-1 py-4">
        <nav className="flex-1 px-3 space-y-2">
          <TooltipProvider delayDuration={0}>
            {menuItems.map((item) => (
              <Tooltip key={item.path}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center px-3 py-2 rounded-md transition-all hover:bg-gray-200 dark:hover:bg-gray-800 group",
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "text-gray-700 dark:text-gray-200"
                      )
                    }
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                      <span
                        className={cn(
                          "ml-3 text-sm font-medium transition-opacity",
                          !isOpen && "md:hidden"
                        )}
                      >
                        {item.label}
                      </span>
                    </div>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right" className={cn("ml-1", isOpen && "md:hidden")}>
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
