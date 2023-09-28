import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import ItemPrice from "../ItemPrice";

export default function HorizontalProductCard({
  cardContent,
}: {
  cardContent: CardContent;
}) {
  return (
    <div className="flex items-center justify-between gap-2 py-2 bg-secondary rounded">
      <div className="h-full">
        <Image
          src={cardContent.imageUrl}
          alt={cardContent.name}
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <Link href={"/"} className="w-full">
        <div className="text-primary">
          <h4>{cardContent.name}</h4>
        </div>
        <ItemPrice />
      </Link>
      <div className="hover:text-danger px-2 cursor-pointer">
        <Trash2 className="mr-2 h-4 w-4" />
      </div>
    </div>
  );
}
