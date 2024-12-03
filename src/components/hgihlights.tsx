"use client";
import React from "react";
import dynamic from "next/dynamic";
const VideoCarousel = dynamic(() => import("@/components/video-carousel"), { ssr: false });

const Highlights = () => {
  return (
    <section id="highlights" className="max-w-screen overflow-hidden h-full common-padding bg-stone-200 text-white">
      <div className="screen-max-width">
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
