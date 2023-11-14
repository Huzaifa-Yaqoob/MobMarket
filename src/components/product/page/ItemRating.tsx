import { getServerSession } from "next-auth";
import { Star } from "lucide-react";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { Separator } from "@/components/ui/separator";
import EditReviewModel from "./EditReviewModel";
import { Product as ProductType } from "@/database/aggregations/productPage";

export default async function ItemRating({
  product,
  userRating,
}: {
  product: ProductType | undefined;
  userRating: number;
}): Promise<React.ReactElement> {
  const session = await getServerSession(authOption);
  return (
    <div className="text-xs flex flex-col gap-2">
      {session ? (
        <>
          <UsersReview
            rating={userRating}
            productId={product ? product._id.toString() : ""}
          />
          <Separator />
        </>
      ) : (
        ""
      )}

      <div className="flex gap-1">
        <div className="flex items-center">
          <Star className="mr-2 h-4 w-4 text-royal fill-royal" />
          <span>5/{product?.averageRating ? product?.averageRating : "0"}</span>
        </div>
        <Separator orientation="vertical" />
        <span className="text-muted-foreground">
          Total reviews: {product ? product?.ratingCount : "0"}
        </span>
      </div>
    </div>
  );
}

function UsersReview({
  rating,
  productId,
}: {
  rating: number;
  productId: string;
}): React.ReactElement {
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
        <EditReviewModel userRating={rating} productId={productId} />
      </div>
      <span className="flex gap-1">{starComponentsArray}</span>
    </div>
  );
}
