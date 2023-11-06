"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export interface BrandTable {
  id: string;
  name: string;
  hide: boolean;
  productsCount: number;
}

export const brandColumns: ColumnDef<BrandTable>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Brands
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <h3 className="font-bold ml-4">{row.getValue("name")}</h3>;
    },
  },
  {
    accessorKey: "productsCount",
    header: "Products",
  },
  {
    header: "Visible",
    accessorKey: "hide",
    cell: ({ row }) => {
      const [isVisible, setIsVisible] = useState<boolean>(row.getValue("hide"));
      return (
        <Switch
          checked={isVisible}
          onCheckedChange={() => setIsVisible(!isVisible)}
        />
      );
    },
  },
];
