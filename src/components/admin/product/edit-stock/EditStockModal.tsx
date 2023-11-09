"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { editStockSchema } from "@/lib/zodSchemas";
import { Button } from "@/components/ui/button";
import ButtonWithLoadingState from "@/components/common/ButtonWithLoadingState";

export default function EditStockModal({
  stock,
  name,
}: {
  stock: number;
  name: string;
}) {
  const form = useForm<z.infer<typeof editStockSchema>>({
    resolver: zodResolver(editStockSchema),
    defaultValues: {
      stock: stock,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof editStockSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"}>Edit Stock</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Stock of {name}</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        placeholder="Type..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Negative numbers are not allowed
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
