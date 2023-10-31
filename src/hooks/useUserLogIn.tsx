import { useState } from "react";
import * as z from "zod";
import { logInUserFormSchema } from "@/lib/zodSchemas";
import { signIn } from "next-auth/react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function useUserLogIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");
  const router = useRouter();

  const logInUser = async (data: z.infer<typeof logInUserFormSchema>) => {
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
      }
      if (res?.ok) {
        router.refresh();
      }
      return res?.ok;
    } catch (error) {
      console.log(error, "while logging in");
      setError("something`s wrong here! sorry ");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, logInUser };
}
