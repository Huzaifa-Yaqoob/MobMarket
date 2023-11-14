"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { editReviewFormSchema } from "@/lib/zodSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import RatingField from "./edit_review_field/RatingField";
import ButtonWithLoadingState from "@/components/common/ButtonWithLoadingState";
import Error from "@/components/common/Error";
import useEditReview from "@/hooks/useEditReview";

export default function EditReviewForm({
  userRating,
  productId,
}: {
  userRating: number;
  productId: string;
}): React.ReactElement {
  const { isLoading, error, editReview, deleteReview } = useEditReview();
  const form = useForm<z.infer<typeof editReviewFormSchema>>({
    resolver: zodResolver(editReviewFormSchema),
    defaultValues: {
      rating: userRating,
      productId: productId,
    },
  });
  console.log(userRating, productId);

  async function onSubmit(values: z.infer<typeof editReviewFormSchema>) {
    await editReview(values);
    console.log(values);
  }

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
        <Error msg={error} />
        <div className="flex gap-4">
          <ButtonWithLoadingState text="Submit" isLoading={isLoading} />
          <Button
            type="button"
            variant={"outline"}
            onClick={async () => await deleteReview(productId)}
          >
            Remove
          </Button>
        </div>
      </form>
    </Form>
  );
}
