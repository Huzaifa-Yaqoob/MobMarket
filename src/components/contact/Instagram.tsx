import Image from "next/image";

export default function Instagram() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 max-w-[20rem] text-center glass rounded p-2">
      <div>
        <Image
          alt="instagram"
          src="/social/instagram.svg"
          width={50}
          height={50}
        />
      </div>
      <span className="font-bold">Huzaifa_dev</span>
      <span>
        Keep your feed filled with the latest sales and product highlights!
        Follow our Instagram page for daily updates and exclusive offers.
      </span>
    </div>
  );
}
