import { Database, MemoryStick, BatteryFull, Calendar } from "lucide-react";

export default function ItemSpecsBox() {
  return (
    <section className="flex items-center w-full mt-8">
      <div className="flex flex-col items-center text-xs flex-grow ">
        <MemoryStick className="text-primary" />
        <span>RAM</span>
        <span>16Gb</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <Database className="text-primary" />
        <span>Storage</span>
        <span>256Gb</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <BatteryFull className="text-primary" />
        <span>Battery</span>
        <span>5000mAh</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <Calendar className="text-primary" />
        <span>Year Released</span>
        <span>2019</span>
      </div>
    </section>
  );
}
