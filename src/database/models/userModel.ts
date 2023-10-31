import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

interface UserModel extends Document {
  email: string;
  username: string;
  profilePicUrl: string;
  password: string;
  role: "user" | "admin";
}

interface Methods {
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserModel, {}, Methods>(
  {
    email: {
      type: String,
      required: true,
      validate: function (email: string) {
        console.log(email);
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
          throw new Error("Invalid email");
        }
        return true;
      },
      unique: true,
    },
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    profilePicUrl: {
      type: String,
      default: "unknown.jpg",
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 64,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre<UserModel>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error: Error | any) {
      next(error);
    }
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async function (password: string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

let User = mongoose.models.user || mongoose.model("user", userSchema);

export default User as mongoose.Model<UserModel, {}, Methods>;
export type { UserModel };
