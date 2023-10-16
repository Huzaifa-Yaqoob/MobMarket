"use client";

import Link from "next/link";
import { useState } from "react";
import { LogOut, Crown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../../ui/separator";
import { Button } from "@/components/ui/button";
import EditUserName from "../forms/EditUserName";
import EditProfilePic from "../forms/EditProfilePic";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Profile(): React.ReactElement {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const logOutHandler = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="rounded">
        <DialogHeader className="mt-4 flex flex-col items-center">
          <Avatar className="cursor-pointer w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <EditProfilePic />
        </DialogHeader>
        <Separator />
        <Link
          href={"/admin"}
          onClick={() => setIsDialogOpen(false)}
          className="bg-royal flex items-center justify-center p-2 rounded"
        >
          <Crown className="mr-2 h-4 w-4" /> Admin Panel
        </Link>
        <Separator />
        <div className="text-xl font-bold text-primary">
          <div>huzaifayaqoob@gmail.com</div>
          <div className="flex justify-between">
            M.Huzaifa
            <EditUserName />
          </div>
        </div>
        <Separator />
        <Button
          className="hover:bg-danger text-danger hover:text-foreground border-danger hover:border-background w-fit"
          variant="outline"
          onClick={logOutHandler}
        >
          <LogOut className="mr-2 h-4 w-4" /> Log Out
        </Button>
      </DialogContent>
    </Dialog>
  );
}
