import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function RatingField({
  field,
  setValue,
}: {
  field: any;
  setValue: any;
}) {
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
