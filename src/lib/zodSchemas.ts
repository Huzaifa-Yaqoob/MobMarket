import { Label } from "@radix-ui/react-label";
import * as z from "zod";

export const editUsernameFormSchema = z.object({
  username: z.string().min(3).max(50),
});

export const filterProductsFormSchema = z.object({
  brands: z
    .array(z.object({ label: z.string(), value: z.string(), _id: z.string() }))
    .nonempty(),
  priceRange: z.array(z.coerce.number()).length(2),
  RAMRange: z.array(z.coerce.number()).max(2),
});
