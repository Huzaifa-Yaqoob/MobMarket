import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverInfoCard({ info }: { info: Info }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Info className="mr-2 h-4 w-4 text-info" />
      </HoverCardTrigger>
      <HoverCardContent className="text-xs w-fit font-thin">
        <ul>
          <li>Processor: {info.processor}</li>
          <li>RAM: {info.ram}</li>
          <li>Storage: {info.storage}</li>
          <li>Camera: {info.camera}</li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}