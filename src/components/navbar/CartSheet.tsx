"use client";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CardList from "../product/card_view/CardList";

export default function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex gap-4">
            <ShoppingCart /> Your Cart
          </SheetTitle>
          <SheetDescription>
            Items are not save for permanently here.
          </SheetDescription>
        </SheetHeader>
        <CardList />
      </SheetContent>
    </Sheet>
  );
}
