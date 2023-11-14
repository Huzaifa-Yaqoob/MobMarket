import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOption } from "../../auth/[...nextauth]/route";
import connectDb, { disConnectDB } from "@/database/connectDB";
import errorHandler from "@/handler/errorHandler";
import Rating from "@/database/models/ratingModel";

export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const session = await getServerSession(authOption);
    const data = await request.json();
    if (!session) {
      throw new Error("LogIn please");
    }
    console.log(data, "it`s me");
    const ab = await Rating.findOneAndUpdate(
      { product: data.productId, user: session?.user?.id },
      {
        $set: {
          rating: data.rating,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );
    console.log(ab);
    return Response.json({ message: "success" });
  } catch (error) {
    console.log(error, "at posting rating");
    const err = errorHandler(error);
    return Response.json(
      { message: err.msg.message },
      { status: err.status.status }
    );
  } finally {
    await disConnectDB();
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const data = await request.json();
    const session = await getServerSession(authOption);
    await connectDb();
    if (!session) {
      throw new Error("LogIn please");
    }
    await Rating.findOneAndDelete({
      user: session?.user?.id,
      product: data.productId,
    });
    return Response.json({ message: "success" });
  } catch (error) {
    console.log(error, "at posting rating");
    const err = errorHandler(error);
    return Response.json(
      { message: err.msg.message },
      { status: err.status.status }
    );
  } finally {
    await disConnectDB();
  }
}
