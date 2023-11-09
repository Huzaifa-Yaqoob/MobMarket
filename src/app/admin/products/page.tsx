import ProductDataTable from "@/components/admin/product/ProductDataTable";
import { productColumns } from "@/components/admin/product/ProductColumns";

export default function AdminProductPage(): React.ReactElement {
  const data = [
    {
      _id: "1",
      img: "/products/Apple-iPhone-11-PNG-Image.png",
      name: "Apple 12",
      price: 100,
      stock: 20,
      rating: 2,
      purchases: 4,
    },
    {
      _id: "2",
      img: "/products/Apple-iPhone-12-PNG-Transparent-HD-Photo.png",
      name: "Apple",
      price: 1000,
      stock: 12,
      rating: 3,
      purchases: 4,
    },
    {
      _id: "3",
      name: "Apple 12",
      img: "/products/Apple-iPhone-11-PNG-Image.png",
      price: 500,
      stock: 100,
      rating: 5,
      purchases: 4,
    },
  ];
  return (
    <div className="my-container">
      <ProductDataTable data={data} columns={productColumns} />
    </div>
  );
}
