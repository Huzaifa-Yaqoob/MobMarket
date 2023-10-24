import { Metadata } from "next";
import CardRoom from "@/components/product/card_view/ProductCardRoom";
import Pagination from "@/components/common/Pagination";

export const metadata: Metadata = {
  title: "MobMarket | Popular",
};

export default function Popular(): React.ReactElement {
  return (
    <div>
      <Pagination />
    </div>
  );
}
