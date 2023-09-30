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

export default function AboutPage() {
  return (
    <div className="my-container flex flex-col gap-4">
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
