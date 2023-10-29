"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

export default function RegisterModal(): React.ReactElement {
  const [activeLogInForm, setActiveLogInForm] = useState(true);
  const [openDialog, setOpenDialog] = useState(true);
  // const session = useSession();

  // useEffect(() => {
  //   if (session) {
  //     setOpenDialog(false);
  //   }
  // }, [session]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="border-primary text-primary hover:text-primary"
        >
          Log In
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary text-center">
            {activeLogInForm ? "Log In" : "Register"}
          </DialogTitle>
        </DialogHeader>
        {activeLogInForm ? <LoginForm /> : <RegisterForm />}
        <DialogFooter className="flex flex-row items-center gap-1 text-base">
          {activeLogInForm
            ? "Don`t have an account register"
            : "Already have an account log in "}
          <Button
            variant={"link"}
            className="p-0 text-base"
            onClick={() => setActiveLogInForm(!activeLogInForm)}
          >
            here.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
