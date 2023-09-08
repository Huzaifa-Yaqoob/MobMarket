import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BrandItem from "./BrandItem";

export default function BrandAccordion({ brands }: { brands: SelectItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="py-2 px-2">Brands</AccordionTrigger>
        <AccordionContent>
          <BrandItem brands={brands} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
