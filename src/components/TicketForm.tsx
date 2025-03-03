
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  licensePlate: z.string()
    .min(4, "Plat nomor minimal 4 karakter")
    .max(10, "Plat nomor maksimal 10 karakter"),
  vehicleType: z.enum(["motor", "mobil"], {
    required_error: "Pilih jenis kendaraan",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const TicketForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      licensePlate: "",
      vehicleType: "motor",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      toast({
        title: "Tiket Dibuat",
        description: `Kendaraan ${data.vehicleType} dengan plat ${data.licensePlate} berhasil masuk`,
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-md overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Kendaraan Masuk</CardTitle>
        <CardDescription>
          Input data kendaraan yang masuk parkir
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="licensePlate"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Plat Nomor</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Contoh: B1234CD" 
                      {...field} 
                      className="transition-all focus-visible:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Jenis Kendaraan</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-1"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0 rounded-md border p-2 flex-1 cursor-pointer hover:bg-secondary transition-all">
                        <FormControl>
                          <RadioGroupItem value="motor" className="sr-only" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer flex items-center justify-center w-full">
                          <Car className="mr-1 h-4 w-4" /> Motor
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0 rounded-md border p-2 flex-1 cursor-pointer hover:bg-secondary transition-all">
                        <FormControl>
                          <RadioGroupItem value="mobil" className="sr-only" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer flex items-center justify-center w-full">
                          <Car className="mr-1 h-4 w-4" /> Mobil
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="bg-muted/50 py-3">
            <Button 
              type="submit" 
              className="w-full transition-all" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Memproses..." : "Cetak Tiket"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default TicketForm;
