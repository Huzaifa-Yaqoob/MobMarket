import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import RegisterModal from "./RegisterModal";
import ProfilePopover from "./ProfilePopover";
import ThemeModeToggler from "./ThemeModeToggler";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center my-container top-0 sticky shadow">
      <div className="text-primary">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"Logo.svg"} alt="Logo" width={36} height={36} />
          <strong>MobMarket</strong>
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <ThemeModeToggler />
        <NavLinks />
        <ProfilePopover />
        {/* <RegisterModal /> */}
      </div>
    </nav>
  );
}
