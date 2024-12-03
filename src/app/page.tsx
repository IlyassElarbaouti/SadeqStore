import { Featured } from "@/components/featured";
import Hero from "@/components/hero";
import Highlights from "@/components/hgihlights";
import HowItWorks from "@/components/howItWorks";
export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Highlights/>
      <HowItWorks/>
      <Featured/>
    </div>
  );
}
