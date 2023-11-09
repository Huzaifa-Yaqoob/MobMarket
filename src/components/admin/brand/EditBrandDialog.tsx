"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useEditBrand from "@/hooks/useEditBrand";
import { editBrandSchema } from "@/lib/zodSchemas";
import { Switch } from "@/components/ui/switch";
import ButtonWithLoadingState from "@/components/common/ButtonWithLoadingState";
import Error from "@/components/common/Error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandTable } from "./BrandsColumns";

export default function EditBrandDialog(data: BrandTable | any) {
  const { isLoading, error, addBrand } = useEditBrand();
  const form = useForm<z.infer<typeof editBrandSchema>>({
    resolver: zodResolver(editBrandSchema),
    defaultValues: {
      name: data.data.name,
      hide: data.data.hide,
    },
  });
  console.log(data);
  async function onSubmit(values: z.infer<typeof editBrandSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await addBrand(data.id, values);
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"}>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.data.name}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name :</FormLabel>
                  <FormControl>
                    <Input placeholder="Type brand name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hide"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-4 items-center">
                    <FormLabel>Hide : </FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                  <FormDescription>
                    All the products from this brand will be hidden.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Error msg={error} />
            <DialogFooter>
              <ButtonWithLoadingState
                text="Apply Changes"
                isLoading={isLoading}
              />
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
