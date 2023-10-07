import * as z from "zod";
import ReactSlider from "react-slider";
import { filterProductsFormSchema } from "@/lib/zodSchemas";

type PriceRangeProps = {
  field: {
    name: string;
    value: z.infer<typeof filterProductsFormSchema>["priceRange"];
  };
  priceRange: number[];
};

export default function PriceRange({ field, priceRange }: PriceRangeProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-4">
        <span>
          min: <span className="text-primary">{field.value[0]}</span>
        </span>
        <span>
          max: <span className="text-primary">{field.value[1]}</span>
        </span>
      </div>
      <ReactSlider
        {...field}
        className="flex items-center"
        thumbClassName="w-5 h-5 bg-background border-2 border-primary rounded-full"
        trackClassName="tr"
        thumbActiveClassName="bg-primary focus:outline-red-300"
        min={priceRange[0]}
        max={priceRange[1]}
        withTracks={true}
        pearling
      />
    </div>
  );
}
