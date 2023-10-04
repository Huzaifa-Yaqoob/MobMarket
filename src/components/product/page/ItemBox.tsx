import AddToCart from "../AddToCart";
import StockStatus from "../StockStatus";
import ItemRating from "./ItemRating";
import ItemPrice from "../ItemPrice";
import ItemVariant from "./ItemVariant";

export default function ItemBox() {
  return (
    <section className="mt-4 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <ItemVariant />
        <div className="flex flex-col justify-between gap-2">
          <h1 className="text-2xl font-semibold">Apple iPhone 11</h1>
          <ItemPrice />
          <AddToCart />
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between items-end">
        <StockStatus status={"In Stock"} />
        <ItemRating />
      </div>
    </section>
  );
}
