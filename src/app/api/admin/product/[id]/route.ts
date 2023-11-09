import { NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import Product from "@/database/models/productModel";
import errorHandler from "@/handler/errorHandler";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {}
