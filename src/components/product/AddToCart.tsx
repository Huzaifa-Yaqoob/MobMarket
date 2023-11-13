"use client";

import { ShoppingCart, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

interface AddToCartProps {
  cartData: {
    productId: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

export default function AddToCart({
  cartData,
}: AddToCartProps): React.ReactElement {
  return (
    <Button className="text-success bg-transparent hover:bg-success hover:text-background px-1 rounded border border-success hover:border-transparent w-fit">
      <ShoppingCart className="mr-1 h-4 w-4" />
      Add To Cart
    </Button>
  );
}
