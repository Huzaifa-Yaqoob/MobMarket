import { getServerSession } from "next-auth";
import { NextRequest, type NextResponse } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";
import { authOption } from "../auth/[...nextauth]/route";
import { type UserModel } from "@/database/models/userModel";

// edit user username
export async function PUT(request: NextRequest, response: NextResponse) {
  try {
    await connectDb();
    const session = await getServerSession(authOption);
    const { username } = await request.json();
    if (session?.user?.id) {
      const user = await User.findByIdAndUpdate(
        session?.user?.id,
        {
          username,
        },
        { new: true }
      );
      return Response.json({ username: user?.username });
    } else {
      throw new Error("something`s wrong");
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error: "something`s wrong" });
  } finally {
    await disConnectDB();
  }
}

// delete user account
export async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    const req = await request.json();
    await connectDb();
    console.log("deleted");
    return Response.json({ a: "a" });
  } catch (error) {
    return Response.json({ a: "a" });
  } finally {
    disConnectDB();
  }
}
