"use client";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CardList from "../../product/card_view/ProductCardList";

export default function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent className="w-fit">
        <SheetHeader className="mt-4">
          <SheetTitle className="flex gap-4">
            <ShoppingCart /> Your Cart
          </SheetTitle>
          <SheetDescription>
            Items are not save here permanently.
          </SheetDescription>
        </SheetHeader>
        <Separator className="mt-1 mb-1" />
        <CardList />
      </SheetContent>
    </Sheet>
  );
}
