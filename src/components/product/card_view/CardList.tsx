import HorizontalCard from "../card/HorizontalCard";

const cardsContent: CardContent[] = [
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

export default function CardList() {
  return (
    <div className="flex flex-col gap-2 overflow-auto h-full">
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
      <HorizontalCard cardContent={cardsContent[0]} />
    </div>
  );
}
