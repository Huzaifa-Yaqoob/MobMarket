import * as z from "zod";
import { checkIfZero, checkIfNull } from "./checkersForZod";

// schemas for testing backend

export const testSchema = z.any();

// User related Schemas

// Schema for registering user
export const registerUserFormSchema = z.object({
  email: z.string().nonempty({ message: "email is required." }).email(),
  username: z
    .string()
    .nonempty({ message: "username is required." })
    .min(3, { message: "Username must be at least 3 characters." })
    .max(50, { message: "Username must be less than 50 characters." }),
  password: z
    .string()
    .nonempty({ message: "password is required." })
    .min(8, { message: "Password must be at least 8 characters." })
    .max(64, { message: "Password must be at most 64 characters." }),
});

export const logInUserFormSchema = z.object({
  email: z.string().nonempty({ message: "email is required." }).email(),
  password: z
    .string()
    .nonempty({ message: "password is required." })
    .min(8, { message: "Password must be at least 8 characters." })
    .max(32, { message: "Password must be at most 32 characters." }),
});

// Schema for validate username when editing the username
export const editUsernameFormSchema = z.object({
  username: z.string().min(3).max(50),
});

// Schema for filtering the product while searching for products
export const filterProductsFormSchema = z.object({
  brands: z
    .array(z.object({ label: z.string(), value: z.string(), _id: z.string() }))
    .nonempty(),
  priceRange: z.array(z.coerce.number()).length(2),
  RAMRange: z.array(z.coerce.number()).max(2),
});

// Schema for creating order
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
  rating: z.coerce.number().min(1).max(5),
  productId: z.string(),
});

// Admin related schemas

// Schema for adding brands
export const addBrandSchema = z.object({
  name: z.string().nonempty(),
});

// Schema for editing brands name and hidden status
export const editBrandSchema = z.object({
  name: z.string().nonempty(),
  hide: z.coerce.boolean(),
});

// Schema for editing stock of product
export const editStockSchema = z.object({
  stock: z.coerce.number().min(0),
});

// Schema for validation of adding product details by admin
export const addProductFormSchema = z.object({
  picture: z
    .union([z.array(z.instanceof(File)), z.null()])
    .superRefine(checkIfNull),
  name: z.string().nonempty().max(50),
  price: z.coerce.number().nonnegative().superRefine(checkIfZero),
  brand: z
    .union([
      z.object({
        value: z.string().nonempty(),
        label: z.string().nonempty(),
      }),
      z.null(),
    ])
    .superRefine(checkIfNull),
  yearReleased: z
    .union([
      z.object({
        value: z.number(),
        label: z.number(),
      }),
      z.null(),
    ])
    .superRefine(checkIfNull),
  ram: z.coerce.number().nonnegative().superRefine(checkIfZero),
  storage: z.coerce.number().nonnegative().superRefine(checkIfZero),
  battery: z.coerce.number().nonnegative().superRefine(checkIfZero),
  stock: z.coerce.number().nonnegative().superRefine(checkIfZero),
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
    // refining the value if it`s null or if name or image of any  variant is null
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
