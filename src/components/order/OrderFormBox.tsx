import Image from "next/image";
import { Separator } from "../ui/separator";

export default function OrderFormBox() {
  return (
    <div className="flex gap-2">
      <Image
        src={"/products/Apple-iPhone-11-PNG-Image.png"}
        alt="Apple-iPhone-11-PNG-Image.png"
        width={100}
        height={150}
        className=""
      />
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-2">
        <span className="text-lg font-bold">Iphone 11 Pro</span>
        <span>Bill : $1000</span>
      </div>
    </div>
  );
}
