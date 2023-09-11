import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardRoom from "../components/product_card/CardRoom";
import CardSlab from "@/components/product_card/CardSlab";
import Banner from "@/components/banner/Banner";

export default function HomePage() {
  return (
    <>
      <article className="">
        <Banner />
      </article>
      <main className="">
        <CardSlab />
      </main>
    </>
  );
}
