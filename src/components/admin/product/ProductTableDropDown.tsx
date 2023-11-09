import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditStockModal from "./edit-stock/EditStockModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProductTableDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Edit Product</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View Details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
