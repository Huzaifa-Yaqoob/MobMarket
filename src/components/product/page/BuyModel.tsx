import { WalletCards } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BuyForm from "./form/BuyForm";

export default function BuyModel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="animate-wiggle animate-infinite animate-delay-[2000ms] shadow shadow-primary">
          <WalletCards className="mr-2 h-4 w-4" />
          Make Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <BuyForm />
      </DialogContent>
    </Dialog>
  );
}
