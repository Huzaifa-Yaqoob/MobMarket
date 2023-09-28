import Image from "next/image";

export default function ItemVariant() {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <Image
        src={"/products/Apple-iPhone-11-PNG-Image.png"}
        alt="Apple-iPhone-11-PNG-Image.png"
        width={150}
        height={200}
        className="border border-primary py-2 rounded"
      />
      <div className="space-x-2">
        <span className="p-2 bg-primary rounded">abc</span>
        <span className="p-2 bg-primary rounded">abc</span>
        <span className="p-2 bg-primary rounded">abc</span>
        <span className="p-2 bg-primary rounded">abc</span>
      </div>
    </div>
  );
}
