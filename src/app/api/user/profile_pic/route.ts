import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import { type NextRequest } from "next/server";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";
import { authOption } from "../../auth/[...nextauth]/route";
import path from "path";
import fs from "fs";
import errorHandler from "@/handler/errorHandler";

// create unique name for file
const getUniqueName = () => {
  const uniqueName = uuidv4();
  return uniqueName;
};

// this function will make sure that the directory must exist if it dos1nt exist then it will create it.
const makdirIfNotExist = (name: string): string => {
  const avatarPath = path.join(process.cwd(), "/public/avatar");
  if (!fs.existsSync(avatarPath)) {
    fs.mkdirSync(avatarPath, { recursive: true });
  }
  return avatarPath + "/" + name;
};

// this function will check type of image
const checkImageType = (fileType: string) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  return allowedTypes.includes(fileType);
};

// edit profile picture of user
export async function PUT(request: NextRequest) {
  try {
    const data = await request.formData();
    const session = await getServerSession(authOption);
    const file = data.get("file") as File;
    if (!file || !session || !checkImageType(file.type)) {
      throw new Error("00");
    }
    await connectDb();
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const name = getUniqueName() + "_" + file.name;
    const path = makdirIfNotExist(name);
    fs.writeFileSync(path, buffer);
    if (session?.user?.id) {
      const user = await User.findByIdAndUpdate(
        session?.user?.id,
        {
          profilePicUrl: name,
        },
        { new: true }
      );
      return Response.json({ profilePicUrl: user?.profilePicUrl });
    } else {
      throw new Error("Something`s wrong");
    }
  } catch (error) {
    const errMsg: ErrorMessage = errorHandler(error);
    return Response.json(errMsg.msg, errMsg.status);
  } finally {
    await disConnectDB();
  }
}
