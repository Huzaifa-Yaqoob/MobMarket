import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Product from "@/database/models/productModel";
import errorHandler from "@/handler/errorHandler";

// add product in database
export async function POST(request: NextRequest) {
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
