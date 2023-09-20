import * as z from "zod";

export const editUsernameFormSchema = z.object({
  username: z.string().min(3).max(50),
});

export const editProfilePicFormSchema = z.object({
  file: z.instanceof(FileList),
});
