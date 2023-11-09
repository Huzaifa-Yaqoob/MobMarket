import mongoose, { Document } from "mongoose";

interface BrandModel extends Document {
  name: string;
  hide: boolean;
}

const brandSchema = new mongoose.Schema<BrandModel, {}>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hide: {
    type: Boolean,
    default: false,
  },
});

const Brand = mongoose.models.brand || mongoose.model("brand", brandSchema);

export default Brand as mongoose.Model<BrandModel, {}>;
export type { BrandModel };
