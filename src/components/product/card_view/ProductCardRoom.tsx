import ProductCard from "../card/ProductCard";

export default function ProductProductCardRoom({
  cardsContent,
}: {
  cardsContent: CardContent[];
}) {
  return (
    <section className="my-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 2xl:grid-cols-8 gap-4">
      {cardsContent?.length === 0 ? (
        <p>Nothing To Show You Here</p>
      ) : (
        cardsContent.map((cardContent) => (
          <ProductCard
            key={cardContent.id}
            cardContent={cardContent}
            size={"w-full"}
          />
        ))
      )}
    </section>
  );
}
