import ProductCard from "./Card";

export default function CardRoom() {
  return (
    <section className="grid grid-cols-3 gap-4 my-container bg-red-300">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}
