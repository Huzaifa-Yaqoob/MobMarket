"use client";
import Link from "next/link";
import Image from "next/image";
import { Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddToCard from "./AddToCard";
import HoverInfoCard from "./HoverInfoCard";

export default function Card() {
  return (
    <ShadcnCard className="rounded flex flex-col items-center shadow min-w-fit">
      <Link href="/" className="flex flex-col items-center mt-2">
        <Image
          src="/products/Apple-iPhone-11-PNG-Image.png"
          alt="Apple-iPhone-11"
          width={200}
          height={200}
          className="object-cover"
        />
        <CardHeader className="flex flex-col items-center py-2">
          <CardTitle className="flex items-end gap-2">
            Apple iPhone 11 <HoverInfoCard />
          </CardTitle>
          <CardDescription className="flex flex-col items-center">
            <b className="text-success">$1,000</b>
            <span className="text-danger">
              Sales ends in <time>10 / 12</time>
            </span>
            <span className="flex text-royal">
              <Star className="mr-2 h-4 w-4" />
              4.7/5
            </span>
            <span className="text-info">In Stock</span>
          </CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="py-2">
        <AddToCard />
      </CardFooter>
    </ShadcnCard>
  );
}
