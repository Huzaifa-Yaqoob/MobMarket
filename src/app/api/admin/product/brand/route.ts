import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Brand from "@/database/models/brandModel";
import errorHandler from "@/handler/errorHandler";

export async function POST(request: NextRequest) {
  try {
    const brand = await request.json();
    await disConnectDB();
    return Response.json({ message: "success" });
  } catch (error) {
    console.log(error, "while posting brand");
    return Response.json({ message: "error" }, { status: 500 });
  } finally {
    disConnectDB();
  }
}
