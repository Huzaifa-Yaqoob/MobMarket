import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverInfoCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Info className="mr-2 h-4 w-4 text-info" />
      </HoverCardTrigger>
      <HoverCardContent className="text-xs w-fit font-thin">
        <ul>
          <li>Processor</li>
          <li>RAM</li>
          <li>Storage</li>
          <li>Front Camera</li>
          <li>Back Camera</li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}
