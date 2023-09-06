import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductsRoom from "@/components/product/ProductsRoom";

export default function LandingPage() {
  return (
    <main className="my-container">
      <ProductsRoom />
    </main>
  );
}
