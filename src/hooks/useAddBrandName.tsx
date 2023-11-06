import { useState } from "react";
import * as z from "zod";
import { addBrandSchema } from "@/lib/zodSchemas";
import { adminActionInstance } from "@/axios/instances";

export default function useAddBrandName() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>("");
  const addBrand = async (brand: z.infer<typeof addBrandSchema>) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await adminActionInstance().post("/product/brand", brand);
      console.log(res, "at useUserRegister hook");
      return res.status;
    } catch (error: any) {
      console.log(error, "at add brand name hook");
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, addBrand };
}
