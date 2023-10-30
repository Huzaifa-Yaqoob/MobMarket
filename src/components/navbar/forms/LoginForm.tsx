"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { LogIn } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { logInUserFormSchema } from "@/lib/zodSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Error from "@/components/common/Error";

export default function LogInForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof logInUserFormSchema>>({
    resolver: zodResolver(logInUserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof logInUserFormSchema>) {
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
      }
      if (res?.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error, "while logging in");
      setError("something`s wrong here! sorry ");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 transition-all"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email :</FormLabel>
              <FormControl>
                <Input type="email" placeholder="joy@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password :</FormLabel>
              <FormControl>
                <Input type="password" placeholder="12345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Error msg={error} />
        <div className="flex items-center gap-4">
          <Button type="submit">
            <LogIn className="mr-2 h-4 w-4" />
            Log In
          </Button>
          <Button
            type="button"
            variant={"secondary"}
            onClick={() => {
              form.reset();
              setError("");
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
