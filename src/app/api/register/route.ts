import { NextRequest, type NextResponse } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { email, username, password } = await request.json();
    await connectDb();
    const newUser = new User({ email, username, password });
    const user = await newUser.save();
    return Response.json({
      email: user.email,
      username: user.username,
      role: user.role,
    });
  } catch (error: Error | any) {
    console.log(error, "at post method of registration");
    return Response.json({ message: error.message });
  } finally {
    await disConnectDB();
  }
}
