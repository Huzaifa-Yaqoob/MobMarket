import { Truck, ShieldCheck, ArchiveRestore } from "lucide-react";

export default function ServiceSection(): React.ReactElement {
  return (
    <aside className="my-container flex mt-8">
      <div className="flex flex-col items-center text-xs flex-grow ">
        <Truck className="text-primary" size={"2rem"} />
        <span>Free Delivery</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <ShieldCheck className="text-primary" size={"2rem"} />
        <span>PTA Approved</span>
      </div>
      <div className="flex flex-col items-center text-xs flex-grow ">
        <ArchiveRestore className="text-primary" size={"2rem"} />
        <span>Return of Goods</span>
      </div>
    </aside>
  );
}
