"use client";
import React, { ReactElement, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const ContainerScroll = ({
  titleComponent,
  children
}:{
  titleComponent:ReactElement,
  children:ReactElement
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Trigger fade-in effect
    setIsVisible(true);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      className="mt-24 flex items-center justify-center relative"
      ref={containerRef}
      initial={{ opacity: 0 }} // Initial opacity
      animate={{ opacity: isVisible ? 1 : 0 }} // Animate to full opacity
      transition={{ duration: 1 }} // Transition duration
    >
      <div
        className="py-5 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </motion.div>
  );
};

 const Header = ({
  translate,
  titleComponent
}:{translate:MotionValue<number>,titleComponent:ReactElement}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>
  );
};

const Card = ({
  rotate,
  scale,
  children
}:{rotate:MotionValue<number>,scale:MotionValue<number>,children:ReactElement}) => {
  return (
    <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      transformOrigin: 'center center', // Ensure rotation and scaling happen from the center
    }}
    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl flex items-center justify-center"> {/* Center the content */}
    <div
      className="h-full w-full overflow-hidden rounded-2xl relative bg-gray-50 shadow-inner dark:bg-zinc-900 md:rounded-2xl md:p-4 flex items-center justify-center"> 
      {children}
    </div>
  </motion.div>
  );
};

export default ContainerScroll;
