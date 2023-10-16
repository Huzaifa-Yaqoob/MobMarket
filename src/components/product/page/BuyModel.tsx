import { WalletCards } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BuyForm from "./form/BuyForm";
import OrderFormBox from "@/components/order/OrderFormBox";
import { Separator } from "@/components/ui/separator";

export default function BuyModel(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="animate-wiggle animate-infinite animate-delay-[2000ms] shadow shadow-primary">
          <WalletCards className="mr-2 h-4 w-4" />
          Make Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="mt-2 space-y-1">
          <OrderFormBox />
          <Separator />
          <BuyForm id={"abcd"} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
