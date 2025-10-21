import React from "react";
import video from "../assets/video.mp4";
import Caller from "./Caller";
import react from "../assets/react.png";
import check2 from "../assets/check2.png";
import leaf from "../assets/leaf.png";
import hacker from "../assets/hacker.png";
import code from "../assets/code.png";
import tire from "../assets/tire.png";

const Third = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video}
        muted
        loop
        autoPlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-2 sm:gap-3 mb-10">
          <h3 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Our
          </h3>
          <h3 className="italic font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#9aa8ff]">
            Services
          </h3>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 w-full items-center justify-center">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <Caller
              image={react}
              text="React & Tailwind"
              text2="Installation"
              text3="Installing React, Tailwind and Plugins"
            />
            <Caller
              image={check2}
              text="UI Components"
              text2="Design Setup"
              text3="Reusable UI elements and structure"
            />
            <Caller
              image={leaf}
              text="Optimization"
              text2="Performance"
              text3="Making your app load fast and smooth"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <Caller
              image={hacker}
              text="Security"
              text2="Protection"
              text3="Implementing safe coding practices"
            />
            <Caller
              image={code}
              text="Development"
              text2="Clean Code"
              text3="Writing maintainable and scalable code"
            />
            <Caller
              image={tire}
              text="Deployment"
              text2="Delivery"
              text3="Smooth CI/CD process integration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
