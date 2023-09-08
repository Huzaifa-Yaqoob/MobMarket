"use client";
import Link from "next/link";
import { Crown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminIcon() {
  const pathName = usePathname();
  return (
    <Link href="/admin">
      <div className="w-full flex items-center justify-between text-royal ">
        <Crown
          fill={pathName === "/admin" ? "hsl(var(--royal))" : "transparent"}
        />
        <span>Admin</span>
      </div>
    </Link>
  );
}
