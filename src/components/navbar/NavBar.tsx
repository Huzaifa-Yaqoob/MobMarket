import Image from "next/image";
import Link from "next/link";
import NavLinks from "./p_nav_components/NavLinks";
import RegisterModal from "./forms/RegisterModal";
import Profile from "./p_nav_components/Profile";
import ThemeModeToggler from "./p_nav_components/ThemeModeToggler";
import NavSheet from "./p_nav_components/NavSheet";
import SecondaryNavbar from "./secondary_navbar/SecondaryNavbar";

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
];

export default function NavBar() {
  return (
    <nav className="top-0 sticky shadow-lg z-10">
      <section className="flex justify-between items-center bg-background my-container top-0 sticky shadow z-10">
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
          <Profile />
          {/* <RegisterModal /> */}
        </div>
      </section>
      <section className="bg-accent text-accent-foreground my-container">
        <SecondaryNavbar />
      </section>
    </nav>
  );
}
