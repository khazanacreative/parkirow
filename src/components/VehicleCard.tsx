
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  id: string;
  type: "motor" | "mobil";
  licensePlate: string;
  entryTime: string;
  duration: string;
  status: "active" | "completed";
  price?: number;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  type,
  licensePlate,
  entryTime,
  duration,
  status,
  price
}) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-md",
      status === "completed" && "opacity-60"
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-md font-bold">{licensePlate}</CardTitle>
          <Badge variant={type === "motor" ? "outline" : "default"}>
            {type === "motor" ? "Motor" : "Mobil"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pb-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          <span>Masuk: {entryTime}</span>
        </div>
        <div className="flex items-center text-sm">
          <Car className="mr-1 h-4 w-4 text-muted-foreground" />
          <span>Durasi: {duration}</span>
        </div>
        {price && (
          <div className="text-sm font-medium mt-2">
            Biaya: Rp {price.toLocaleString()}
          </div>
        )}
      </CardContent>
      <CardFooter className={cn(
        "bg-muted/50 py-2 px-4",
        status === "active" && "bg-primary/5"
      )}>
        {status === "active" ? (
          <Button variant="default" size="sm" className="w-full">
            Proses Keluar
          </Button>
        ) : (
          <div className="text-sm text-muted-foreground w-full text-center">
            Selesai
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
