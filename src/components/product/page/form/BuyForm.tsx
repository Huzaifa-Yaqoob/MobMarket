"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { orderFormSchema } from "@/lib/zodSchemas";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserLocation from "./UserLocation";
import useGeoNavigator from "@/hooks/useGeoNavigator";

export default function BuyForm() {
  const { isLoading, error, geoLocation } = useGeoNavigator();
  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      username: "",
      phone: "",
      geoLocation: { lat: 0, lng: 0 },
    },
  });

  if (!isLoading) {
    if (error !== "") {
      form.setValue("geoLocation", geoLocation);
    }
  }

  function onSubmit(values: z.infer<typeof orderFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name :</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone :</FormLabel>
              <FormControl>
                <Input placeholder="03XXXXXXXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="geoLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location :</FormLabel>
              <FormControl>
                <UserLocation
                  error={error}
                  isLoading={isLoading}
                  geoLocation={geoLocation}
                />
              </FormControl>
              <FormDescription>
                You will get your product on your Address
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          Purchase
        </Button>
      </form>
    </Form>
  );
}
