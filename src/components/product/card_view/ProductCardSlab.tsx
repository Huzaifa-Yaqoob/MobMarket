import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../card/ProductCard";

export default function ProductCardSlab({
  cardsContent,
  cardSlabInfo,
}: {
  cardsContent: CardContent[];
  cardSlabInfo: Link;
}): React.ReactElement {
  return (
    <section className="py-4 text-lg flex flex-col gap-4">
      <h3 className="bg-primary text-primary-foreground px-4 py-2">
        {cardSlabInfo.name}
      </h3>
      <div className="flex gap-6 px-2 overflow-auto">
        {cardsContent?.length === 0 ? (
          <p>Nothing To Show You Here</p>
        ) : (
          cardsContent.map((cardContent) => (
            <ProductCard
              key={cardContent.id}
              cardContent={cardContent}
              size={"min-w-fit max-w-fit"}
            />
          ))
        )}
      </div>
      <div>
        <Link
          href={"/product/latest"}
          className="group text-info flex items-center px-4 text-sm w-fit"
        >
          <span>see more</span>
          <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300 mr-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
