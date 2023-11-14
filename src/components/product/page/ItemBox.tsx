import AddToCart from "../AddToCart";
import StockStatus from "../StockStatus";
import ItemRating from "./ItemRating";
import ItemPrice from "../ItemPrice";
import ItemVariant from "./ItemVariant";
import { Product as ProductType } from "@/database/aggregations/productPage";

const images: { variantName: string; image: TImage }[] = [
  {
    variantName: "white",
    image: {
      url: "/products/Apple-iPhone-11-PNG-Image.png",
      alt: "iPhone11",
      name: "white",
    },
  },
];
export default function ItemBox({
  product,
  userRating,
}: {
  product: ProductType | undefined;
  userRating: number;
}): React.ReactElement {
  const cartData = {
    productId: product?._id.toString() || "",
    name: product?.name || "",
    price: product?.price || 0,
    imageUrl: "/product/" + product?.picture || "blue.png",
  };

  const variants: { variantName: string; image: TImage }[] = [
    {
      variantName: "default",
      image: {
        url: "/product/" + product?.picture || "blue.png",
        alt: product?.name || "",
        name: "default",
      },
    },
  ];

  if (product) {
    product.variant.forEach((element) => {
      variants.push({
        variantName: element.name,
        image: {
          url: "/product/" + product?.picture,
          alt: element.name,
          name: element.name,
        },
      });
    });
  }

  return (
    <section className="mt-4 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <ItemVariant variants={variants} />
        <div className="flex flex-col justify-between gap-2">
          <h1 className="text-2xl font-semibold">
            {product ? product.name : "Phone"}
          </h1>
          <ItemPrice product={product} />
          <AddToCart cartData={cartData} />
        </div>
      </div>
      <div className="flex flex-row md:flex-col justify-between items-end">
        <StockStatus
          status={
            product
              ? product.stock > 0
                ? "In Stock"
                : "Out of Stock"
              : "undefined"
          }
        />
        <ItemRating userRating={userRating} product={product} />
      </div>
    </section>
  );
}
