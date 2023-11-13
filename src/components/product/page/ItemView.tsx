import ItemBox from "./ItemBox";
import ItemVariant from "./ItemVariant";
import ItemSpecsBox from "./ItemSpecsBox";
import { Product as ProductType } from "@/database/aggregations/productPage";

interface ItemViewProps {
  product: ProductType | undefined;
  userRating: number;
}

export default function ItemView({
  product,
  userRating,
}: ItemViewProps): React.ReactElement {
  return (
    <section className="flex flex-col gap-4">
      <ItemBox product={product} userRating={userRating} />
      <ItemSpecsBox product={product} />
      <div>
        <span className="text-2xl font-bold">More Info :</span>
        <p className="indent-12">
          {product ? product?.moreInfo : "Nothing to show here"}
        </p>
      </div>
    </section>
  );
}
