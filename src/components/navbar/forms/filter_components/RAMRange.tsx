import * as z from "zod";
import ReactSlider from "react-slider";
import { filterProductsFormSchema } from "@/lib/zodSchemas";

type RAMRangeProps = {
  field: {
    name: string;
    value: z.infer<typeof filterProductsFormSchema>["priceRange"];
  };
  ramRange: number[];
};

export default function RAMRange({ field, ramRange }: RAMRangeProps) {
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
        markClassName="w-2 h-2 rounded-full bg-background border border-primary"
        marks={[2, 4, 6, 8, 10, 12, 14, 16]}
        min={ramRange[0]}
        max={ramRange[1]}
        step={2}
        minDistance={2}
        withTracks={true}
        pearling
      />
    </div>
  );
}
