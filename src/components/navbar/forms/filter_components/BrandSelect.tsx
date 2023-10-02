import { Input } from "@/components/ui/input";
import Select from "react-select";

export default function BrandSelect({
  field,
  option,
}: {
  field: any;
  option: SelectItem[];
}) {
  // console.log(field);

  return (
    <Select
      {...field}
      isMulti
      placeholder="Select..."
      name="brands"
      options={option}
      unstyled
      classNames={{
        control: (state) => {
          const fs = state.isFocused ? "border-primary" : "";
          return `${fs} border bg-input text-foreground rounded p-2`;
        },
        valueContainer: () =>
          "flex flex-wrap gap-2 text-sm text-primary-foreground",
        indicatorsContainer: () => "space-x-1",
        clearIndicator: () => "hover:text-destructive cursor-pointer",
        dropdownIndicator: () => "hover:text-primary cursor-pointer",
        menu: () => "bg-input rounded mt-2 p-2",
        menuList: () => "flex flex-wrap gap-2 text-sm text-primary-foreground",
        option: () => "bg-primary p-1 rounded max-w-fit",
        multiValue: () => "bg-background p-1 space-x-1 rounded max-w-fit",
        multiValueLabel: () => "bg-primary px-1 rounded-sm",
        multiValueRemove: () => "hover:text-destructive",
        placeholder: () => "text-muted-foreground",
        indicatorSeparator: () => "bg-muted-foreground",
      }}
    />
  );
}
