import mongoose, { Document } from "mongoose";

interface MetaDataModel extends Document {
  key: string;
  minRam: number;
  maxRam: number;
  minPrice: number;
  maxPrice: number;
}

const orderSchema = new mongoose.Schema<MetaDataModel, {}>({
  key: {
    type: String,
    default: "Metadata",
  },
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
  mongoose.models.metadata || mongoose.model("metadata", orderSchema);

export default MetaData as mongoose.Model<MetaDataModel, {}>;
export type { MetaDataModel };
