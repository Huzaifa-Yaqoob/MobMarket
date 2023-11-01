import { getServerSession } from "next-auth";
import { type NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";
import { authOption } from "../auth/[...nextauth]/route";

// edit user username
export async function PUT(request: NextRequest) {
  try {
    await connectDb();
    const session = await getServerSession(authOption);
    const { username } = await request.json();
    console.log(username);
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
      throw new Error("00");
    }
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "something`s wrong. sorry!" },
      { status: 500 }
    );
  } finally {
    await disConnectDB();
  }
}

// delete user account
export async function DELETE(request: NextRequest) {
  try {
    await connectDb();
    const session = await getServerSession(authOption);
    if (session?.user?.id) {
      await User.findByIdAndDelete(session?.user?.id);
    }
    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json(
      { message: "something`s wrong. Sorry!" },
      { status: 500 }
    );
  } finally {
    disConnectDB();
  }
}
