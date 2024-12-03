"use client"
import React, { useRef } from 'react'
import {  frameImg, frameVideo } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Image from 'next/image';
import { Clapperboard, Film, Tv } from 'lucide-react';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding bg-black">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">

          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-stone-200 dark:text-white py-2">
          With our IPTV.
            <br /> Never miss a game again!
        </h4>
          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          accessible from any device.
        </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden  ">
              <Image 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video ">
                <video className="pointer-events-none " playsInline loop preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <div className="flex justify-around gap-2">
          <p className="text-gray font-semibold text-center mt-3 flex flex-col items-center justify-center gap-2"><Tv/> +2500 TV Channels</p>
          <p className="text-gray font-semibold text-center mt-3 flex flex-col items-center justify-center gap-2"><Clapperboard/> +3500 Series</p>
          <p className="text-gray font-semibold text-center mt-3 flex flex-col items-center justify-center gap-2"><Film/> +10000 Movies</p>
          </div>
          </div>
            </div>
    </section>
  )
}

export default HowItWorks