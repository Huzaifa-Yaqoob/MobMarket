import { ShoppingBasket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function OrderModal() {
  return (
    <Dialog>
      <DialogTrigger className="w-full flex items-center space-x-2">
        <ShoppingBasket />
        <span>Orders</span>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="text-lg text-primary">
          Welcome To MobMarket
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}