"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import BrandItem from "./BrandItem";
import LinkItem from "./LinkItem";

export default function NavLinks({
  links,
  brands,
}: {
  links: Link[];
  brands: SelectItem[];
}) {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-max">
            <BrandItem brands={brands} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <LinkItem links={links} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
