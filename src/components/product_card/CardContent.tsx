import { Star } from "lucide-react";
import { CardContent as ShadcnCardContent } from "../ui/card";
import SaleView from "./SaleView";
import HoverSaleInfoCard from "./HoverSaleInfoCard";

export default function CardContent({
  cardContent,
}: {
  cardContent: CardContent;
}) {
  return (
    <ShadcnCardContent className="flex flex-col items-center text-base py-0 px-0">
      <div className="text-success space-x-2 font-bold flex items-center">
        <span className="text-lg strikethrough">${cardContent.price}</span>
        <span>${cardContent.sale?.salePrice} </span>
      </div>
      <span className="text-info">{cardContent.status}</span>
    </ShadcnCardContent>
  );
}
