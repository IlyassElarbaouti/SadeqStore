/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap"
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target:any, animationProps:any, scrollProps:any) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}
export function cn(...inputs:any) {
  return twMerge(clsx(inputs));
}

export const animateWithGsapTimeline = (timeline:any, rotationRef:any, rotationState:any, firstTarget:any, secondTarget:any, animationProps:any) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
}