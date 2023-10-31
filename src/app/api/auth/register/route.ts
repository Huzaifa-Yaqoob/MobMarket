import { NextRequest, NextResponse } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";
import registrationErrorHandler from "@/handler/registrationErrorHandler";

// register user
export async function POST(request: NextRequest) {
  try {
    const { email, username, password } = await request.json();
    await connectDb();
    const newUser = new User({ email, username, password });
    await newUser.save();
    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    const errMsg: ErrorMessage = registrationErrorHandler(error);
    return NextResponse.json(errMsg.msg, errMsg.status);
  } finally {
    await disConnectDB();
  }
}
