import { LogOut } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import ProfileModal from "./ProfileModal";
import OrderModal from "./OrderModal";
import CartModal from "./CartSheet";
import AdminIcon from "./AdminIcon";

export default function ProfilePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-fit space-y-2">
        {/* <AdminIcon /> */}
        {/* <Separator /> */}
        <div className="flex flex-col items-center gap-y-2">
          <ProfileModal />
          <OrderModal />
        </div>
        <Separator />
        <Link href="/admin">
          <div className="w-full flex items-center space-x-2 text-danger">
            <LogOut />
            <span>Log Out</span>
          </div>
        </Link>
      </PopoverContent>
    </Popover>
  );
}
