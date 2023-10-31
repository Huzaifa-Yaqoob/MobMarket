"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useUserLogIn from "@/hooks/useUserLogIn";
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
import ButtonWithLoadingState from "@/components/common/ButtonWithLoadingState";

export default function LogInForm() {
  const { isLoading, error, logInUser } = useUserLogIn();
  const form = useForm<z.infer<typeof logInUserFormSchema>>({
    resolver: zodResolver(logInUserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof logInUserFormSchema>) {
    await logInUser(values);
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
          <ButtonWithLoadingState text="Log In" isLoading={isLoading} />

          <Button
            type="button"
            variant={"secondary"}
            onClick={() => {
              form.reset();
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
