import NextAuth, { NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb, { disConnectDB } from "@/database/connectDB";
import User from "@/database/models/userModel";

interface ExtendedUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
  id?: string | null;
}

export interface ExtendedSession extends DefaultSession {
  user?: ExtendedUser;
}

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
          image: user.profilePicUrl,
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
    async jwt(params: any) {
      if (params.trigger === "update") {
        return { ...params.token, ...params.session?.user };
      }
      if (params?.user?.role) {
        params.token.id = params.user.id;
        params.token.role = params.user.role;
      }
      return params.token;
    },
    async session({ session, token }) {
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
