import React from "react";

const Croc = ({ images, text, text2, text3 }) => {
  return (
    <div className="flex flex-col">
      <div className="h-[90%] w-[350px] flex flex-col items-center justify-center">
        <div className="h-[70%] w-[90%] rounded-[20px] ">
          <img className="rounded-[20px] " src={images} alt="" />
        </div>
        <div className="h-[20%] w-[90%] flex flex-col items-center justify-center">
          <div className="flex gap-2 text-white">
            <h3 className=" font-bold text-[25px] ">{text}</h3>

            <h3 className=" font-bold text-[25px] italic ">{text3}</h3>
          </div>
          <p className="text-[#999999]">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Croc;
