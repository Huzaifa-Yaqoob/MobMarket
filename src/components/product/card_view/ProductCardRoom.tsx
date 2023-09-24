import ProductCard from "../card/ProductCard";

export default function ProductProductCardRoom({
  cardsContent,
}: {
  cardsContent: CardContent[];
}) {
  return (
    <section className="my-container flex flex-wrap gap-4">
      {cardsContent?.length === 0 ? (
        <p>Nothing To Show You Here</p>
      ) : (
        cardsContent.map((cardContent) => (
          <ProductCard
            key={cardContent.id}
            cardContent={cardContent}
            size={"flex-grow"}
          />
        ))
      )}
    </section>
  );
}
