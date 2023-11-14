import { useState, useEffect } from "react";
import * as z from "zod";
import { Star } from "lucide-react";
import { UseFormSetValue } from "react-hook-form";
import { editReviewFormSchema } from "@/lib/zodSchemas";

interface RatingFieldProps {
  field: {
    name: string;
    value: z.infer<typeof editReviewFormSchema>["rating"];
  };
  setValue: UseFormSetValue<{ rating: number; productId: string }>;
}

export default function RatingField({
  field,
  setValue,
}: RatingFieldProps): React.ReactElement {
  const [rating, setRating] = useState(field.value);

  const starArray: JSX.Element[] = [];

  const changeRating = (i: number) => {
    setRating(i);
    setValue("rating", i);
  };

  for (let i = 1; i <= 5; i++) {
    starArray.push(
      <Star
        className={`text-royal ${i <= rating ? "fill-royal" : ""}`}
        key={i}
        onClick={() => changeRating(i)}
      />
    );
  }

  return <div className="flex justify-between">{starArray}</div>;
}
