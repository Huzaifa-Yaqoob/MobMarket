import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";
import errorHandler from "@/handler/errorHandler";

// register user
export async function POST(request: NextRequest) {
  try {
    const { email, username, password } = await request.json();
    await connectDb();
    const newUser = new User({ email, username, password });
    await newUser.save();
    return Response.json({ message: "success" });
  } catch (error: any) {
    const errMsg: ErrorMessage = errorHandler(error);
    return Response.json(errMsg.msg, errMsg.status);
  } finally {
    await disConnectDB();
  }
}
