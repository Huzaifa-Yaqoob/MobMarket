import mongoose from "mongoose";

export default async function connectDb() {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL + process.env.DATABASE_NAME
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(error, "on connect 💔💫💤");
  }
}

export const disConnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnecting from database");
  } catch (error) {
    console.log(error, "on disconnect 💤💔💫");
  }
};
