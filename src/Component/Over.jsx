import React, { useState } from "react";

const Over = () => {
  const [hovered, setHovered] = useState(null);

  const items = [
    {
      id: 1,
      text: "Codevz.com",
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo1_fff-1.png",
    },
    {
      id: 2,
      text: "Envato Marketplaces",
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo3_fff-1.png",
    },
    {
      id: 3,
      text: "Github.com",
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logof_fff-1.png",
    },
    {
      id: 4,
      text: "jQuery Library",
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo5_ffff-1.png",
    },
    {
      id: 5,
      text: "Google.co",
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo2_fff-1.png",
    },
    {
      id: 6,
      text: "Spotify Music",
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo8_fff-1.png",
    },
  ];

  return (
    <div className="bg-[#15171a] flex flex-col items-center justify-center py-10 px-4">
      <div
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-6 
        gap-6 
        sm:gap-8 
        md:gap-10 
        w-full 
        max-w-[1200px]
        place-items-center"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-end space-y-2"
          >
            {/* Hover label */}
            <div
              className={`h-[25px] sm:h-[30px] w-[110px] sm:w-[150px] rounded-[8px] flex items-center justify-center text-white text-[10px] sm:text-sm transition-all duration-300 ${
                hovered === item.id
                  ? "opacity-100 bg-violet-600 translate-y-[-6px]"
                  : "opacity-0 translate-y-0"
              }`}
            >
              <h4
                className={`${
                  item.text === "Envato Marketplaces"
                    ? "text-[10px] sm:text-[12px]"
                    : ""
                }`}
              >
                {item.text}
              </h4>
            </div>

            {/* Logo Image with Glow on Hover */}
            <div
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="transition-all duration-500 flex items-center justify-center"
            >
              <img
                src={item.img}
                alt={item.text}
                className={`w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px] transition-all duration-500 ${
                  hovered === item.id
                    ? "brightness-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] scale-105"
                    : "brightness-100 drop-shadow-none scale-100"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Over;
