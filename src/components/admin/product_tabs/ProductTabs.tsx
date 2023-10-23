"use client";

import Link from "next/link";
import { PackagePlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Payment, columns } from "./tables/all/Columns";
import DataTable from "./tables/all/DataTable";

const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "983fd872",
    amount: 200,
    status: "completed",
    email: "n@example.com",
  },
  {
    id: "64fgh5a2",
    amount: 150,
    status: "pending",
    email: "o@example.com",
  },
  {
    id: "12kjn6b3",
    amount: 300,
    status: "completed",
    email: "p@example.com",
  },
  {
    id: "91hj54c1",
    amount: 250,
    status: "pending",
    email: "q@example.com",
  },
  {
    id: "78nbd23f",
    amount: 175,
    status: "pending",
    email: "r@example.com",
  },
  {
    id: "56tgh12e",
    amount: 120,
    status: "completed",
    email: "s@example.com",
  },
  {
    id: "39kjs48d",
    amount: 180,
    status: "pending",
    email: "t@example.com",
  },
  {
    id: "25hbf71g",
    amount: 220,
    status: "completed",
    email: "u@example.com",
  },
  {
    id: "37dh82l3",
    amount: 260,
    status: "pending",
    email: "v@example.com",
  },
  {
    id: "90sdf54a",
    amount: 210,
    status: "pending",
    email: "w@example.com",
  },
  {
    id: "46ngk49b",
    amount: 190,
    status: "completed",
    email: "x@example.com",
  },
  {
    id: "54kgl23h",
    amount: 230,
    status: "pending",
    email: "y@example.com",
  },
  {
    id: "20jdf49s",
    amount: 240,
    status: "completed",
    email: "z@example.com",
  },
  {
    id: "70nsm21r",
    amount: 280,
    status: "pending",
    email: "aa@example.com",
  },
  {
    id: "42ksj52t",
    amount: 270,
    status: "completed",
    email: "bb@example.com",
  },
  {
    id: "58djs38p",
    amount: 310,
    status: "pending",
    email: "cc@example.com",
  },
  {
    id: "72bsk29o",
    amount: 320,
    status: "completed",
    email: "dd@example.com",
  },
  {
    id: "83nsl46i",
    amount: 330,
    status: "pending",
    email: "ee@example.com",
  },
  {
    id: "95msh37j",
    amount: 290,
    status: "pending",
    email: "ff@example.com",
  },
  {
    id: "18fkl57k",
    amount: 340,
    status: "completed",
    email: "gg@example.com",
  },
  {
    id: "63hjs90q",
    amount: 360,
    status: "pending",
    email: "hh@example.com",
  },
  {
    id: "29dks46u",
    amount: 350,
    status: "completed",
    email: "ii@example.com",
  },
  {
    id: "31dfg87y",
    amount: 370,
    status: "pending",
    email: "jj@example.com",
  },
  {
    id: "47skl12w",
    amount: 380,
    status: "completed",
    email: "kk@example.com",
  },
  {
    id: "50hjs76z",
    amount: 400,
    status: "pending",
    email: "ll@example.com",
  },
  {
    id: "66hjs11x",
    amount: 410,
    status: "completed",
    email: "mm@example.com",
  },
  {
    id: "71jfd34v",
    amount: 420,
    status: "pending",
    email: "nn@example.com",
  },
  {
    id: "84ksl98b",
    amount: 440,
    status: "completed",
    email: "oo@example.com",
  },
  {
    id: "92slk43n",
    amount: 430,
    status: "pending",
    email: "pp@example.com",
  },
  {
    id: "10kdj76m",
    amount: 450,
    status: "pending",
    email: "qq@example.com",
  },
  {
    id: "49djs67z",
    amount: 470,
    status: "completed",
    email: "rr@example.com",
  },
  {
    id: "55jkd87s",
    amount: 460,
    status: "pending",
    email: "ss@example.com",
  },
  {
    id: "69djs45f",
    amount: 480,
    status: "completed",
    email: "tt@example.com",
  },
  {
    id: "77ndk23g",
    amount: 490,
    status: "pending",
    email: "uu@example.com",
  },
  {
    id: "82kls12h",
    amount: 500,
    status: "completed",
    email: "vv@example.com",
  },
  {
    id: "93nkd56j",
    amount: 520,
    status: "pending",
    email: "ww@example.com",
  },
  {
    id: "14skl09l",
    amount: 510,
    status: "completed",
    email: "xx@example.com",
  },
  {
    id: "26dks24o",
    amount: 530,
    status: "pending",
    email: "yy@example.com",
  },
  {
    id: "34kdf82i",
    amount: 540,
    status: "completed",
    email: "yy@examplase.com",
  },
];

export default function ProductTabs() {
  return (
    <Tabs defaultValue="All" className="">
      <div className="flex justify-between items-center bg-secondary py-1 px-2 rounded">
        <TabsList className="bg-transparent p-0 m-0">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="OutOfStack">Out of Stack</TabsTrigger>
          <TabsTrigger value="OnSales">On Sales</TabsTrigger>
        </TabsList>
        <h1 className="text-lg font-semibold">Products</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/products/add"
                className="hover:text-primary transition-colors"
              >
                <PackagePlus />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Add Product</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <TabsContent value="All">
        <DataTable columns={columns} data={data} />
      </TabsContent>
      <TabsContent value="OutOfStack">Change your password here.</TabsContent>
      <TabsContent value="OnSales">Change your password here.</TabsContent>
    </Tabs>
  );
}
