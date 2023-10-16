import Image from "next/image";
import { Metadata } from "next";
import About from "@/components/about/About";
import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import WhyMobMarket from "@/components/about/WhyMobMarket";
import GetInTouch from "@/components/about/GetInTouch";
import ThanksMessage from "@/components/about/ThanksMessage";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "MobMarket | About",
};

export default function AboutPage(): React.ReactElement {
  return (
    <div className="my-container flex flex-col gap-4 ">
      <div className="fixed top-1/2 left-2/4 z-[-1] w-20 h-20">
        <Image src="/logo.svg" alt="Logo" fill className="opacity-10" />
      </div>
      <About />
      <OurStory />
      <OurMission />
      <WhyMobMarket />
      <GetInTouch />
      <Separator />
      <ThanksMessage />
    </div>
  );
}
