"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerUserFormSchema, testSchema } from "@/lib/zodSchemas";
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
import useUserRegister from "@/hooks/useUserRegister";
import ButtonWithLoadingState from "@/components/common/ButtonWithLoadingState";
import Error from "@/components/common/Error";
import { useToast } from "@/components/ui/use-toast";

export default function RegisterForm() {
  const { isLoading, error, registerUser } = useUserRegister();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof testSchema>>({
    resolver: zodResolver(testSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof testSchema>) {
    const ok = await registerUser(values);
    if (ok) {
      toast({
        title: "Successfully Registered",
        description:
          "you have been registered successfully. Now login to proceed",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email :</FormLabel>
              <FormControl>
                <Input type="text" placeholder="joy@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username :</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Joy" {...field} />
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
                <Input type="text" placeholder="12345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Error msg={error} />
        <div className="flex items-center gap-4">
          <ButtonWithLoadingState text="register" isLoading={isLoading} />
          <Button
            type="button"
            variant={"secondary"}
            disabled={isLoading}
            onClick={() => form.reset()}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
