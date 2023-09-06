import Link from "next/link";
import Image from "next/image";

export default function ProductCard() {
  return (
    <Link href={"/"}>
      <div className="bg-green-300 rounded p-2">Product Card</div>
    </Link>
  );
}
