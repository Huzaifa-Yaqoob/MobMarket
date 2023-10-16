import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RegisterModal(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild className="text-primary">
        <Button variant="outline">Log In</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="text-lg text-primary">
          Welcome To MobMarket
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
