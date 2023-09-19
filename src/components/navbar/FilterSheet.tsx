import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function FilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SlidersHorizontal />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex gap-4">
            <SlidersHorizontal /> Filter Out Your Product:
          </SheetTitle>
          <SheetDescription>
            Press a submit button ro get result.
          </SheetDescription>
        </SheetHeader>
        abcg
      </SheetContent>
    </Sheet>
  );
}
