import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductsRoom from "@/components/product/ProductsRoom";

export default function LandingPage() {
  return (
    <main className="my-4 px-4 md:px-12">
      <ProductsRoom />
    </main>
  );
}
