import * as z from "zod";

// User related Schemas
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

// Admin related schemas
export const addProductFormSchema = z.object({
  picture: z
    .union([z.array(z.instanceof(File)), z.null()])
    .superRefine((val, ctx) => {
      if (val === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Image is required",
        });
      }
    }),
  name: z.string().nonempty().max(50),
  price: z.coerce
    .number()
    .nonnegative()
    .superRefine((val, ctx) => {
      if (val === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid storage",
        });
      }
    }),
  brand: z
    .union([
      z.object({
        value: z.string().nonempty(),
        label: z.string().nonempty(),
      }),
      z.null(),
    ])
    .superRefine((val, ctx) => {
      if (val === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Brand cannot be empty",
        });
      }
    }),
  yearReleased: z
    .union([
      z.object({
        value: z.number(),
        label: z.number(),
      }),
      z.null(),
    ])
    .superRefine((val, ctx) => {
      if (val === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Brand cannot be empty",
        });
      }
    }),
  ram: z.coerce
    .number()
    .nonnegative()
    .superRefine((val, ctx) => {
      if (val === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid Ram",
        });
      }
    }),
  storage: z.coerce
    .number()
    .nonnegative()
    .superRefine((val, ctx) => {
      if (val === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid storage",
        });
      }
    }),
  battery: z.coerce
    .number()
    .nonnegative()
    .superRefine((val, ctx) => {
      if (val === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid battery",
        });
      }
    }),
  stock: z.coerce
    .number()
    .nonnegative()
    .superRefine((val, ctx) => {
      if (val === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid battery",
        });
      }
    }),
  moreInfo: z.string().nonempty().max(500),
  variant: z
    .union([
      z.array(
        z.object({
          name: z.string(),
          picture: z.union([z.array(z.instanceof(File)), z.null()]),
        })
      ),
      z.null(),
    ])
    .superRefine((val, ctx) => {
      if (val === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "At least one variant is required.",
        });
      } else if (val !== null) {
        val.forEach((v, i) => {
          if (v.name === "" && v.picture === null) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `Enter values at variant number ${i + 1}`,
            });
          } else if (v.name === "") {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `name is required at variant number ${i + 1}`,
            });
          } else if (v.picture === null) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `picture is required at variant number ${i + 1}`,
            });
          }
        });
      }
    }),
});
