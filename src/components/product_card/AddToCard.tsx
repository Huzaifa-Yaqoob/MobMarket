import { ShoppingCart, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function AddToCard() {
  return (
    <Button className="text-success bg-background hover:bg-success hover:text-background">
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add To Cart
    </Button>
  );
}
