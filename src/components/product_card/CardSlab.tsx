import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "./Card";

export default function CardSlab() {
  return (
    <section className="py-4 text-lg flex flex-col gap-4">
      <h3 className="bg-primary text-primary-foreground px-4 py-2">
        Latest Phones
      </h3>
      <div className="flex gap-6 px-2 overflow-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Link
          href={"/"}
          className="group text-info flex items-center px-4 text-sm w-fit"
        >
          <span>see more</span>
          <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
