"use client";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { editUsernameFormSchema } from "@/lib/zodSchemas";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function EditUserName() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof editUsernameFormSchema>>({
    resolver: zodResolver(editUsernameFormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof editUsernameFormSchema>) {
    console.log(values);
    setIsDialogOpen(false);
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <span className="flex gap-2 items-center font-thin text-sm cursor-pointer text-info hover:underline underline-info">
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
