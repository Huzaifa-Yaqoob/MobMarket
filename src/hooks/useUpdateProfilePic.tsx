import { useState } from "react";
import { AxiosError } from "axios";
import { userInstance, headerToSendFormData } from "@/axios/instances";

export default function useUpdateProfilePic() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");

  const updateProfilePic = async (profilePic: any) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await userInstance(headerToSendFormData).put(
        "/user/profile_pic",
        profilePic
      );
      return res.data;
    } catch (error: AxiosError | any) {
      console.log(error, "at useUserRegister hook");
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, updateProfilePic };
}
