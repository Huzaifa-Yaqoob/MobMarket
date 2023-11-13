import Link from "next/link";
import Orders from "./actions_cards/Orders";
import Brand from "./actions_cards/Brand";
import Products from "./actions_cards/Products";
import OthersActions from "./actions_cards/OthersActions";

const adminActions: Link[] = [{ name: "Add Product", href: "/" }];

export default function AdminActions(): React.ReactElement {
  return (
    <section className="my-container flex flex-col md:flex-row justify-center items-center gap-4 ">
      <Link href={"/admin/products"}>
        <Products />
      </Link>
      <Link href={"/admin/orders"}>
        <Orders />
      </Link>
      <Link href={"/admin/brands"}>
        <Brand />
      </Link>
    </section>
  );
}
