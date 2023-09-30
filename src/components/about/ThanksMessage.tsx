import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function ThanksMessage() {
  return (
    <q
      className={`${dancingScript.className} text-center px-2 sm:px-5 md:px-20 lg:px-32 text-2xl text-primary`}
    >
      Thank you for choosing MobMarket as your trusted source for all things
      mobile. We look forward to serving your tech needs and being a part of
      your mobile journey.
    </q>
  );
}
