import { Crown } from "lucide-react";
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
import CartModal from "./CartModal";
import AdminIcon from "./AdminIcon";

export default function ProfilePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-fit space-y-2">
        <AdminIcon />
        <Separator />
        <div className="flex flex-col items-center gap-y-2">
          <ProfileModal />
          <CartModal />
          <OrderModal />
        </div>
      </PopoverContent>
    </Popover>
  );
}
