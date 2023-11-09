import * as z from "zod";
import { addProductFormSchema } from "@/lib/zodSchemas";
import Select from "react-select";

interface BrandSelectProps {
  field: {
    name: string;
    value: z.infer<typeof addProductFormSchema>["yearReleased"];
  };
  // option: SelectItem[];
}

interface year {
  value: number;
  label: number;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const yearOption: year[] = [];

for (let i = new Date().getFullYear(); i >= 1990; i--) {
  yearOption.push({
    value: i,
    label: i,
  });
}

export default function YearSelect({
  field,
}: BrandSelectProps): React.ReactElement {
  return (
    <Select
      options={yearOption}
      {...field}
      placeholder="Select..."
      unstyled
      isClearable
      classNames={{
        control: (state) => {
          const fs = state.isFocused
            ? "ring-2 ring-ring ring-offset-2	ring-offset-background"
            : "";
          return `${fs} border border-border text-foreground rounded p-2 `;
        },
        valueContainer: () => "flex flex-wrap gap-2 text-sm text-foreground",
        indicatorsContainer: () => "space-x-1 transition-colors",
        clearIndicator: () => "hover:text-destructive cursor-pointer",
        dropdownIndicator: () => "hover:text-primary cursor-pointer",
        menu: () => "bg-input rounded mt-2 p-2 shadow-lg",
        menuList: () => "flex flex-wrap gap-2 text-sm text-foreground",
        option: (state) => {
          const fs = state.isSelected ? "bg-primary" : "bg-transparent";
          return `border border-primary ${fs} hover:bg-primary transition-colors p-1 rounded max-w-fit`;
        },
        singleValue: () => "text-foreground",
        placeholder: () => "text-muted-foreground",
        indicatorSeparator: () => "bg-muted-foreground",
      }}
    />
  );
}
