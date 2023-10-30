"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import useDeleteUser from "@/hooks/useDeleteUser";
import { Button } from "@/components/ui/button";
import ButtonWithThreeDotsLoading from "../common/ButtonWithThreeDotsLoading";
import ButtonWithLoadingState from "../common/ButtonWithLoadingState";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DeleteUser(): React.ReactElement {
  const { isLoading, error, deleteUser } = useDeleteUser();
  const [open, setOpen] = useState(false);
  const deleteAccountHandler = async () => {
    const status = await deleteUser();
    if (status === 200) {
      signOut();
    }
  };

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
          <ButtonWithLoadingState
            type="button"
            text="OK"
            variant="destructive"
            isLoading={isLoading}
            onClick={deleteAccountHandler}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
