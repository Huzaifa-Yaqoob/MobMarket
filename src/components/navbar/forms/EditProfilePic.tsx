import { Pencil } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";
import { editProfilePicFormSchema } from "@/lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function EditProfilePic() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof editProfilePicFormSchema>>({
    resolver: zodResolver(editProfilePicFormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof editProfilePicFormSchema>) {
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="flex gap-2 items-center font-thin text-sm cursor-pointer text-info hover:underline underline-info">
          edit profile picture <Pencil className="mr-2 h-4 w-4" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Picture</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="file" {...field} />
                    </FormControl>
                    <FormDescription className="flex items-center">
                      <Info className="mr-1 h-4 w-4" />
                      This is your public display picture.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
