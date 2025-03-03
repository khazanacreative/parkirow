
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Tickets = () => {
  const [searchValue, setSearchValue] = useState("");

  // Sample ticket data
  const tickets = [
    {
      id: "T001",
      licensePlate: "B1234CD",
      vehicleType: "Motor",
      entryTime: "2023-06-10 08:30",
      exitTime: "2023-06-10 10:45",
      duration: "2 jam 15 menit",
      price: 5000,
      status: "Selesai",
    },
    {
      id: "T002",
      licensePlate: "D5678EF",
      vehicleType: "Mobil",
      entryTime: "2023-06-10 09:45",
      exitTime: "2023-06-10 11:15",
      duration: "1 jam 30 menit",
      price: 10000,
      status: "Selesai",
    },
    {
      id: "T003",
      licensePlate: "F9012GH",
      vehicleType: "Motor",
      entryTime: "2023-06-10 10:15",
      exitTime: "-",
      duration: "Aktif",
      price: null,
      status: "Aktif",
    },
    {
      id: "T004",
      licensePlate: "A1122BB",
      vehicleType: "Mobil",
      entryTime: "2023-06-10 11:00",
      exitTime: "-",
      duration: "Aktif",
      price: null,
      status: "Aktif",
    },
  ];

  const filteredTickets = searchValue.trim() 
    ? tickets.filter(ticket => 
        ticket.licensePlate.toLowerCase().includes(searchValue.toLowerCase()) ||
        ticket.id.toLowerCase().includes(searchValue.toLowerCase())
      )
    : tickets;

  const activeTickets = filteredTickets.filter(ticket => ticket.status === "Aktif");
  const completedTickets = filteredTickets.filter(ticket => ticket.status === "Selesai");

  return (
    <Layout>
      <div className="space-y-6 pb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tiket Parkir</h1>
          <p className="text-muted-foreground">
            Kelola dan lihat tiket kendaraan yang masuk dan keluar
          </p>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter Tiket</CardTitle>
              <CardDescription>
                Cari tiket berdasarkan plat nomor atau ID tiket
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="Cari plat nomor atau ID tiket"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="transition-all focus-visible:ring-primary/20"
                  />
                </div>
                <div>
                  <DatePicker className="w-full sm:w-auto" />
                </div>
                <div>
                  <Button>Cari</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Daftar Tiket</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="semua" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="semua">Semua</TabsTrigger>
                  <TabsTrigger value="aktif">Aktif</TabsTrigger>
                  <TabsTrigger value="selesai">Selesai</TabsTrigger>
                </TabsList>
                
                <TabsContent value="semua" className="mt-0">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID Tiket</TableHead>
                          <TableHead>Plat Nomor</TableHead>
                          <TableHead>Jenis</TableHead>
                          <TableHead>Waktu Masuk</TableHead>
                          <TableHead>Waktu Keluar</TableHead>
                          <TableHead>Durasi</TableHead>
                          <TableHead>Biaya</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredTickets.length > 0 ? (
                          filteredTickets.map((ticket) => (
                            <TableRow key={ticket.id}>
                              <TableCell className="font-medium">{ticket.id}</TableCell>
                              <TableCell>{ticket.licensePlate}</TableCell>
                              <TableCell>{ticket.vehicleType}</TableCell>
                              <TableCell>{ticket.entryTime}</TableCell>
                              <TableCell>{ticket.exitTime}</TableCell>
                              <TableCell>{ticket.duration}</TableCell>
                              <TableCell>
                                {ticket.price ? `Rp ${ticket.price.toLocaleString()}` : "-"}
                              </TableCell>
                              <TableCell>
                                <Badge variant={ticket.status === "Aktif" ? "outline" : "default"}>
                                  {ticket.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center">
                              Tidak ada tiket yang ditemukan
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="aktif" className="mt-0">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID Tiket</TableHead>
                          <TableHead>Plat Nomor</TableHead>
                          <TableHead>Jenis</TableHead>
                          <TableHead>Waktu Masuk</TableHead>
                          <TableHead>Durasi</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {activeTickets.length > 0 ? (
                          activeTickets.map((ticket) => (
                            <TableRow key={ticket.id}>
                              <TableCell className="font-medium">{ticket.id}</TableCell>
                              <TableCell>{ticket.licensePlate}</TableCell>
                              <TableCell>{ticket.vehicleType}</TableCell>
                              <TableCell>{ticket.entryTime}</TableCell>
                              <TableCell>{ticket.duration}</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {ticket.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center">
                              Tidak ada tiket aktif
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="selesai" className="mt-0">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID Tiket</TableHead>
                          <TableHead>Plat Nomor</TableHead>
                          <TableHead>Jenis</TableHead>
                          <TableHead>Waktu Masuk</TableHead>
                          <TableHead>Waktu Keluar</TableHead>
                          <TableHead>Durasi</TableHead>
                          <TableHead>Biaya</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {completedTickets.length > 0 ? (
                          completedTickets.map((ticket) => (
                            <TableRow key={ticket.id}>
                              <TableCell className="font-medium">{ticket.id}</TableCell>
                              <TableCell>{ticket.licensePlate}</TableCell>
                              <TableCell>{ticket.vehicleType}</TableCell>
                              <TableCell>{ticket.entryTime}</TableCell>
                              <TableCell>{ticket.exitTime}</TableCell>
                              <TableCell>{ticket.duration}</TableCell>
                              <TableCell>
                                {`Rp ${ticket.price?.toLocaleString()}`}
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center">
                              Tidak ada tiket selesai
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Tickets;
