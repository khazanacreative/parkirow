
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VehicleCard from "@/components/VehicleCard";
import { useToast } from "@/hooks/use-toast";

const VehicleExit = () => {
  const { toast } = useToast();
  const [searchValue, setSearchValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample completed vehicles data
  const completedVehicles = [
    {
      id: "7",
      type: "motor" as const,
      licensePlate: "B5566DD",
      entryTime: "08:30",
      duration: "4 jam 15 menit",
      status: "completed" as const,
      price: 5000,
    },
    {
      id: "8",
      type: "mobil" as const,
      licensePlate: "D9900EF",
      entryTime: "09:45",
      duration: "3 jam 30 menit",
      status: "completed" as const,
      price: 15000,
    },
    {
      id: "9",
      type: "motor" as const,
      licensePlate: "F7788GH",
      entryTime: "10:15",
      duration: "2 jam 45 menit",
      status: "completed" as const,
      price: 4000,
    },
  ];

  // Sample active vehicles data for search
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
  ];

  const handleSearch = () => {
    if (!searchValue.trim()) {
      toast({
        title: "Input Kosong",
        description: "Masukkan plat nomor kendaraan",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    // Simulate search process
    setTimeout(() => {
      const found = activeVehicles.some(
        vehicle => vehicle.licensePlate.toLowerCase() === searchValue.toLowerCase()
      );
      
      if (found) {
        toast({
          title: "Kendaraan Ditemukan",
          description: `Kendaraan dengan plat nomor ${searchValue} ditemukan`,
        });
      } else {
        toast({
          title: "Kendaraan Tidak Ditemukan",
          description: `Kendaraan dengan plat nomor ${searchValue} tidak ditemukan`,
          variant: "destructive",
        });
      }
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="space-y-6 pb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Kendaraan Keluar</h1>
          <p className="text-muted-foreground">
            Proses kendaraan yang keluar dari area parkir
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card className="transition-all duration-300 hover:shadow-md overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Cari Kendaraan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Masukkan plat nomor"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="transition-all focus-visible:ring-primary/20"
                  />
                  <Button 
                    onClick={handleSearch} 
                    className="w-full" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Mencari..." : "Cari"}
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Masukkan plat nomor kendaraan untuk melihat informasi dan memproses keluar parkir
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Riwayat Keluar</CardTitle>
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
                      {completedVehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.id} {...vehicle} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="motor" className="mt-0">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {completedVehicles
                        .filter((v) => v.type === "motor")
                        .map((vehicle) => (
                          <VehicleCard key={vehicle.id} {...vehicle} />
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="mobil" className="mt-0">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {completedVehicles
                        .filter((v) => v.type === "mobil")
                        .map((vehicle) => (
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

export default VehicleExit;
