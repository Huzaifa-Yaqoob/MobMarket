import Link from "next/link";

export default function QuickLinks(): React.ReactElement {
  return (
    <div>
      <h3 className="font-bold">Quick Links</h3>
      <ul className="text-xs">
        <li className="hover:text-primary w-fit">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-primary w-fit">
          <Link href="/">About us</Link>
        </li>
        <li className="hover:text-primary w-fit">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
