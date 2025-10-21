import React from "react";
import like from "../assets/like.png";

const Older = () => {
  return (
    <div className="bg-[#15171a] min-h-screen flex flex-col items-center justify-center gap-[100px]">
      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[40%] w-full px-4 md:px-0 text-center md:text-left">
        
        {/* Image block */}
        <div className="h-[250px] sm:h-[300px] md:h-[90%] w-full md:w-[35%] mt-6 md:mt-0 flex items-center justify-center bg-[url('https://cdn.pixabay.com/photo/2017/09/04/22/53/red-2715835_960_720.jpg')] bg-no-repeat bg-cover bg-center rounded-[10px]">
          <img
            src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/tt1-1.jpg"
            alt=""
            className="w-[80%] md:w-[650px] rounded-[15px] mb-6 md:mb-[125px] md:ml-[100px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="h-auto md:h-[90%] w-full md:w-[44%] md:ml-[50px] flex flex-col justify-center items-center md:items-start gap-6 mt-6 md:mt-0">
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] text-white font-bold">
              Business
            </h2>
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] italic text-white">
              Development Center
            </h2>
          </div>

          <div className="px-2 sm:px-6 md:px-0">
            <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white leading-relaxed">
              Xtra is redefining the marketplace for business purchases by <br className="hidden md:block" />
              making it dramatically easier for buyers to discover, learn <br className="hidden md:block" />
              more about, compare and buy the products and services they <br className="hidden md:block" />
              need to run and grow their Businesses primarily through the <br className="hidden md:block" />
              capacity building of intermediary service.
            </h3>
          </div>

          <button className="h-[50px] w-[200px] rounded-[60px] mb-[20px] bg-[#2294f2] hover:cursor-pointer text-white hover:text-[#2294f2] hover:bg-white font-bold text-[18px] flex items-center justify-center">
            <div className="w-[25%] h-[100%] rounded-[100%] flex items-center justify-center">
              <img className="h-[70%] w-[70%]" src={like} alt="" />
            </div>
            <div>GET STARTED</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Older;
