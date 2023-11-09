import mongoose, { Document } from "mongoose";

interface RatingModel extends Document {
  rating: 1 | 2 | 3 | 4 | 5;
  product: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId | undefined;
}

const orderSchema = new mongoose.Schema<RatingModel, {}>({
  rating: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Rating = mongoose.models.Rating || mongoose.model("rating", orderSchema);

export default Rating as mongoose.Model<RatingModel, {}>;
export type { RatingModel };
