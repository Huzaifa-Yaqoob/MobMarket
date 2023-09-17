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
      <DialogTrigger>
        <ShoppingCart />
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="text-lg text-primary">
          Welcome To MobMarket
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
