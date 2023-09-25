import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function SaleView({ sale }: { sale: Sale }) {
  if (sale === null) {
    return null;
  }
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="bg-danger text-foreground rounded-sm px-1">
          Sales ends in <time>{sale.saleEndTime}</time>
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="text-xs w-fit font-thin">
        <h3 className="text-base">{sale.saleName}</h3>
        <span>Time Remaining {sale.saleEndTime}</span>
      </HoverCardContent>
    </HoverCard>
  );
}
