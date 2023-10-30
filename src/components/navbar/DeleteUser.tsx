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

export default function DeleteUser(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const deleteAccountHandler = () => {};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="link" className="text-destructive">
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Deleting Your Account <span className="text-destructive">!</span>
          </DialogTitle>
        </DialogHeader>
        <ul>
          <li>
            Your all data about including your orders order will be deleted.
          </li>
          <li>
            After successfully deleting your account you will not be able to
            recover it.
          </li>
        </ul>
        <span>
          Press <q className="text-destructive">OK</q> to delete your account
          and <q className="text-primary">Cancel</q> to go back.
        </span>
        <DialogFooter>
          <Button
            type="button"
            variant={"outline"}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant={"destructive"}
            onClick={deleteAccountHandler}
          >
            Ok
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
