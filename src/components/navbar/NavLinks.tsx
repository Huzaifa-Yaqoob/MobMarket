"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import BrandItem from "./BrandItem";
import LinkItem from "./LinkItem";

const brands: SelectItem[] = [
  { id: "abc", name: "Oppo", value: "" },
  { id: "abc", name: "Vivo", value: "" },
  { id: "abc", name: "Samsung", value: "" },
  { id: "abc", name: "Xiomi", value: "" },
  { id: "abc", name: "Iphone", value: "" },
  { id: "abc", name: "Realme", value: "" },
];

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <NavigationMenu>
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
