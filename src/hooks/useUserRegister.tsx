import { useState } from "react";
import * as z from "zod";
import { registerUserFormSchema } from "@/lib/zodSchemas";
import { userInstance } from "@/axios/instances";
import { AxiosError } from "axios";

export default function useUserRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");

  const registerUser = async (
    user: z.infer<typeof registerUserFormSchema>
  ): Promise<User> => {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance.post("/register", user);
      console.log(res, "at useUserRegister hook");
      return res.data;
    } catch (error: AxiosError | any) {
      console.log(error, "at useUserRegister hook");
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, registerUser };
}
