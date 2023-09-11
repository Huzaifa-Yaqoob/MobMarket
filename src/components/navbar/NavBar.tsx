import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import RegisterModal from "./RegisterModal";
import ProfilePopover from "./ProfilePopover";
import ThemeModeToggler from "./ThemeModeToggler";
import NavSheet from "./NavSheet";

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const brands: SelectItem[] = [
  { id: "abc", name: "Oppo", value: "" },
  { id: "abc", name: "Vivo", value: "" },
  { id: "abc", name: "Samsung", value: "" },
  { id: "abc", name: "Xiomi", value: "" },
  { id: "abc", name: "Iphone", value: "" },
  { id: "abc", name: "Realme", value: "" },
  { id: "abc", name: "Realme", value: "" },
  { id: "abc", name: "Realme", value: "" },
  { id: "abc", name: "Realme", value: "" },
];

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-background my-container top-0 sticky shadow z-10">
      <div className="text-primary">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"Logo.svg"} alt="Logo" width={36} height={36} />
          <strong>MobMarket</strong>
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-1 md:space-x-4">
        <ThemeModeToggler />
        <NavLinks links={links} brands={brands} />
        <div className="md:hidden">
          <NavSheet links={links} brands={brands} />
        </div>
        <ProfilePopover />
        {/* <RegisterModal /> */}
      </div>
    </nav>
  );
}
