import { SlidersHorizontal } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterProducts from "../forms/FilterProducts";

const colorOption: SelectItem[] = [
  { label: "black", value: "black", _id: "1" },
  { label: "red", value: "red", _id: "2" },
  { label: "yellow", value: "yellow", _id: "3" },
  { label: "brown", value: "brown", _id: "4" },
  { label: "blue", value: "blue", _id: "5" },
  { label: "white", value: "white", _id: "6" },
  { label: "pink", value: "pink", _id: "7" },
];

const ramRange = [2, 16];

const priceRange = [10000, 1000000];

export default function FilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <SlidersHorizontal />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="mt-4">
          <SheetTitle className="flex gap-4">
            <SlidersHorizontal /> Filter Out Your Product:
          </SheetTitle>
          <SheetDescription>
            Press a Find button ro get result.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <FilterProducts
          option={colorOption}
          ramRange={ramRange}
          priceRange={priceRange}
        />
      </SheetContent>
    </Sheet>
  );
}
