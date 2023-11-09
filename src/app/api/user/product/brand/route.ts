import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Brand from "@/database/models/brandModel";
import errorHandler from "@/handler/errorHandler";

export async function GET(request: NextRequest) {
  try {
    await connectDb();
    const brands = await Brand.find({ hide: false }, "name _id");
    const formattedBrands = brands.map((brand) => {
      return {
        value: brand._id,
        label: brand.name,
      };
    });
    console.log(formattedBrands);
    return Response.json(formattedBrands);
  } catch (error) {
    console.log(error, "at getting brand for user");
    const err = errorHandler(error);
    return Response.json(
      { message: err.msg.message },
      { status: err.status.status }
    );
  } finally {
    await disConnectDB();
  }
}
