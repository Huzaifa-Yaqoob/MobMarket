import Link from "next/link";
import { PackagePlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <TabsContent value="All">med</TabsContent>
      <TabsContent value="OutOfStack">Change your password here.</TabsContent>
      <TabsContent value="OnSales">Change your password here.</TabsContent>
    </Tabs>
  );
}
