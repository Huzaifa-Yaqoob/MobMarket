import { ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CartModal() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center space-x-2 w-full text-danger">
        <ShoppingCart />
        <span>Cart</span>
      </DialogTrigger>
      <DialogContent className="text-danger">
        <DialogHeader className="text-lg text-primary">
          Welcome To MobMarket
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
