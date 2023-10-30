import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string | null;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}
