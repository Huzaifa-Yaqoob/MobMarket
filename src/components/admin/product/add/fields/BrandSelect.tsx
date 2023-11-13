"use client";

import { useEffect, useState } from "react";
import * as z from "zod";
import { addProductFormSchema } from "@/lib/zodSchemas";
import Select from "react-select";
import useGetBrandForUser from "@/hooks/useGetBrandsForUser";

interface BrandSelectProps {
  field: {
    name: string;
    value: z.infer<typeof addProductFormSchema>["brand"];
  };
  // option: SelectItem[];
}

interface Option {
  value: string;
  label: string;
}

export default function BrandSelect({
  field,
}: BrandSelectProps): React.ReactElement {
  const { isLoading, error, getBrands } = useGetBrandForUser();
  const [option, setOption] = useState<Option[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getBrands();
      setOption(data);
      console.log(data);
    })();
  }, []);
  return (
    <Select
      isLoading={isLoading}
      options={option}
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
