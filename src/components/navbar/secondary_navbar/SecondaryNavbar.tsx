import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import CartSheet from "./CartSheet";
import { SearchBar } from "./SearchBar";
import FilterSheet from "./FilterSheet";

export default function SecondaryNavbar() {
  return (
    <div className="flex items-center justify-between ">
      <div className="">
        <SearchBar />
      </div>
      <div className="flex items-center space-x-4 text-lg ">
        <FilterSheet />
        <CartSheet />
        <Link href="/">
          <ShoppingBasket />
        </Link>
      </div>
    </div>
  );
}
