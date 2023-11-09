import mongoose, { Document } from "mongoose";

interface GeoLocation {
  lat: number;
  lng: number;
}

interface OrderModel extends Document {
  name: string;
  phone: string;
  geoLocation: GeoLocation;
  product: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId | undefined;
  sale: mongoose.Types.ObjectId;
  bill: number;
  status: "ongoing" | "completed" | "cancelled";
}

const geoLocationSchema = new mongoose.Schema<GeoLocation>({
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema<OrderModel, {}>({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: (phone: string) => {
      const phoneRegexp = /^03[0-9]{9}$/;
      if (!phoneRegexp.test(phone)) {
        throw new Error("Invalid Phone number");
      }
      return true;
    },
  },
  geoLocation: {
    type: geoLocationSchema,
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
  sale: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sale",
  },
  bill: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "ongoing",
  },
});

const Order = mongoose.models.Order || mongoose.model("order", orderSchema);

export default Order as mongoose.Model<OrderModel, {}>;
export type { OrderModel };
