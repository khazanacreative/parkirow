
import React from "react";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Pengaturan disimpan",
      description: "Perubahan pengaturan telah berhasil disimpan",
    });
  };

  return (
    <Layout>
      <div className="space-y-6 pb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Pengaturan</h1>
          <p className="text-muted-foreground">
            Kelola konfigurasi aplikasi parkir BUMDes
          </p>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-4">
            <TabsTrigger value="general">Umum</TabsTrigger>
            <TabsTrigger value="price">Tarif</TabsTrigger>
            <TabsTrigger value="account">Akun</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Pengaturan Umum</CardTitle>
                  <CardDescription>
                    Konfigurasi dasar aplikasi
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nama BUMDes</Label>
                    <Input id="company-name" placeholder="BUMDes Sejahtera" defaultValue="BUMDes Sejahtera" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat</Label>
                    <Input id="address" placeholder="Jl. Contoh No. 123" defaultValue="Jl. Desa Makmur No. 45" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Kontak</Label>
                    <Input id="contact" placeholder="081234567890" defaultValue="087654321098" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="receipt">Cetak Struk</Label>
                      <p className="text-sm text-muted-foreground">
                        Aktifkan pencetakan struk otomatis
                      </p>
                    </div>
                    <Switch id="receipt" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifications">Notifikasi</Label>
                      <p className="text-sm text-muted-foreground">
                        Dapatkan notifikasi untuk aktivitas penting
                      </p>
                    </div>
                    <Switch id="notifications" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 py-3">
                  <Button variant="default" onClick={handleSave} className="w-full">
                    Simpan Perubahan
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Kapasitas Parkir</CardTitle>
                  <CardDescription>
                    Konfigurasi jumlah slot parkir
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="motorcycle-capacity">Kapasitas Motor</Label>
                    <Input id="motorcycle-capacity" type="number" placeholder="50" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="car-capacity">Kapasitas Mobil</Label>
                    <Input id="car-capacity" type="number" placeholder="30" defaultValue="30" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="capacity-warning">Peringatan Kapasitas</Label>
                      <p className="text-sm text-muted-foreground">
                        Tampilkan peringatan saat hampir penuh
                      </p>
                    </div>
                    <Switch id="capacity-warning" defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="warning-threshold">Ambang Batas Peringatan (%)</Label>
                    <Input id="warning-threshold" type="number" placeholder="80" defaultValue="80" />
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 py-3">
                  <Button variant="default" onClick={handleSave} className="w-full">
                    Simpan Perubahan
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="price" className="mt-0">
            <Card className="transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Pengaturan Tarif</CardTitle>
                <CardDescription>
                  Konfigurasi tarif parkir
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Tarif Motor</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="motorcycle-base-price">Tarif Dasar (Rp)</Label>
                      <Input id="motorcycle-base-price" type="number" placeholder="2000" defaultValue="2000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motorcycle-hourly-rate">Tarif per Jam (Rp)</Label>
                      <Input id="motorcycle-hourly-rate" type="number" placeholder="1000" defaultValue="1000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motorcycle-max-daily">Tarif Maksimal Harian (Rp)</Label>
                      <Input id="motorcycle-max-daily" type="number" placeholder="10000" defaultValue="10000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motorcycle-grace-period">Masa Tenggang (menit)</Label>
                      <Input id="motorcycle-grace-period" type="number" placeholder="15" defaultValue="15" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Tarif Mobil</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="car-base-price">Tarif Dasar (Rp)</Label>
                      <Input id="car-base-price" type="number" placeholder="5000" defaultValue="5000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car-hourly-rate">Tarif per Jam (Rp)</Label>
                      <Input id="car-hourly-rate" type="number" placeholder="2000" defaultValue="2000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car-max-daily">Tarif Maksimal Harian (Rp)</Label>
                      <Input id="car-max-daily" type="number" placeholder="25000" defaultValue="25000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car-grace-period">Masa Tenggang (menit)</Label>
                      <Input id="car-grace-period" type="number" placeholder="15" defaultValue="15" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="progressive-rate">Tarif Progresif</Label>
                    <p className="text-sm text-muted-foreground">
                      Aktifkan tarif yang bertambah seiring waktu
                    </p>
                  </div>
                  <Switch id="progressive-rate" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="weekend-rate">Tarif Akhir Pekan</Label>
                    <p className="text-sm text-muted-foreground">
                      Aktifkan tarif khusus untuk akhir pekan
                    </p>
                  </div>
                  <Switch id="weekend-rate" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 py-3">
                <Button variant="default" onClick={handleSave} className="w-full">
                  Simpan Perubahan
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="account" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Profil Pengguna</CardTitle>
                  <CardDescription>
                    Kelola informasi akun anda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-name">Nama Lengkap</Label>
                    <Input id="user-name" placeholder="John Doe" defaultValue="Ahmad Prasetyo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-email">Email</Label>
                    <Input id="user-email" type="email" placeholder="john@example.com" defaultValue="ahmad@bumdes.id" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-phone">Nomor Telepon</Label>
                    <Input id="user-phone" placeholder="081234567890" defaultValue="081234567890" />
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 py-3">
                  <Button variant="default" onClick={handleSave} className="w-full">
                    Simpan Perubahan
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Keamanan</CardTitle>
                  <CardDescription>
                    Kelola keamanan akun anda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Password Saat Ini</Label>
                    <Input id="current-password" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Password Baru</Label>
                    <Input id="new-password" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                    <Input id="confirm-password" type="password" placeholder="••••••••" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Otentikasi Dua Faktor</Label>
                      <p className="text-sm text-muted-foreground">
                        Tingkatkan keamanan dengan verifikasi tambahan
                      </p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 py-3">
                  <Button variant="default" onClick={handleSave} className="w-full">
                    Perbarui Password
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
