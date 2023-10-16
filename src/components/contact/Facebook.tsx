import Image from "next/image";

export default function Facebook(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center items-center gap-2 max-w-[20rem] text-center glass rounded p-2">
      <div>
        <Image
          alt="facebook"
          src="/social/facebook.svg"
          width={50}
          height={50}
        />
      </div>
      <span className="font-bold">Huzaifa Yaqoob</span>
      <span>
        Stay in the loop with our latest sales and product updates! Follow our
        Facebook page for the freshest news and exclusive offers.
      </span>
    </div>
  );
}
