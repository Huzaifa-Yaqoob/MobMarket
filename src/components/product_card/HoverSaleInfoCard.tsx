import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverSaleInfoCard({ sale }: { sale: Sale }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Info className="mr-2 h-4 w-4 text-info" />
      </HoverCardTrigger>
      <HoverCardContent className="text-xs w-fit font-thin flex flex-col">
        <h3>{sale?.saleName}</h3>
        <span>Sale ends in {sale?.saleEndTime}</span>
        <span>75% off</span>
      </HoverCardContent>
    </HoverCard>
  );
}
