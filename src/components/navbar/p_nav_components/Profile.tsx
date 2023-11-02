"use client";

import Link from "next/link";
import { useState } from "react";
import { LogOut, Crown } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import EditUserName from "../forms/EditUserName";
import EditProfilePic from "../forms/EditProfilePic";
import DeleteUser from "../DeleteUser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Profile(): React.ReactElement {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={
              session?.user?.image
                ? (`/avatar/${session?.user?.image}` as string)
                : "/avatar/unknown.jpg"
            }
            alt={session?.user?.name ? "user" : (session?.user?.name as string)}
          />
          <AvatarFallback>{"PR"}</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="rounded">
        <DialogHeader className="mt-4 flex flex-col items-center">
          <Avatar className="cursor-pointer w-24 h-24">
            <AvatarImage
              src={
                session?.user?.image
                  ? `/avatar/${session?.user?.image as string}`
                  : "/avatar/unknown.jpg"
              }
              alt={session?.user?.image as string}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <EditProfilePic
            currentAvatar={
              session?.user?.image
                ? `/avatar/${session?.user?.image as string}`
                : "/avatar/unknown.jpg"
            }
          />
        </DialogHeader>
        {session?.user?.role === "admin" ? (
          <Link
            href={"/admin"}
            onClick={() => setIsDialogOpen(false)}
            className="royal-gradient flex items-center justify-center p-2 rounded text-primary-foreground shadow-lg"
          >
            <Crown className="mr-2 h-4 w-4" />
            Go To Admin Panel
          </Link>
        ) : (
          <></>
        )}

        <div className="text-xl font-bold text-primary space-y-4">
          <div className="bg-primary-foreground p-2 rounded shadow-lg">
            {session?.user?.email}
          </div>
          <div className="flex justify-between items-center bg-primary-foreground p-2 rounded shadow-lg">
            {session?.user?.name}
            <EditUserName
              currentName={
                session?.user?.name ? (session?.user?.name as string) : ""
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="destructive" onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" /> Log Out
          </Button>
          <DeleteUser />
        </div>
      </DialogContent>
    </Dialog>
  );
}
