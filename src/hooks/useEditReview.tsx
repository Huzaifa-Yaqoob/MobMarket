import { useState } from "react";
import { AxiosError } from "axios";
import * as z from "zod";
import { editReviewFormSchema } from "@/lib/zodSchemas";
import { userInstance } from "@/axios/instances";

export default function useEditReview() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");

  const editReview = async (review: z.infer<typeof editReviewFormSchema>) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance().post("/user/rating", review);
      console.log(res, "at usereditreview hook");
      return res.data;
    } catch (error: AxiosError | any) {
      console.log(error, "at usereditreview hook");
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteReview = async (productId: string) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance().delete("/user/rating", {
        data: { productId },
      });
      console.log(res, "at usereditreview hook");
      return res.data;
    } catch (error: AxiosError | any) {
      console.log(error, "at usereditreview hook");
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, editReview, deleteReview };
}
