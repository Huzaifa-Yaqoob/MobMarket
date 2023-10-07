import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="glitch-wrapper mt-[5rem] text-2xl">
        <div className="glitch" data-text="404 Not Found">
          404 Not Found
        </div>
      </div>
      <div>
        Go back to{" "}
        <Link href={"/"} className="hover:text-primary">
          Home
        </Link>
      </div>
    </div>
  );
}
