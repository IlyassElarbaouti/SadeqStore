import { Featured } from "@/components/featured";
import Hero from "@/components/hero";
import Highlights from "@/components/hgihlights";
import HowItWorks from "@/components/howItWorks";
import Trending from "@/components/Trending";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Trending/>
      <Highlights />
      <HowItWorks />
      <Featured />
      <div className="bg-stone-200 flex justify-center">
        <Link href={"/products"}>
          <Button size="lg" className="bg-blue mb-5 p-5">
            Explore products
          </Button>
        </Link>
      </div>
    </div>
  );
}
