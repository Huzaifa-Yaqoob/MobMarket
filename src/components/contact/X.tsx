import Image from "next/image";

export default function X() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 max-w-[20rem] text-center glass rounded p-2">
      <div>
        <Image alt="x(twitter)" src="/social/x.svg" width={50} height={50} />
      </div>
      <span className="font-bold">huzaifa</span>
      <span>
        Stay up-to-date on our sales and product releases with just a click!
        Follow us on X for real-time updates and exclusive offers.
      </span>
    </div>
  );
}
