import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function BrandItem({
  brands,
}: {
  brands: SelectItem[];
}): React.ReactElement {
  const pathName = usePathname();

  return (
    <Command className="h-full">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>Sorry we don`t have that brand</CommandEmpty>
        <CommandGroup heading="Brands" className="space-y-2">
          {brands.map((brand) => (
            <Link href={`/brand/${brand._id}`} key={brand._id}>
              <CommandItem
                className={
                  pathName.includes(brand.label)
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {brand.label}
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
