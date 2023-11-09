import mongoose, { Document } from "mongoose";

interface MetaDataModel extends Document {
  minRam: number;
  maxRam: number;
  minPrice: number;
  maxPrice: number;
}

const orderSchema = new mongoose.Schema<MetaDataModel, {}>({
  minPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  maxPrice: {
    type: Number,
    required: true,
  },
  minRam: {
    type: Number,
    required: true,
    default: 0,
  },
  maxRam: {
    type: Number,
    required: true,
  },
});

const MetaData =
  mongoose.models.Rating || mongoose.model("meta-data", orderSchema);

export default MetaData as mongoose.Model<MetaDataModel, {}>;
export type { MetaDataModel };
