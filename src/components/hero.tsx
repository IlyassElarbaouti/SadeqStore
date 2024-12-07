"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import queryString from "query-string";
import { usePathname, useRouter } from "next/navigation";

const ContainerScroll = dynamic(
  () => import("@/components/ContainerScrollAnimation"),
  { ssr: false }
);

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const url = queryString.stringifyUrl(
      {
        url: pathname,
        query: {
          search: "",
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, []);

  return (
    <section className="w-full bg-black text-gray-50  md:h-[90vh] overflow-hidden bg-grid-black/[0.03]  relative">
      <div className="w-full flex-center flex-col">
        <div className="md:w-10/12 w-9/12 max-w-7xl">
          <div id="hero" className="flex flex-col  overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold ">
                    Sadeq Store - the best market for <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      Digital Products
                    </span>
                  </h1>
                </>
              }
            >
              <Icons />
            </ContainerScroll>
            <div className="flex items-center justify-center">
              <Link href={"/products"}>
                <Button size="lg" className="bg-blue mb-5 p-5">
                  Explore products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
