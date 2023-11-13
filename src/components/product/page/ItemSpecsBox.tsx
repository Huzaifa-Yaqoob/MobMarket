import { Database, MemoryStick, BatteryFull, Calendar } from "lucide-react";
import { Product as ProductType } from "@/database/aggregations/productPage";

export default function ItemSpecsBox({
  product,
}: {
  product: ProductType | undefined;
}): React.ReactElement {
  return (
    <section className="flex items-center w-full mt-8">
      <div className="flex flex-col items-center text-xs flex-grow ">
        <MemoryStick className="text-primary" />
        <span>RAM</span>
        <span>{product ? product.ram : "000"}Gb</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <Database className="text-primary" />
        <span>Storage</span>
        <span>{product ? product.storage : "000"}Gb</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <BatteryFull className="text-primary" />
        <span>Battery</span>
        <span>{product ? product.battery : "000"}mAh</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <Calendar className="text-primary" />
        <span>Year Released</span>
        <span>{product ? product.yearReleased : "000"}</span>
      </div>
    </section>
  );
}
