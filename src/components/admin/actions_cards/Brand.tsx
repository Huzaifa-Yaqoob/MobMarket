import { Blocks, View, PlusCircle, Pencil } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Brand() {
  return (
    <Card className="border-primary hover:bg-accent transition-colors flex-grow">
      <CardHeader>
        <div className="m-auto text-primary">
          <Blocks size={100} />
        </div>
        <CardTitle className="text-primary">Actions on Brands</CardTitle>
        <CardDescription>
          All actions you can perform on brands.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center">
            <View className="mr-2 h-4 w-4" />
            View all brands
          </li>
          <li className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add brands
          </li>
          <li className="flex items-center">
            <Pencil className="mr-2 h-4 w-4" />
            Edit brands
          </li>
        </ul>
      </CardContent>
      <CardFooter className="text-muted-foreground flex flex-col items-start">
        <div>
          Total brands are <span className="text-primary ml-1">100.</span>
        </div>
        <div>
          Hidden brands sales are{" "}
          <span className="text-primary ml-1">100.</span>
        </div>
      </CardFooter>
    </Card>
  );
}
