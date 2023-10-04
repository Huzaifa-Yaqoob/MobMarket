import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Status from "./OrderStatus";

export default function OrderCard() {
  return (
    <Card className="w-full">
      <Link href="/">
        <CardHeader className="flex flex-row gap-2">
          <Image
            src="/products/Apple-iPhone-11-PNG-Image.png"
            alt="item"
            width={120}
            height={150}
            className="object-cover"
          />
          <div className="flex flex-col gap-2">
            <CardTitle>Iphone 11 pro</CardTitle>
            <span>Bill: 15000</span>
            <span className="text-muted-foreground">12-14-2023</span>
            <Status status={"Delayed"} />
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
}
