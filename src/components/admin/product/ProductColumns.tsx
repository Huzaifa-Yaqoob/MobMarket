"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import ImageContainer from "@/components/common/ImageContainer";
import ProductTableDropDown from "./ProductTableDropDown";
import EditStockModal from "./edit-stock/EditStockModal";
import { Button } from "@/components/ui/button";

export interface ProductTable {
  _id: string;
  name: string;
  img: string;
  price: number;
  stock: number;
  rating: number;
  purchases: number;
}

export const productColumns: ColumnDef<ProductTable>[] = [
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => {
      const data = row.original;
      return <ImageContainer url={data.img} alt={data.name} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <h3 className="text-lg font-bold">{row.getValue("name")}</h3>;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      return <h3 className="text-lg">{price}$</h3>;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => {
      const stock = row.getValue("stock") as number;
      return (
        <h3
          className={`text-lg font-bold ${
            stock < 30 ? "text-destructive" : "text-success"
          }`}
        >
          {stock}
        </h3>
      );
    },
  },
  {
    accessorKey: "purchases",
    header: "Purchases",
    cell: ({ row }) => {
      const purchases = row.getValue("purchases") as number;
      return <h3 className="text-lg">{purchases}</h3>;
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rating = row.getValue("rating") as number;
      return <h3 className="text-lg text-royal">{rating}</h3>;
    },
  },
  {
    id: "editStock",
    cell: ({ row }) => {
      return (
        <EditStockModal
          stock={row.getValue("stock")}
          name={row.getValue("name")}
        />
      );
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      return <ProductTableDropDown />;
    },
  },
];
