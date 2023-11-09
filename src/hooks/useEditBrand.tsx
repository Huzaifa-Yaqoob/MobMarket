import { useState } from "react";
import * as z from "zod";
import { addBrandSchema } from "@/lib/zodSchemas";
import { adminActionInstance } from "@/axios/instances";

export default function useEditBrand() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>("");
  const addBrand = async (
    id: string,
    updatedBrand: z.infer<typeof addBrandSchema>
  ) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await adminActionInstance().put(
        `/product/brand/${id}`,
        updatedBrand
      );
      console.log(res, "at edit brand hook");
      return res.status;
    } catch (error: any) {
      console.log(error, "at edit brand name hook");
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, addBrand };
}
