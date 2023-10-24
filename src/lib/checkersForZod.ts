import { ZodIssueCode, RefinementCtx } from "zod";

// Helper function for zod schemas that will add issue if input number is equal to zero
export function checkIfZero(val: number, ctx: RefinementCtx) {
  if (val === 0) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "Invalid battery",
    });
  }
}

// Helper function for zod schemas that will add issue if input is equal to null
export function checkIfNull(val: any, ctx: RefinementCtx) {
  if (val === null) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "Invalid battery",
    });
  }
}
