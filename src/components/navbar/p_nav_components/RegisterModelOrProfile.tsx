import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Profile from "./Profile";
import RegisterModal from "./RegisterModal";

export default async function RegisterModelOrProfile() {
  const session = await getServerSession(authOption);

  if (session) {
    return <Profile />;
  } else {
    return <RegisterModal />;
  }
}
