import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import EditReviewModel from "./EditReviewModel";

export default function ItemRating(): React.ReactElement {
  return (
    <div className="text-xs flex flex-col gap-2">
      <UsersReview rating={3} />
      <Separator />
      <div className="flex gap-1">
        <div className="flex items-center">
          <Star className="mr-2 h-4 w-4 text-royal fill-royal" />
          <span>5/4.3</span>
        </div>
        <Separator orientation="vertical" />
        <span className="text-muted-foreground">Total reviews: 1M</span>
      </div>
    </div>
  );
}

function UsersReview({ rating }: { rating: number }): React.ReactElement {
  const starComponentsArray: JSX.Element[] = [];

  for (let i = 0; i < 5; i++) {
    starComponentsArray.push(
      <Star
        key={i}
        className={`mr-2 h-4 w-4 text-royal ${i < rating ? "fill-royal" : ""}`}
      />
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span>Your review</span>
        <EditReviewModel />
      </div>
      <span className="flex gap-1">{starComponentsArray}</span>
    </div>
  );
}
