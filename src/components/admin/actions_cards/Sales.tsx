import {
  BadgePercent,
  View,
  PlusCircle,
  MinusCircle,
  Pencil,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Sales() {
  return (
    <Card className="border-primary hover:bg-accent transition-colors flex-grow">
      <CardHeader>
        <div className="m-auto text-primary">
          <BadgePercent size={100} />
        </div>
        <CardTitle className="text-primary">Actions on Sales</CardTitle>
        <CardDescription>All actions you can perform on sales.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center">
            <View className="mr-2 h-4 w-4" />
            View all Sales
          </li>
          <li className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add sales
          </li>
          <li className="flex items-center">
            <Pencil className="mr-2 h-4 w-4" />
            Edit sales
          </li>
        </ul>
      </CardContent>
      <CardFooter className="text-muted-foreground flex flex-col items-start">
        <div>
          Total sales are <span className="text-primary ml-1">100.</span>
        </div>
        <div>
          Ongoing sales are <span className="text-primary ml-1">100.</span>
        </div>
      </CardFooter>
    </Card>
  );
}
