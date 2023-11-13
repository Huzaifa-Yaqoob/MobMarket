import { useState } from "react";
import { userInstance } from "@/axios/instances";

interface Option {
  value: string;
  label: string;
}

export default function useGetBrandsForUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>("");
  const getBrands = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance().get("/user/product/brand");
      console.log(res, "at getting brand hook");
      return res.data;
    } catch (error: any) {
      console.log(error, "at getting brand name hook");
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, getBrands };
}
