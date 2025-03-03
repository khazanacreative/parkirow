
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ParkingStatusProps {
  total: number;
  used: number;
  type: string;
  icon: React.ReactNode;
}

const ParkingStatus = ({ total, used, type, icon }: ParkingStatusProps) => {
  const percentage = Math.round((used / total) * 100);
  const available = total - used;
  
  let statusColor = "bg-green-500";
  if (percentage > 80) {
    statusColor = "bg-red-500";
  } else if (percentage > 60) {
    statusColor = "bg-yellow-500";
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">
          {type}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{available} Tersedia</div>
        <div className="text-xs text-muted-foreground">dari {total} slot</div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs">
            <span>Terisi: {used} slot</span>
            <span className={percentage > 80 ? "text-red-500" : percentage > 60 ? "text-yellow-500" : "text-green-500"}>
              {percentage}%
            </span>
          </div>
          
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full ${statusColor} rounded-full`} 
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParkingStatus;
