"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ButtonWithLoadingState from "@/components/common/ButtonWithLoadingState";
import { addBrandSchema } from "@/lib/zodSchemas";
import { Input } from "@/components/ui/input";
import useAddBrand from "@/hooks/useAddBrand";
import Error from "@/components/common/Error";

export default function AddBrandDialog(): React.ReactElement {
  const { isLoading, error, addBrand } = useAddBrand();
  const form = useForm<z.infer<typeof addBrandSchema>>({
    resolver: zodResolver(addBrandSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addBrandSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    addBrand(values);
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Brand
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Brand</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Brand :</FormLabel>
                  <FormControl>
                    <Input placeholder="Type brand name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Error msg={error} />
            <ButtonWithLoadingState text="Add Brand" isLoading={isLoading} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
