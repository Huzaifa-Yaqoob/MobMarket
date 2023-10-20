"use client";

import { useState, useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addProductFormSchema } from "@/lib/zodSchemas";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import BrandSelect from "./fields/BrandSelect";
import MainPic from "./fields/MainPic";
import ImgSelector from "./fields/ImgSelector";
import VariantSet from "./fields/VariantSet";
import YearSelect from "./fields/YearSelect";
import { useFileDataStore } from "@/lib/store";

const MAX = 500;

export default function AddProductForm() {
  const [fileData, updateFileData] = useFileDataStore((state) => [
    state.fileData,
    state.updateFileData,
  ]);
  const [wordsCount, setWordsCount] = useState(0);
  const form = useForm<z.infer<typeof addProductFormSchema>>({
    resolver: zodResolver(addProductFormSchema),
    defaultValues: {
      picture: null,
      name: "",
      price: 0,
      brand: null,
      yearReleased: {
        value: new Date().getFullYear(),
        label: new Date().getFullYear(),
      },
      ram: 0,
      storage: 0,
      battery: 0,
      stock: 0,
      moreInfo: "",
      variant: null,
    },
  });

  useEffect(() => {
    form.setValue("picture", fileData.file);
  }, [fileData]);

  function onSubmit(values: z.infer<typeof addProductFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <section className="h-auto flex flex-col justify-between gap-2 border-2 rounded-lg p-4 border-foreground">
          <h1 className="text-lg font-bold">Product`s Information:</h1>
          <FormField
            control={form.control}
            name="picture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Picture:</FormLabel>
                <FormControl>
                  <ImgSelector
                    acceptedType={{ "image/*": [".png"] }}
                    state={fileData}
                    update={updateFileData}
                  />
                  {/* <MainPic field={field} setValue={form.setValue} /> */}
                </FormControl>
                <FormDescription>
                  This is the main image of the product.(only PNGs are allowed)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input placeholder="Type..." {...field} />
                </FormControl>
                <FormDescription>
                  Enter the full name of your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price:</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Type.." {...field} />
                </FormControl>
                <FormDescription>
                  Type product`s price in $(Dollars).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product`s Brand:</FormLabel>
                <FormControl>
                  <BrandSelect field={field} />
                </FormControl>
                <FormDescription>
                  Select the name of product`s brand.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <section className="h-auto flex flex-col justify-between gap-2 border-2 rounded-lg p-4 border-foreground">
          <h1 className="text-lg font-bold">Product`s Specifications:</h1>
          <FormField
            control={form.control}
            name="yearReleased"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year Released:</FormLabel>
                <FormControl>
                  <YearSelect field={field} />
                </FormControl>
                <FormDescription>
                  Select the year when this product was released.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RAM:</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Type.." {...field} />
                </FormControl>
                <FormDescription>Type product`s RAM in Gb.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="storage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Storage:</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Type..." {...field} />
                </FormControl>
                <FormDescription>Type product`s storage in Gb.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="battery"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Battery:</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Type..." {...field} />
                </FormControl>
                <FormDescription>
                  Type product`s battery in mAh.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product in Stock:</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Type..." {...field} />
                </FormControl>
                <FormDescription>
                  Type quantity of products in stock.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <div className="md:col-span-2 row-start-3 md:row-start-2 h-auto border-2 rounded-lg p-4 border-foreground">
          <FormField
            control={form.control}
            name="moreInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">
                  Detail about Product:
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type here..."
                    {...field}
                    onChange={(e) => {
                      if (e.target.value.length < MAX) {
                        field.onChange(e);
                      }
                      setWordsCount(e.target.value.length);
                    }}
                  />
                </FormControl>
                <FormDescription className="flex justify-between items-center">
                  Write more about this product.(extra spaces will be ignored)
                  <span
                    className={wordsCount === MAX ? "text-destructive" : ""}
                  >
                    {wordsCount}/{MAX}
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:col-span-2 row-start-4 md:row-start-3 h-auto border-2 rounded-lg p-4 border-foreground">
          <FormField
            control={form.control}
            name="variant"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">
                  Set Variant:
                </FormLabel>
                <FormControl>{/* <VariantSet field={field} /> */}</FormControl>
                <FormDescription>
                  Set different variant of this product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="row-start-5 md:row-start-4 h-auto flex align-middle gap-4 justify-between">
          <Button type="submit" className="w-full">
            Add
          </Button>
          <Button
            type="reset"
            variant="secondary"
            className="w-full"
            onClick={() => {
              form.reset();
              updateFileData({
                file: null,
                filePreview: "",
                message: "Drag 'n' drop image here, or click to select image",
                errorMessage: "",
              });
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
