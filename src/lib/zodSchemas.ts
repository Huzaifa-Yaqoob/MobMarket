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

export const orderFormSchema = z.object({
  username: z.string().min(3).max(50),
  phone: z
    .string()
    .regex(
      new RegExp(/^03[0-9]{9}$/),
      "Please enter valid Pakistani phone number e.g., 03123456789"
    ),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});

export const editReviewFormSchema = z.object({
  rating: z.coerce.number(),
});
