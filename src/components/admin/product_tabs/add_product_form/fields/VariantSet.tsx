import * as z from "zod";
import { addProductFormSchema } from "@/lib/zodSchemas";

interface VariantSetProps {
  field: {
    name: string;
    value: z.infer<typeof addProductFormSchema>["variant"];
  };
  // option: SelectItem[];
}

export default function VariantSet({ field }: VariantSetProps) {
  return <div>VariantSet</div>;
}
