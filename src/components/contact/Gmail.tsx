import Image from "next/image";

export default function Gmail(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center items-center gap-2 max-w-[20rem] text-center glass rounded p-2">
      <div>
        <Image alt="facebook" src="/social/gmail.svg" width={50} height={50} />
      </div>
      <span className="font-bold">51huzaifayaqoob@gmail.com</span>
      <span>
        Feel free to get in touch with us via Gmail at
        51huzaifayaqoob@gmail.com. We're here to assist you with any inquiries
        or concerns you may have
      </span>
    </div>
  );
}
