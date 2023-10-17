import { Metadata } from "next";
import AdminActions from "@/components/admin/AdminActions";

export const metadata: Metadata = {
  title: "MobMarket | Admin",
};

export default function AdminPage(): React.ReactElement {
  return (
    <div>
      <AdminActions />
    </div>
  );
}
