import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageContainer from "@/components/common/ImageContainer";

export interface OrderTable {
  _id: string;
  img: string;
  name: string;
  bill: number;
  status: string;
  date: string;
}

export const orderColumns: ColumnDef<OrderTable>[] = [
  {
    accessorKey: "img",
    header: "Image",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "bill",
    header: "Bill",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  //   {
  //     id: "moreAction",
  //   },
];
