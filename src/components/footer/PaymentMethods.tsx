import Image from "next/image";
import { Coins } from "lucide-react";

export default function PaymentMethods() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex items-center gap-1">
        <h3 className="font-bold">Payment Methods</h3>
        <span className="text-xs">(We Accept)</span>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          alt="paypal"
          src={"payment_methods/paypal.svg"}
          width={40}
          height={40}
        />
        <Image
          alt="paypal"
          src={"payment_methods/jazzcash.svg"}
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
