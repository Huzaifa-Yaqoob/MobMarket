import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardRoom from "../components/product/card_view/CardRoom";
import CardSlab from "@/components/product/card_view/CardSlab";
import Banner from "@/components/banner/Banner";

const cardsContent: CardContent[] | [] = [
  {
    id: "123443",
    name: "Iphone 12 pro max",
    price: 1000,
    status: "In Stock",
    rating: 4.5,
    imageUrl: "/products/Apple-iPhone-11-PNG-Image.png",
    sale: {
      saleName: "Apple Sale",
      salePrice: 800,
      saleEndTime: "Tomorrow",
    },
    info: {
      processor: "A32",
      ram: "6Gb",
      storage: "128Gb",
      camera: "f/16Mp, b/50Mp",
    },
  },
];

const cardSlabInfo1: Link = {
  name: "Latest Phone",
  href: "/latest/",
};
const cardSlabInfo2: Link = {
  name: "Top Rated Phone",
  href: "popular/",
};

export default function HomePage() {
  return (
    <>
      <article className="mt-4 sm:mx-20 md:mx-40">
        <Banner />
      </article>
      <main className="">
        <CardSlab cardsContent={cardsContent} cardSlabInfo={cardSlabInfo1} />
        <CardSlab cardsContent={cardsContent} cardSlabInfo={cardSlabInfo2} />
      </main>
    </>
  );
}
