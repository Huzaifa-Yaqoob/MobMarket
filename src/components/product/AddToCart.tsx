"use client";
import { ShoppingCart, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function AddToCart() {
  return (
    <Button className="text-success bg-transparent hover:bg-success hover:text-background px-1 rounded border border-success hover:border-transparent w-fit">
      <ShoppingCart className="mr-1 h-4 w-4" />
      Add To Cart
    </Button>
  );
}
