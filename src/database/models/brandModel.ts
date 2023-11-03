import mongoose, { Document } from "mongoose";

interface BrandModel extends Document {
  name: string;
  hide: boolean;
}

const brandSchema = new mongoose.Schema<BrandModel, {}>({
  name: {
    type: String,
    required: true,
  },
  hide: {
    type: Boolean,
    default: false,
  },
});

const Brand = mongoose.models.brand || mongoose.model("brands", brandSchema);

export default Brand as mongoose.Model<BrandModel, {}>;
export type { BrandModel };
