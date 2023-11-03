"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { addBrandSchema } from "@/lib/zodSchemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Brands() {
  const form = useForm<z.infer<typeof addBrandSchema>>({
    resolver: zodResolver(addBrandSchema),
    defaultValues: {
      brand: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="my-container">
      <section className="">
        <div className="border-2 border-ring rounded p-2">abc</div>
        <div className="fixed bottom-0 mb-10 bg-card p-4 rounded border-2 border-ring">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 bg-background  shadow-lg"
            ></form>
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <form />
          </Form>
        </div>
      </section>
    </div>
  );
}
