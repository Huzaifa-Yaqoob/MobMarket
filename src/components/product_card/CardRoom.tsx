import Card from "./Card";

export default function CardRoom({
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
          <Card
            key={cardContent.id}
            cardContent={cardContent}
            size={"flex-grow"}
          />
        ))
      )}
    </section>
  );
}
