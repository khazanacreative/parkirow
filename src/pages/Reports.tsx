import React from "react";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DatePicker } from "@/components/ui/date-picker";
import { useTheme } from "@/hooks/use-theme";

const Reports = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const dailyData = [
    { name: "06:00", motor: 10, mobil: 5 },
    { name: "08:00", motor: 25, mobil: 15 },
    { name: "10:00", motor: 40, mobil: 20 },
    { name: "12:00", motor: 30, mobil: 25 },
    { name: "14:00", motor: 25, mobil: 18 },
    { name: "16:00", motor: 35, mobil: 22 },
    { name: "18:00", motor: 45, mobil: 30 },
    { name: "20:00", motor: 20, mobil: 10 },
  ];
  
  const weeklyData = [
    { name: "Sen", motor: 120, mobil: 60 },
    { name: "Sel", motor: 100, mobil: 50 },
    { name: "Rab", motor: 140, mobil: 70 },
    { name: "Kam", motor: 130, mobil: 65 },
    { name: "Jum", motor: 170, mobil: 85 },
    { name: "Sab", motor: 190, mobil: 95 },
    { name: "Min", motor: 150, mobil: 75 },
  ];
  
  const monthlyData = [
    { name: "Jan", motor: 150, mobil: 180 },
    { name: "Feb", motor: 160, mobil: 200 },
    { name: "Mar", motor: 180, mobil: 220 },
    { name: "Apr", motor: 170, mobil: 195 },
    { name: "Mei", motor: 190, mobil: 230 },
    { name: "Jun", motor: 200, mobil: 240 },
  ];
  
  const pieData = [
    { name: "Motor", value: 60 },
    { name: "Mobil", value: 40 },
  ];
  
  const COLORS = ["hsl(var(--primary))", "hsl(var(--accent-foreground))"];
  
  const textColor = isDark ? "#f8fafc" : "#0f172a";
  const gridColor = isDark ? "#334155" : "#e2e8f0";
  
  return (
    <Layout>
      <div className="space-y-6 pb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Laporan</h1>
          <p className="text-muted-foreground">
            Analisis dan statistik pengelolaan parkir
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="harian">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Periode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="harian">Harian</SelectItem>
                <SelectItem value="mingguan">Mingguan</SelectItem>
                <SelectItem value="bulanan">Bulanan</SelectItem>
              </SelectContent>
            </Select>
            
            <DatePicker />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-2 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Pendapatan</CardTitle>
              <CardDescription>
                Grafik pendapatan berdasarkan periode
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="harian" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="harian">Harian</TabsTrigger>
                  <TabsTrigger value="mingguan">Mingguan</TabsTrigger>
                  <TabsTrigger value="bulanan">Bulanan</TabsTrigger>
                </TabsList>
                
                <TabsContent value="harian" className="mt-0">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dailyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
                </TabsContent>
                
                <TabsContent value="mingguan" className="mt-0">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
                </TabsContent>
                
                <TabsContent value="bulanan" className="mt-0">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Distribusi Kendaraan</CardTitle>
              <CardDescription>
                Persentase tipe kendaraan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? "#1e293b" : "#ffffff",
                        color: textColor,
                        border: `1px solid ${gridColor}`,
                        borderRadius: "8px"
                      }}
                      formatter={(value) => [`${value}%`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Tren Pengunjung</CardTitle>
              <CardDescription>Trend pengunjung parkir</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={weeklyData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
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
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDark ? "#1e293b" : "#ffffff",
                        color: textColor,
                        border: `1px solid ${gridColor}`,
                        borderRadius: "8px"
                      }}
                    />
                    <Legend wrapperStyle={{ color: textColor }} />
                    <Line
                      type="monotone"
                      dataKey="motor"
                      name="Motor"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mobil"
                      name="Mobil"
                      stroke="hsl(var(--accent-foreground))"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Ringkasan Keuangan</CardTitle>
              <CardDescription>
                Statistik pendapatan bulanan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Total Pendapatan Bulan Ini</div>
                    <div className="font-bold text-lg">Rp 12,480,000</div>
                  </div>
                  <div className="bg-muted h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="text-xs text-muted-foreground text-right">
                    85% dari target (Rp 15,000,000)
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-muted/50 p-3 rounded-md">
                    <div className="text-sm font-medium">Pendapatan Motor</div>
                    <div className="font-semibold">Rp 4,950,000</div>
                  </div>
                  <div className="flex justify-between items-center bg-muted/50 p-3 rounded-md">
                    <div className="text-sm font-medium">Pendapatan Mobil</div>
                    <div className="font-semibold">Rp 7,530,000</div>
                  </div>
                  <div className="flex justify-between items-center bg-primary/10 p-3 rounded-md">
                    <div className="text-sm font-medium">Total Pendapatan</div>
                    <div className="font-bold">Rp 12,480,000</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
