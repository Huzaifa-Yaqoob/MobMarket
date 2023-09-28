import { Database, MemoryStick, BatteryFull, Calendar } from "lucide-react";

export default function ItemSpecsBox() {
  return (
    <section className="flex items-center w-full mt-8">
      <div className="flex flex-col items-center text-sm flex-grow ">
        <MemoryStick className="text-primary" size={"2rem"} />
        <span>RAM</span>
        <span>16Gb</span>
      </div>
      <div className="flex flex-col items-center text-sm flex-grow ">
        <Database className="text-primary" size={"2rem"} />
        <span>Storage</span>
        <span>256Gb</span>
      </div>
      <div className="flex flex-col items-center text-sm flex-grow ">
        <BatteryFull className="text-primary" size={"2rem"} />
        <span>Battery</span>
        <span>5000mAh</span>
      </div>
      <div className="flex flex-col items-center text-sm flex-grow ">
        <Calendar className="text-primary" size={"2rem"} />
        <span>Year Released</span>
        <span>2019</span>
      </div>
    </section>
  );
}
