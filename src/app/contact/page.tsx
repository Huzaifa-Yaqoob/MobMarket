import Image from "next/image";
import { Metadata } from "next";
import Whatsapp from "@/components/contact/Whatsapp";
import Instagram from "@/components/contact/Instagram";
import X from "@/components/contact/X";
import Gmail from "@/components/contact/Gmail";
import Facebook from "@/components/contact/Facebook";

export const metadata: Metadata = {
  title: "MobMarket | Contact",
};

export default function ContactPage() {
  return (
    <div className="my-container h-full flex justify-center items-center contact_background">
      <section className="text-sm grid sm:grid-cols-2 gap-4">
        <Whatsapp />
        <Instagram />
        <X />
        <Facebook />
        <Gmail />
      </section>
    </div>
  );
}
