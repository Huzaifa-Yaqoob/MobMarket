"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { filterProductsFormSchema } from "@/lib/zodSchemas";
import { SheetClose } from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import BrandSelect from "./filter_fields/BrandSelect";
import PriceRange from "./filter_fields/PriceRange";
import RAMRange from "./filter_fields/RAMRange";

interface FilterProductProps {
  option: SelectItem[];
  ramRange: number[];
  priceRange: number[];
}

export default function FilterProducts({
  option,
  ramRange,
  priceRange,
}: FilterProductProps): React.ReactElement {
  const form = useForm<z.infer<typeof filterProductsFormSchema>>({
    resolver: zodResolver(filterProductsFormSchema),
    defaultValues: {
      brands: option,
      priceRange: priceRange,
      RAMRange: ramRange,
    },
  });

  function onSubmit(values: z.infer<typeof filterProductsFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 overflow-auto h-full mt-2"
      >
        <FormField
          control={form.control}
          name="brands"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brands :</FormLabel>
              <FormControl>
                <BrandSelect field={field} option={option} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priceRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price Range :</FormLabel>
              <FormControl>
                <PriceRange field={field} priceRange={priceRange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="RAMRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RAM Range :</FormLabel>
              <FormControl>
                <RAMRange field={field} ramRange={ramRange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          <Search className="mr-2 h-4 w-4" />
          Find
        </Button>
      </form>
    </Form>
  );
}
