import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import errorHandler from "@/handler/errorHandler";
import Rating from "@/database/models/ratingModel";

export async function POST() {
  try {
    await connectDb();
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

export async function PUT() {
  try {
    await connectDb();
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

export async function DELETE() {
  try {
    await connectDb();
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
