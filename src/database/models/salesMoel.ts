import mongoose, { Document } from "mongoose";

interface SaleModel extends Document {
  name: string;
  startDate: Date;
  endDate: Date;
}

const saleSchema = new mongoose.Schema<SaleModel, {}>({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Sale = mongoose.models.brand || mongoose.model("sale", saleSchema);

export default Sale as mongoose.Model<SaleModel, {}>;
export type { SaleModel };
