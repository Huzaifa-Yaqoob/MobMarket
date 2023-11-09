import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Brand from "@/database/models/brandModel";
import errorHandler from "@/handler/errorHandler";

export async function POST(request: NextRequest) {
  try {
    const brand = await request.json();
    await connectDb();
    const newBrand = new Brand({ name: brand.name });
    const ab = await newBrand.save();
    return Response.json({ message: "success" });
  } catch (error) {
    console.log(error, "while posting brand");
    const res = errorHandler(error);
    return Response.json(
      { message: res.msg.message },
      { status: res.status.status }
    );
  } finally {
    disConnectDB();
  }
}
