
import React from "react";
import { Car, Clock, Ticket, CircleDollarSign } from "lucide-react";
import Layout from "@/components/Layout";
import ParkingStatus from "@/components/ParkingStatus";
import RevenueChart from "@/components/RevenueChart";
import VehicleCard from "@/components/VehicleCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const activeVehicles = [
    {
      id: "1",
      type: "motor" as const,
      licensePlate: "B1234CD",
      entryTime: "08:30",
      duration: "2 jam 15 menit",
      status: "active" as const,
    },
    {
      id: "2",
      type: "mobil" as const,
      licensePlate: "D5678EF",
      entryTime: "09:45",
      duration: "1 jam 30 menit",
      status: "active" as const,
    },
    {
      id: "3",
      type: "motor" as const,
      licensePlate: "F9012GH",
      entryTime: "10:15",
      duration: "1 jam",
      status: "active" as const,
    },
  ];
  
  const recentVehicles = [
    {
      id: "4",
      type: "mobil" as const,
      licensePlate: "B5678IJ",
      entryTime: "07:30",
      duration: "3 jam 20 menit",
      status: "completed" as const,
      price: 15000,
    },
    {
      id: "5",
      type: "motor" as const,
      licensePlate: "D9012KL",
      entryTime: "08:15",
      duration: "2 jam 40 menit",
      status: "completed" as const,
      price: 4000,
    },
  ];

  const summaryItems = [
    {
      title: "Total Kendaraan Hari Ini",
      value: "42",
      icon: <Car className="h-4 w-4" />,
      trend: "+12% dari kemarin",
      trendUp: true,
    },
    {
      title: "Rata-Rata Durasi",
      value: "1.5 Jam",
      icon: <Clock className="h-4 w-4" />,
      trend: "-5% dari kemarin",
      trendUp: false,
    },
    {
      title: "Tiket Dicetak",
      value: "38",
      icon: <Ticket className="h-4 w-4" />,
      trend: "+8% dari kemarin",
      trendUp: true,
    },
    {
      title: "Pendapatan Hari Ini",
      value: "Rp 520K",
      icon: <CircleDollarSign className="h-4 w-4" />,
      trend: "+15% dari kemarin",
      trendUp: true,
    },
  ];

  return (
    <Layout>
      <div className="space-y-6 pb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Ringkasan aktivitas parkir PARKIROW hari ini
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {summaryItems.map((item, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <div className="text-muted-foreground">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className={`text-xs ${item.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                  {item.trend}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ParkingStatus 
            total={50} 
            used={32} 
            type="Area Parkir Motor" 
            icon={<Car className="h-4 w-4" />} 
          />
          <ParkingStatus 
            total={30} 
            used={28} 
            type="Area Parkir Mobil" 
            icon={<Car className="h-4 w-4" />} 
          />
          <ParkingStatus 
            total={80} 
            used={60} 
            type="Total Kapasitas" 
            icon={<Car className="h-4 w-4" />} 
          />
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <RevenueChart />
          
          <Card className="col-span-1 md:col-span-1 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Kendaraan Aktif</CardTitle>
              <CardDescription>
                Kendaraan yang sedang parkir
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="space-y-4">
                {activeVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} {...vehicle} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Kendaraan Terakhir Keluar</CardTitle>
              <CardDescription>
                Riwayat kendaraan yang telah keluar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {recentVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} {...vehicle} />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Tarif Parkir</CardTitle>
              <CardDescription>
                Informasi tarif parkir yang berlaku
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                  <div className="flex items-center">
                    <Car className="mr-2 h-5 w-5 text-primary" />
                    <span className="font-medium">Motor</span>
                  </div>
                  <div>
                    <span className="font-bold">Rp 2.000</span>
                    <span className="text-sm text-muted-foreground"> / jam</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                  <div className="flex items-center">
                    <Car className="mr-2 h-5 w-5 text-primary" />
                    <span className="font-medium">Mobil</span>
                  </div>
                  <div>
                    <span className="font-bold">Rp 5.000</span>
                    <span className="text-sm text-muted-foreground"> / jam</span>
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

export default Index;
