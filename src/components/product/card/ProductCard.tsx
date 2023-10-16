import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AddToCart from "../AddToCart";
import ProductCardContent from "./ProductCardContent";

export default function ProductCard({
  cardContent,
  size,
}: {
  cardContent: CardContent;
  size: string;
}): React.ReactElement {
  return (
    <Card className={`rounded flex flex-col items-center shadow card ${size}`}>
      <div className="ribbon">
        <span>Sale</span>
      </div>
      <Link
        href={`/product/${cardContent.id}`}
        className="flex flex-col items-center mt-2"
      >
        <Image
          src={cardContent.imageUrl}
          alt={cardContent.name}
          width={150}
          height={150}
          className="object-cover"
        />
        <CardHeader className="flex flex-col items-center py-0 px-0">
          <CardTitle className="flex items-end gap-2 text-base">
            {cardContent.name}
          </CardTitle>
        </CardHeader>
        <ProductCardContent cardContent={cardContent} />
      </Link>
      <CardFooter className="py-1 px-0">
        <AddToCart />
      </CardFooter>
    </Card>
  );
}
