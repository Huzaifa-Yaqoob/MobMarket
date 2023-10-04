"use client";
import { useEffect } from "react";
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
import getLocation, { initializeOrderForm } from "@/lib/getLocation";
import UserLocation from "./UserLocation";

export default function BuyForm() {
  let location = { latitude: 0, longitude: 0 };
  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      username: "",
      phone: "",
      location: getLocation(),
    },
  });

  useEffect(() => {
    async function getLocationValue() {
      try {
        return await getLocation();
      } catch (error) {
        return { latitude: 0, longitude: 0 };
      }
    }
    // location = getLocationValue();
  }, []);

  function onSubmit(values: z.infer<typeof orderFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location :</FormLabel>
              <FormControl>
                <UserLocation field={field} />
              </FormControl>
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
