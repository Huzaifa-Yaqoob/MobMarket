import { useState } from "react";
import { AxiosError } from "axios";
import { userInstance } from "@/axios/instances";

export default function useDeleteUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");

  const deleteUser = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance.delete("/user");
      console.log(res, "at useUserRegister hook");
      return res.status;
    } catch (error: AxiosError | any) {
      console.log(error, "at useUserRegister hook");
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, deleteUser };
}
