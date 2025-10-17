import React from "react";

const Caller = ({ image, text, text2, text3 }) => {
  return (
    <div className="h-[150px] w-[450px] flex flex-col justify-center items-center gap-[20px]">
      <div className="h-[60px] w-[60px] flex items-center justify-center rounded-bl-[50%] rounded-t-[50%] bg-white hover:rounded-[100%] hover:bg-white/40 hover:h-[65px] hover:w-[65px] transition-hover duration-400">
        <img className="h-[70%] w-[70%] " src={image} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-[5px]">
          <h3 className="text-white text-[25px] ">{text}</h3>

          <h3 className="text-white text-[25px]  italic">{text2}</h3>
        </div>
        <p className="text-[#a8b1ff] text-[18px] ">{text3}</p>
      </div>
    </div>
  );
};

export default Caller;
