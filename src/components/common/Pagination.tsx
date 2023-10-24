import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export default function Pagination() {
  return (
    <aside className="flex justify-center items-center py-4">
      <div className="flex gap-2 items-center">
        <Button type="button" size={"icon"}>
          <ChevronLeft />
        </Button>
        <Button type="button" className="text-lg">
          1
        </Button>
        <Button type="button" className="text-lg">
          2
        </Button>
        <Button type="button" variant={"secondary"} size={"icon"}>
          <MoreHorizontal />
        </Button>
        <Button type="button" className="text-lg">
          3
        </Button>
        <Button type="button" size={"icon"}>
          <ChevronRight />
        </Button>
      </div>
    </aside>
  );
}
