import ProductCard from "./ProductCard";

export default function ProductsRoom() {
  return (
    <section className="grid grid-cols-3 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}
