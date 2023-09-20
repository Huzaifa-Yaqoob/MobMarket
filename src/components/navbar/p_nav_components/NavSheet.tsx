"use client";

import { PanelRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import BrandAccordion from "./BrandAccordion";

export default function NavSheet({
  links,
  brands,
}: {
  links: Link[];
  brands: SelectItem[];
}) {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>
          <PanelRight />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-1 mt-4">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`rounded py-2 px-2 ${
                pathName === link.href
                  ? "bg-primary text-primary-foreground"
                  : ""
              } `}
            >
              {link.name}
            </Link>
          ))}
          <BrandAccordion brands={brands} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
