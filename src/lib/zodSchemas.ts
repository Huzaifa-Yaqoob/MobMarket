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
  phoneNumber: z
    .string()
    .regex(
      new RegExp(/^03[0-9]{9}$/),
      "Please enter valid Pakistani phone number e.g., 03123456789"
    ),
  geoLocation: z.object({
    lat: z.coerce.number().refine((lat) => lat >= -90 && lat <= 90, {
      message: "Latitude must be between -90 and 90 degrees",
    }),
    lng: z.coerce.number().refine((lng) => lng >= -180 && lng <= 180, {
      message: "Longitude must be between -180 and 180 degrees",
    }),
  }),
  productID: z.string(),
  bill: z.number(),
  variant: z.string(),
});

export const editReviewFormSchema = z.object({
  rating: z.coerce.number(),
});
