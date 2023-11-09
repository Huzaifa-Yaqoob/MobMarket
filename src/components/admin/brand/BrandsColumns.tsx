"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EditBrandDialog from "./EditBrandDialog";

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
    header: "Visibility",
    accessorKey: "hide",
    cell: ({ row }) => {
      const classes = row.getValue("hide")
        ? "text-destructive"
        : "text-success";
      return row.getValue("hide") ? (
        <span className="text-destructive-foreground bg-destructive p-1 rounded">
          Hidden
        </span>
      ) : (
        <span className="bg-success p-1 rounded">Visible</span>
      );
    },
  },
  {
    id: "edit",
    cell: ({ row }) => {
      return <EditBrandDialog data={row.original} />;
    },
  },
  {
    id: "showAll",
    cell: ({ row }) => {
      return (
        <Button asChild variant={"link"}>
          <Link href="/">Show All</Link>
        </Button>
      );
    },
  },
];
