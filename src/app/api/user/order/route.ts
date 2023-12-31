import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import errorHandler from "@/handler/errorHandler";
import Order from "@/database/models/orderModel";

export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const req = await request.json();
    const newOrder = new Order({ ...req });
    await newOrder.save();
    return Response.json({ message: "success" });
  } catch (error) {
    console.log(error, "at posting order");
    const err = errorHandler(error);
    return Response.json(
      { message: err.msg.message },
      { status: err.status.status }
    );
  } finally {
    disConnectDB();
  }
}
