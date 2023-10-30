"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";
import { useSession } from "next-auth/react";
import useUpdateUsername from "@/hooks/useUpdateUsername";
import { editUsernameFormSchema } from "@/lib/zodSchemas";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ButtonWithThreeDotsLoading from "@/components/common/ButtonWithThreeDotsLoading";
import Error from "@/components/common/Error";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function EditUserName({
  currentName,
}: {
  currentName: string;
}): React.ReactElement {
  const { data: session, update } = useSession();
  const { isLoading, error, updateUsername } = useUpdateUsername();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof editUsernameFormSchema>>({
    resolver: zodResolver(editUsernameFormSchema),
    defaultValues: {
      username: currentName,
    },
  });

  async function onSubmit(values: z.infer<typeof editUsernameFormSchema>) {
    if (values.username !== currentName) {
      const res = await updateUsername(values);
      update({
        ...session,
        user: {
          ...session?.user,
          name: res.username,
        },
      });
      console.log(res);
      console.log(session);
    }
    setIsDialogOpen(false);
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <span className="flex gap-2 items-center font-normal text-sm cursor-pointer text-info hover:underline underline-info">
          edit username <Pencil className="mr-2 h-4 w-4" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription className="flex items-center">
                    <Info className="mr-1 h-4 w-4" />
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonWithThreeDotsLoading
              text="Change Username"
              isLoading={isLoading}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
