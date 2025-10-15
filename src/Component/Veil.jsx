import React, { useState } from "react";
import video from "../assets/video.mp4";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Veil = () => {

    const { ref, inView } = useInView({ triggerOnce: true });
    const [hasAnimated, setHasAnimated] = useState(false);

    if (inView && !hasAnimated) setHasAnimated(true);
    
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-[auto] flex flex-col justify-center items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video}
        muted
        loop
        autoPlay
      />

      <div className="relative text-center flex flex-col gap-[20px] mb-16">
        <div className="mb-4 flex flex-col gap-[20px]">
          <h3 className="text-3xl md:text-4xl font-medium">We Will Help You To</h3>
          <h3 className="text-4xl md:text-5xl font-semibold text-blue-500">Grow Your Business</h3>
        </div>
        <p className="text-gray-300 text-lg md:text-xl">
          We're here to help you to finding a best way
        </p>
      </div>

      
      <div
        ref={ref}
        className="relative flex flex-wrap items-center justify-evenly w-full gap-10 md:gap-16 max-w-6xl"
      >
        {[
          { end: 25, label: "Years of Experience", suffix: "+" },
          { end: 45, label: "Awards Wins" },
          { end: 27, label: "Happy Clients", suffix: "k" },
          { end: 99, label: "Perfect Products" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-[70px] md:text-[90px] font-light text-blue-500 leading-none">
              {hasAnimated && (
                <CountUp
                  start={0}
                  end={item.end}
                  duration={2.5 + index * 0.5}
                />
              )}
              {item.suffix}
            </h2>
            <p className="text-[18px] md:text-[20px] font-normal text-gray-300 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veil;
