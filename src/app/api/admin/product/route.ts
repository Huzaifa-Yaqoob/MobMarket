import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Product from "@/database/models/productModel";
import errorHandler from "@/handler/errorHandler";
import { type ProductModel, Variant } from "@/database/models/productModel";

const getUniqueName = () => {
  const uniqueName = uuidv4();
  return uniqueName;
};

// this function will make sure that the directory must exist if it dos1nt exist then it will create it.
const makdirIfNotExist = (name: string): string => {
  const avatarPath = path.join(process.cwd(), "/public/product");
  if (!fs.existsSync(avatarPath)) {
    fs.mkdirSync(avatarPath, { recursive: true });
  }
  return avatarPath + "/" + name;
};

// this function will check type of image
const checkImageType = (fileType: string) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  return allowedTypes.includes(fileType);
};

// add product in database
export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    console.log(data);
    const name = data.get("name") as string;
    const price = data.get("price") as string;
    const brand = data.get("brand") as string;
    const yearReleased = data.get("yearReleased") as string;
    const ram = data.get("ram") as string;
    const storage = data.get("storage") as string;
    const battery = data.get("battery") as string;
    const stock = data.get("stock") as string;
    const moreInfo = data.get("moreInfo") as string;
    const variantLength = data.get("variantLength") as string;
    const file = data.get("picture") as File;
    if (!file || !checkImageType(file.type)) {
      throw new Error("00");
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const pictureName = getUniqueName() + "_" + file.name;
    const path = makdirIfNotExist(pictureName);
    fs.writeFileSync(path, buffer);

    const variant: Variant[] = [];
    for (let i = 0; i < parseInt(variantLength); i++) {
      const name = data.get(`variant[${i}][name]`) as string;
      const file = data.get(`variant[${i}][picture]`) as File;
      if (!file || !checkImageType(file.type)) {
        throw new Error("00");
      }
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const pictureName = getUniqueName() + "_" + file.name;
      const path = makdirIfNotExist(pictureName);
      fs.writeFileSync(path, buffer);
      variant.push({ name, picture: pictureName });
    }
    console.log(pictureName);
    const product = {
      name,
      price: parseInt(price),
      brand: new mongoose.Types.ObjectId(brand),
      yearReleased,
      ram: parseInt(ram),
      storage: parseInt(storage),
      battery: parseInt(battery),
      stock: parseInt(stock),
      moreInfo,
      picture: pictureName,
      variant,
    };

    await connectDb();
    const newProduct = new Product(product);
    await newProduct.save();
    return Response.json({ message: "success" });
  } catch (error: any) {
    const errMsg: ErrorMessage = errorHandler(error);
    return Response.json(errMsg.msg, errMsg.status);
  } finally {
    await disConnectDB();
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.formData();
    console.log(data);
    const name = data.get("name");
    const price = data.get("price");
    const brand = data.get("brand");
    const yearReleased = data.get("yearReleased");
    const ram = data.get("ram");
    const storage = data.get("storage");
    const battery = data.get("battery");
    const stock = data.get("stock");
    const moreInfo = data.get("moreInfo");
    const picture = data.get("picture");
    const variantLength = data.get("variantLength");
    for (let i = 0; i < 3; i++) {
      const element = 10;
    }
    await connectDb();
    // const newProduct = new Product();
    // await newProduct.save();
    return Response.json({ message: "success" });
  } catch (error: any) {
    const errMsg: ErrorMessage = errorHandler(error);
    return Response.json(errMsg.msg, errMsg.status);
  } finally {
    await disConnectDB();
  }
}
