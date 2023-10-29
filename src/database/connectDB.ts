import mongoose from "mongoose";

let connection: typeof mongoose;

export default async function connectDb() {
  try {
    if (!connection) {
      connection = await mongoose.connect(
        process.env.DATABASE_URL + process.env.DATABASE_NAME
      );
    }
    console.log("Connected to database");
  } catch (error) {
    console.log(error, "on connect");
  }
}

export const disConnectDB = async () => {
  try {
    if (connection) {
      await mongoose.disconnect();
    }
    console.log("Disconnecting from database");
  } catch (error) {
    console.log(error, "on disconnect");
  }
};
