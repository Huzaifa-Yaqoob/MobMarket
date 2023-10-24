import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const orders = [
  {
    img: "/products/Apple-iPhone-11-PNG-Image.png",
    name: "iphone 12",
    bill: 1000,
    status: "success",
  },
  {
    img: "/products/Apple-iPhone-11-PNG-Image.png",
    name: "iphone 12",
    bill: 1000,
    status: "success",
  },
  {
    img: "/products/Apple-iPhone-11-PNG-Image.png",
    name: "iphone 12",
    bill: 1000,
    status: "success",
  },
  {
    img: "/products/Apple-iPhone-11-PNG-Image.png",
    name: "iphone 12",
    bill: 1000,
    status: "success",
  },
  {
    img: "/products/Apple-iPhone-11-PNG-Image.png",
    name: "iphone 12",
    bill: 1000,
    status: "success",
  },
  {
    img: "/products/Apple-iPhone-11-PNG-Image.png",
    name: "iphone 12",
    bill: 1000,
    status: "success",
  },
  {
    img: "/products/Apple-iPhone-11-PNG-Image.png",
    name: "iphone 12",
    bill: 1000,
    status: "success",
  },
];

export default function OrdersTable() {
  return (
    <Table className="rounded-lg overflow-hidden">
      <TableCaption>A list of your orders.</TableCaption>
      <TableHeader className="bg-accent">
        <TableRow>
          <TableHead className="w-[8rem] text-center">Image</TableHead>
          <TableHead className="text-center">Name</TableHead>
          <TableHead className="text-center">Bill</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead className="text-right">More Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {orders.map((order, i) => (
          <TableRow key={i}>
            <TableCell>
              <AspectRatio
                ratio={4 / 4}
                className="border border-muted rounded flex items-center"
              >
                <Image
                  src={order.img}
                  alt="item"
                  width={120}
                  height={150}
                  className="object-contain"
                />
              </AspectRatio>
            </TableCell>
            <TableCell className="text-lg font-bold text-center">
              {order.name}
            </TableCell>
            <TableCell className="text-center">{order.bill}</TableCell>
            <TableCell className="text-center">{order.status}</TableCell>
            <TableCell className="text-center">10-12-2023</TableCell>
            <TableCell className="text-right">
              <Button type="button" variant={"link"}>
                <Link href={"/i"}>
                  <ExternalLink />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
