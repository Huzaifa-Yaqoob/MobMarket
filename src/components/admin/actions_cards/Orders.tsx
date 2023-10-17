import { BaggageClaim, Wand, View } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Orders() {
  return (
    <Card className="border-primary hover:bg-accent transition-colors flex-grow">
      <CardHeader>
        <div className="m-auto text-primary">
          <BaggageClaim size={100} />
        </div>
        <CardTitle className="text-primary">Actions on Orders</CardTitle>
        <CardDescription>
          All actions you can perform on orders.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center">
            <View className="mr-2 h-4 w-4" />
            View all orders
          </li>
          <li className="flex items-center">
            <Wand className="mr-2 h-4 w-4" />
            Response to orders
          </li>
        </ul>
      </CardContent>
      <CardFooter className="text-muted-foreground flex flex-col items-start">
        <div>
          Total orders are <span className="text-primary ml-1">100.</span>
        </div>
        <div>
          Unexposed orders are <span className="text-primary ml-1">100.</span>
        </div>
      </CardFooter>
    </Card>
  );
}
