"use client";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Card as ShadcnCard,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddToCard from "./AddToCard";
import HoverInfoCard from "./HoverInfoCard";
import SaleView from "./SaleView";
import CardContent from "./CardContent";

export default function Card({
  cardContent,
  size,
}: {
  cardContent: CardContent;
  size: string;
}) {
  return (
    <ShadcnCard className={`rounded flex flex-col items-center shadow ${size}`}>
      <Link href="/" className="flex flex-col items-center mt-2">
        <Image
          src={cardContent.imageUrl}
          alt={cardContent.name}
          width={150}
          height={150}
          className="object-cover"
        />
        <CardHeader className="flex flex-col items-center py-0 px-0">
          <CardTitle className="flex items-end gap-2 text-base">
            {cardContent.name}
          </CardTitle>
        </CardHeader>
        <CardContent cardContent={cardContent} />
      </Link>
      <CardFooter className="py-1 px-0">
        <AddToCard />
      </CardFooter>
    </ShadcnCard>
  );
}
