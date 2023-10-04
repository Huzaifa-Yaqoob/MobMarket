import { Input } from "@/components/ui/input";
import { useState } from "react";
import getLocation from "@/lib/getLocation";

export default function UserLocation({ field }: { field: any }) {
  const [location, setLocation] = useState(field.value);
  console.log(field.value);
  const handleGetLocation = () => {
    setLocation(getLocation());
    console.log(getLocation());
  };
  return (
    <div>
      <Input {...field} onFocus={handleGetLocation} value={location} />
    </div>
  );
}
