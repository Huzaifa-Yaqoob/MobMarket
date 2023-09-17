import { UserSquare2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProfileModal() {
  return (
    <Dialog>
      <DialogTrigger className="w-full flex items-center space-x-2">
        <UserSquare2 />
        <span>Profile</span>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="text-lg text-primary">
          Welcome To MobMarket
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
