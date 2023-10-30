// user data after login
type User =
  | undefined
  | {
      _id: string;
      email: string;
      name: string;
      role: "admin" | "user";
    };
