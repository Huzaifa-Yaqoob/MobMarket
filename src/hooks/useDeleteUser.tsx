import { useState } from "react";
import { AxiosError } from "axios";
import * as z from "zod";
import { editUsernameFormSchema } from "@/lib/zodSchemas";
import { userInstance } from "@/axios/instances";

export default function useDeleteUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");

  const updateUsername = async (
    username: z.infer<typeof editUsernameFormSchema>
  ): Promise<User> => {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance.delete("/user");
      console.log(res, "at useUserRegister hook");
      return res.data;
    } catch (error: AxiosError | any) {
      console.log(error, "at useUserRegister hook");
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, updateUsername };
}
