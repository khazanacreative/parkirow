
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { useTheme } from "@/hooks/use-theme";

interface DataPoint {
  name: string;
  motor: number;
  mobil: number;
}

const RevenueChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const data: DataPoint[] = [
    { name: "Sen", motor: 120, mobil: 200 },
    { name: "Sel", motor: 100, mobil: 180 },
    { name: "Rab", motor: 140, mobil: 210 },
    { name: "Kam", motor: 130, mobil: 190 },
    { name: "Jum", motor: 170, mobil: 240 },
    { name: "Sab", motor: 190, mobil: 280 },
    { name: "Min", motor: 150, mobil: 230 },
  ];

  const textColor = isDark ? "#f8fafc" : "#0f172a";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  
  return (
    <Card className="col-span-2 transition-all duration-300 hover:shadow-md overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">Pendapatan Mingguan</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fill: textColor }} 
                tickLine={{ stroke: textColor }} 
                axisLine={{ stroke: gridColor }} 
              />
              <YAxis 
                tick={{ fill: textColor }} 
                tickLine={{ stroke: textColor }} 
                axisLine={{ stroke: gridColor }}
                tickFormatter={(value) => `Rp${value}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? "#1e293b" : "#ffffff",
                  color: textColor,
                  border: `1px solid ${gridColor}`,
                  borderRadius: "8px"
                }}
                formatter={(value) => [`Rp${value}k`, ""]}
              />
              <Legend wrapperStyle={{ color: textColor }} />
              <Bar 
                dataKey="motor" 
                name="Motor" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]} 
                barSize={20}
              />
              <Bar 
                dataKey="mobil" 
                name="Mobil" 
                fill="hsl(var(--accent-foreground))" 
                radius={[4, 4, 0, 0]} 
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
