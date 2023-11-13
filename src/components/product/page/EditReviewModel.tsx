import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditReviewForm from "./form/EditReviewForm";

export default function EditReviewModel({
  userRating,
  productId,
}: {
  userRating: number;
  productId: string;
}): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="flex gap-0 cursor-pointer text-primary hover:underline"
      >
        <span className="text-xs items-center">
          <Pencil className="h-3 w-3" />
          <span>edit review</span>
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Post Your Review</DialogHeader>
        <EditReviewForm userRating={userRating} productId={productId} />
      </DialogContent>
    </Dialog>
  );
}
