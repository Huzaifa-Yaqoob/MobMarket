import Image from "next/image";

export default function Whatsapp(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center items-center p-2 gap-2 max-w-[20rem] text-center  rounded glass">
      <div>
        <Image
          alt="whatsapp"
          src="/assets/social/whatsapp.svg"
          width={50}
          height={50}
        />
      </div>
      <span className="font-bold">+92 320 0422146</span>
      <span>
        For a personalized experience and detailed information on our offerings,
        reach out to us on WhatsApp.
      </span>
    </div>
  );
}
