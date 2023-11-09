import { Package, PlusCircle, View, Pencil } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Products() {
  return (
    <Card className="border-primary hover:bg-accent transition-colors flex-grow">
      <CardHeader>
        <div className="m-auto text-primary">
          <Package size={100} />
        </div>
        <CardTitle className="text-primary">Actions on Products</CardTitle>
        <CardDescription>
          All actions you can perform on products.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center">
            <View className="mr-2 h-4 w-4" />
            View all products
          </li>
          <li className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add products
          </li>
          <li className="flex items-center">
            <Pencil className="mr-2 h-4 w-4" />
            Edit products
          </li>
        </ul>
      </CardContent>
      <CardFooter className="text-muted-foreground">
        Total Products are <span className="text-primary ml-1">100.</span>
      </CardFooter>
    </Card>
  );
}
