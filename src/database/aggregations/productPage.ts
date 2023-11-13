import mongoose from "mongoose";
import Product from "../models/productModel";

interface Variant {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  picture: string;
}

export interface Product {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  picture: string;
  price: number;
  yearReleased: string;
  ram: number;
  storage: number;
  battery: number;
  stock: number;
  moreInfo: string;
  variant: Variant[];
  brand: string;
  ratingCount: number;
  averageRating: number | null;
}

export default async function productPage(id: string): Promise<Product[]> {
  const productId = new mongoose.Types.ObjectId(id);
  return await Product.aggregate([
    {
      $match: {
        _id: productId,
      },
    },
    {
      $lookup: {
        from: "ratings",
        localField: "_id",
        foreignField: "product",
        as: "productRating",
      },
    },
    {
      $lookup: {
        from: "brands",
        localField: "brand",
        foreignField: "_id",
        as: "brand",
      },
    },
    {
      $addFields: {
        brand: { $arrayElemAt: ["$brand.name", 0] },
        ratingCount: { $size: "$productRating" },
        averageRating: { $avg: "$productRating.rating" },
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        picture: 1,
        price: 1,
        yearReleased: 1,
        ram: 1,
        storage: 1,
        battery: 1,
        stock: 1,
        moreInfo: 1,
        variant: 1,
        brand: 1,
        ratingCount: 1,
        averageRating: 1,
      },
    },
  ]);
}
