import bcrypt from "bcrypt";

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connectDb();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found with this email address.");
        }

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) {
          throw new Error("Incorrect password.");
        }
        disConnectDB();
        return {
          id: user._id,
          name: user.username,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    jwt(params: any) {
      if (params?.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
