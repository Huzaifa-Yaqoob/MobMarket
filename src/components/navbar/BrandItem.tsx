"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Separator } from "../ui/separator";

export default function BrandItem({ brands }: { brands: SelectItem[] }) {
  const pathName = usePathname();

  return (
    <Command className="h-full">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>Sorry we don`t have that brand</CommandEmpty>
        <CommandGroup heading="Brands" className="space-y-2">
          {brands.map((brand) => (
            <Link href={`/${brand.id}`} key={brand.id}>
              <CommandItem
                className={
                  pathName.includes(brand.name)
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {brand.name}
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
