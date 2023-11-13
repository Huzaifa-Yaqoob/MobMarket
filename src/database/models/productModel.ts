import mongoose, { Document } from "mongoose";

export interface Variant {
  name: string;
  picture: string;
}

interface Sale {
  salePrice: number;
  saleStartDate: Date;
  saleEndDate: Date;
}

interface ProductModel extends Document {
  name: string;
  picture: string;
  price: number;
  brand: mongoose.Types.ObjectId;
  sale?: Sale | null;
  yearReleased: string;
  ram: number;
  storage: number;
  battery: number;
  stock: number;
  moreInfo: string;
  variant: Variant[];
}

//function will return check if the value is equal to zero
function isZero(value: number) {
  if (value === 0) {
    throw new Error("value must be greater than zero");
  }
  return true;
}

const VariantSchema = new mongoose.Schema<Variant, {}>({
  name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
});

const SaleSchema = new mongoose.Schema<Sale, {}>({
  salePrice: {
    type: Number,
  },
  saleStartDate: { type: Date },
  saleEndDate: {
    type: Date,
  },
});

const productSchema = new mongoose.Schema<ProductModel, {}>({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate: isZero,
  },
  sale: {
    type: SaleSchema,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  yearReleased: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
    validate: isZero,
  },
  storage: {
    type: Number,
    required: true,
    validate: isZero,
  },
  battery: {
    type: Number,
    required: true,
    validate: isZero,
  },
  stock: {
    type: Number,
    required: true,
  },
  moreInfo: {
    type: String,
    maxlength: 500,
  },
  variant: {
    type: [VariantSchema],
    required: true,
  },
});

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

export default Product as mongoose.Model<ProductModel, {}>;
export type { ProductModel };
