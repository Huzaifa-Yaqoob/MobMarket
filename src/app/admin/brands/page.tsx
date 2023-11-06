import BrandsDataTable from "@/components/admin/brand/BrandsDataTable";
import {
  brandColumns,
  BrandTable,
} from "@/components/admin/brand/BrandsColumns";

const data: BrandTable[] = [
  { id: "1", name: "Apple", hide: false, productsCount: 10 },
  { id: "2", name: "Samsung", hide: false, productsCount: 15 },
  { id: "3", name: "Google", hide: false, productsCount: 8 },
  { id: "4", name: "OnePlus", hide: true, productsCount: 7 },
];

export default function page(): React.ReactElement {
  return (
    <div className="my-container">
      <BrandsDataTable columns={brandColumns} data={data} />
    </div>
  );
}
