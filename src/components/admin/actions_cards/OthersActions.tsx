import Link from "next/link";
import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OthersActions(): React.ReactElement {
  return (
    <section className="my-container">
      <div className="p-2 rounded bg-primary-foreground flex flex-wrap gap-2">
        <Button
          variant={"outline"}
          asChild
          className="flex-grow border-primary"
        >
          <Link href="/admin/brands">
            <Settings2 className="mr-2 h-4 w-4" />
            Edit Brands
          </Link>
        </Button>
        <Button
          variant={"outline"}
          asChild
          className="flex-grow border-primary"
        >
          <Link href="/admin/brands">
            <Settings2 className="mr-2 h-4 w-4" />
            Registered Buyers
          </Link>
        </Button>
      </div>
    </section>
  );
}
