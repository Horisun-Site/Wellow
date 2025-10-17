import React, { useState } from "react";
import group from "../assets/group.jpg";
import post from "../assets/post.jpg";
import office from "../assets/office.jpg";

const Age = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index, state) => {
    const newFlipped = [...flipped];
    newFlipped[index] = state;
    setFlipped(newFlipped);
  };

  const cards = [
    {
      front: "Time",
      side: "Efficiency",
      img: post,
      back: "We value time and efficiency, ensuring every task is completed quickly without compromising quality.",
    },
    {
      front: "Authentic",
      side: "Advice",
      img: office,
      back: "We provide authentic advice grounded in experience, helping clients make confident and informed business decisions.",
    },
    {
      front: "Personal",
      side: "Approach",
      img: group,
      back: "Our personal approach builds genuine relationships, ensuring each client’s unique goals and challenges are understood deeply.",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col gap-[50px] items-center justify-center bg-[#0f1112] text-white px-4 py-10">
      {/* --- Title --- */}
      <div className="w-[90%] items-center justify-center flex sm:flex-row gap-[10px] text-center sm:text-left">
        <h1 className="text-[28px] sm:text-[32px] md:text-[35px] font-light">
          Plan to
        </h1>
        <h1 className="text-[28px] sm:text-[32px] md:text-[35px] italic font-bold">
          Start a Business ?
        </h1>
      </div>

      {/* --- Cards --- */}
      <div className="flex flex-wrap justify-center items-center gap-[25px] w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative 
                       w-[90%] sm:w-[380px] md:w-[420px] 
                       h-[230px] sm:h-[250px] md:h-[260px] 
                       perspective-[1000px] cursor-pointer"
            onMouseEnter={() => handleFlip(i, true)}
            onMouseLeave={() => handleFlip(i, false)}
          >
            {/* Flip Container */}
            <div
              className={`transition-transform duration-700 transform-style-preserve-3d w-full h-full ${
                flipped[i] ? "rotate-y-180" : ""
              }`}
            >
              {/* FRONT SIDE */}
              <div className="absolute w-full h-full bg-white text-black flex flex-col items-center justify-evenly p-4 rounded-[15px] backface-hidden shadow-lg shadow-gray-700/30">
                <div className="flex gap-[5px]">
                  <h2 className="text-[22px] sm:text-[26px] font-bold">
                    {card.front}
                  </h2>
                  <h2 className="text-[22px] sm:text-[26px] italic">
                    {card.side}
                  </h2>
                </div>
                <p className="text-center text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-relaxed">
                  {card.back}
                </p>
              </div>

              {/* BACK SIDE */}
              <div className="absolute w-full h-full bg-blue-700 flex flex-col items-center justify-center rounded-[15px] rotate-y-180 backface-hidden shadow-lg shadow-blue-900/30 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.front}
                  className="h-full w-full object-cover opacity-[80%] rounded-[10px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Age;
