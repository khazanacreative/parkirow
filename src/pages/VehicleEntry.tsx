
import React from "react";
import Layout from "@/components/Layout";
import TicketForm from "@/components/TicketForm";
import VehicleCard from "@/components/VehicleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VehicleEntry = () => {
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
    {
      id: "4",
      type: "mobil" as const,
      licensePlate: "A1122BB",
      entryTime: "11:00",
      duration: "30 menit",
      status: "active" as const,
    },
    {
      id: "5",
      type: "motor" as const,
      licensePlate: "B3344CC",
      entryTime: "11:15",
      duration: "15 menit",
      status: "active" as const,
    },
    {
      id: "6",
      type: "motor" as const,
      licensePlate: "C5566DD",
      entryTime: "11:45",
      duration: "5 menit",
      status: "active" as const,
    },
  ];

  const motorcycles = activeVehicles.filter(v => v.type === "motor");
  const cars = activeVehicles.filter(v => v.type === "mobil");

  return (
    <Layout>
      <div className="space-y-6 pb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Kendaraan Masuk</h1>
          <p className="text-muted-foreground">
            Kelola kendaraan yang masuk ke area parkir
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <TicketForm />
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kendaraan Aktif</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="semua" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="semua">Semua</TabsTrigger>
                    <TabsTrigger value="motor">Motor</TabsTrigger>
                    <TabsTrigger value="mobil">Mobil</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="semua" className="mt-0">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {activeVehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} {...vehicle} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="motor" className="mt-0">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {motorcycles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} {...vehicle} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="mobil" className="mt-0">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {cars.map((vehicle) => (
                        <VehicleCard key={vehicle.id} {...vehicle} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VehicleEntry;
