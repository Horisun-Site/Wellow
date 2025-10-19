import React from "react";

const Section = () => {
  return (
    <div
      className='h-screen transition-all duration-300 bg-blue-600 bg-[url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/slider1-1.jpg")] hover:bg-[url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/08/slider1-1-1.jpg")] flex items-center justify-center bg-no-repeat bg-cover bg-center'
    >
      <div className="flex flex-col justify-center h-[50%] w-[80%] md:w-[60%] lg:w-[40%] md:mr-[30%] lg:mr-[50%] text-center md:text-left">
        
        <h1 className="text-[22px] sm:text-[28px] md:text-[36px] font-bold text-[#4d61ff] mb-4">
          WE ARE EXPERT IN
        </h1>
        
        <div className="flex flex-col leading-tight">
          <h1 className="text-white text-[42px] sm:text-[64px] md:text-[96px] font-thin">
            BUSINESS
          </h1>
          <h1 className="text-white text-[42px] sm:text-[64px] md:text-[96px] font-thin">
            SOLUTIONS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section;