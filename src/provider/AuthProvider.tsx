"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps): React.ReactElement {
  return <SessionProvider>{children}</SessionProvider>;
}
