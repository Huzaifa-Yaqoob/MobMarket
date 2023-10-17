import { BaggageClaim } from "lucide-react";
import Link from "next/link";
import CartSheet from "./CartSheet";
import { SearchBar } from "./SearchBar";
import FilterSheet from "./FilterSheet";

export default function SecondaryNavbar(): React.ReactElement {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="">
        <SearchBar />
      </div>
      <div className="flex items-center gap-2 text-lg ">
        <FilterSheet />
        <CartSheet />
        <Link href="/order">
          <BaggageClaim />
        </Link>
      </div>
    </div>
  );
}
