import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function LinkItem({
  links,
}: {
  links: Link[];
}): React.ReactElement {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <NavigationMenuItem key={link.name}>
          <Link href={link.href} legacyBehavior passHref>
            <NavigationMenuLink
              className={`py-2 px-4 rounded transition-colors ${
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  );
}
