import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import CartModal from "./CartModal";
import { SearchBar } from "./SearchBar";

export default function SecondaryNavbar() {
  return (
    <div className="flex items-center justify-between ">
      <div className="">
        <SearchBar />
      </div>
      <div className="flex items-center space-x-4 text-lg ">
        <Link href={"/"}>
          <SlidersHorizontal />
        </Link>
        <CartModal />
      </div>
    </div>
  );
}
