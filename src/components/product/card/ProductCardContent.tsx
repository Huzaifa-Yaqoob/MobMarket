import { CardContent } from "../../ui/card";
import ItemPrice from "../ItemPrice";
import StockStatus from "../StockStatus";

export default function ProductCardContent({
  cardContent,
}: {
  cardContent: CardContent;
}): React.ReactElement {
  return (
    <CardContent className="flex flex-col items-center text-base py-0 px-0">
      <ItemPrice />
      <StockStatus status={"Out of Stock"} />
    </CardContent>
  );
}
