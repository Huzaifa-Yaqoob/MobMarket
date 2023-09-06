import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";

const links: Link[] = [{ name: "Home", href: "/" }];

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center my-container top-0 sticky shadow">
      <div className="text-primary">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"Logo.svg"} alt="Logo" width={36} height={36} />
          <strong>MobMarket</strong>
        </Link>
      </div>
      <div className=" text-lg space-x-16">
        <NavLinks links={links} />
        <Button>Log In</Button>
      </div>
    </nav>
  );
}
