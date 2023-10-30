import { useState } from "react";
import * as z from "zod";
import { registerUserFormSchema } from "@/lib/zodSchemas";
import { userInstance } from "@/axios/instances";
import { AxiosError } from "axios";

import React from "react";

export default function useUserLogIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | AxiosError>("");

  const logInUser = async () => {};
}
