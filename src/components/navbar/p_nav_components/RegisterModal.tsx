"use client";

import { useState } from "react";
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Log In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary text-center">
            {activeLogInForm ? "Log In" : "Register"}
          </DialogTitle>
        </DialogHeader>
        {activeLogInForm ? <LoginForm /> : <RegisterForm />}
        <DialogFooter className="flex items-center gap-1 text-base">
          {activeLogInForm
            ? "Don`t have an account register"
            : "Already have an account log in "}
          <Button
            variant={"link"}
            className="p-0 text-base"
            onClick={() => setActiveLogInForm(!activeLogInForm)}
          >
            here
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
