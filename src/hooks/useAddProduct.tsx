import { useState } from "react";
import { AxiosError } from "axios";
import * as z from "zod";
import { addProductFormSchema } from "@/lib/zodSchemas";
import { adminActionInstance, headerToSendFormData } from "@/axios/instances";

interface Variant {
  picture: File | undefined;
  name: string;
}

interface AddProductFormSchema {
  brand: string | undefined;
  yearReleased: number | undefined;
  picture: File | undefined;
  name: string;
  price: number;
  ram: number;
  storage: number;
  battery: number;
  stock: number;
  moreInfo: string;
  variant: Variant[] | undefined;
}

export default function useAddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");

  const addProduct = async (product: z.infer<typeof addProductFormSchema>) => {
    setIsLoading(true);
    setError("");
    try {
      // making changes in values
      // get the string values from yearSelect and brand objects
      const customizedProductValues = {
        ...product,
        brand: product.brand?.value,
        yearReleased: product.yearReleased?.value,
        picture: product.picture?.[0],
        variant: product.variant?.map(({ name, picture }) => ({
          name: name,
          picture: picture?.[0],
        })),
        variantLength: product.variant?.length,
      };
      const res = await adminActionInstance(headerToSendFormData).post(
        "/product",
        customizedProductValues
      );
      console.log(res, "at add product hook");
      return res.status;
    } catch (error: AxiosError | any) {
      console.log(error, "at useUserRegister hook");
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, addProduct };
}
