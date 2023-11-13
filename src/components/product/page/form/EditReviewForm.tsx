"use client";

import { use, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { editReviewFormSchema } from "@/lib/zodSchemas";
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
import RatingField from "./edit_review_field/RatingField";

export default function EditReviewForm({
  userRating,
  productId,
}: {
  userRating: number;
  productId: string;
}): React.ReactElement {
  const form = useForm<z.infer<typeof editReviewFormSchema>>({
    resolver: zodResolver(editReviewFormSchema),
    defaultValues: {
      rating: userRating,
    },
  });
  console.log(userRating, productId);

  function onSubmit(values: z.infer<typeof editReviewFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // form.setValue("rating", rating)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-4"
      >
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RatingField field={field} setValue={form.setValue} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button type="submit">Post</Button>
          <Button type="button" variant={"outline"}>
            Remove
          </Button>
        </div>
      </form>
    </Form>
  );
}
