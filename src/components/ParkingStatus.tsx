
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ParkingStatusProps {
  total: number;
  used: number;
  type: string;
  icon: React.ReactNode;
}

const ParkingStatus: React.FC<ParkingStatusProps> = ({ total, used, type, icon }) => {
  const percentage = Math.round((used / total) * 100);
  
  let statusColor = "text-green-500";
  let progressColor = "bg-green-500";
  
  if (percentage >= 80) {
    statusColor = "text-red-500";
    progressColor = "bg-red-500";
  } else if (percentage >= 50) {
    statusColor = "text-yellow-500";
    progressColor = "bg-yellow-500";
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">{type}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold">
            {used}/{total}
          </div>
          <div className={`text-sm font-medium ${statusColor}`}>
            {percentage}%
          </div>
        </div>
        <Progress 
          value={percentage} 
          className="h-2 mt-2" 
          indicatorClassName={progressColor} 
        />
        <p className="text-xs text-muted-foreground mt-2">
          {total - used} slot tersedia
        </p>
      </CardContent>
    </Card>
  );
};

export default ParkingStatus;
