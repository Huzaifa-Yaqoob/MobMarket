import { Product as ProductType } from "@/database/aggregations/productPage";

export default function ItemPrice({
  product,
}: {
  product: ProductType | undefined;
}): React.ReactElement {
  return (
    <div className="space-x-1">
      {/* <span className="strikethrough text-xl">$1500</span>
      <span className="text-lg">{product ? product.price : "000"}$</span> */}
      <span className="text-xl">{product ? product.price : "000"}$</span>
    </div>
  );
}
