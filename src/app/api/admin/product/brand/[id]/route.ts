import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Brand from "@/database/models/brandModel";
import errorHandler from "@/handler/errorHandler";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const brand = await request.json();
    await connectDb();
    console.log(brand);
    await Brand.findByIdAndUpdate(
      id,
      { name: brand.name, hide: brand.hide },
      { runValidators: true }
    );
    return Response.json({ message: "success" });
  } catch (error) {
    console.log(error, "while updating brand");
    const err = errorHandler(error);
    return Response.json(
      { message: err.msg.message },
      { status: err.status.status }
    );
  } finally {
    disConnectDB();
  }
}
