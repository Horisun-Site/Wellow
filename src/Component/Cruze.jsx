import React from "react";
import check2 from "../assets/check2.png";

const Cruze = () => {
  return (
    <div className="bg-[#15171a] min-h-screen flex flex-col gap-[100px]">
      {/* === FIRST SECTION === */}
      <div className="flex flex-col gap-[50px] md:flex-row items-center justify-center h-auto md:h-[40%] w-full px-4 md:px-0">
        {/* Text block */}
        <div className="h-auto md:h-[90%] w-full md:w-[44%] md:ml-[50px] flex flex-col justify-center gap-6 text-center md:text-left mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start gap-1">
            <h2 className="text-[28px] sm:text-[32px] md:text-[34px] text-white">
              About
            </h2>
            <h2 className="text-[28px] sm:text-[32px] md:text-[34px] italic text-white">
              Company
            </h2>
          </div>

          <div>
            <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white leading-relaxed">
             
              Simply put, our mission is to help people grow their <br className="hidden md:block" />
              businesses. This is why millions of executives in growing <br className="hidden md:block" />
              companies rely on XtraTheme.com to acquire the knowledge, <br className="hidden md:block" />
              products and services they need to run and grow their <br className="hidden md:block" />
              businesses and careers. It's also where thousands of <br className="hidden md:block" />
              advertisers reach and engage these valuable buyers, <br className="hidden md:block" />
              generating well over $1.6 billion in incremental <br className="hidden md:block" />
              annual revenue.

            </h3>
          </div>
        </div>

        {/* Image block */}
        <div className="h-[250px] sm:h-[300px] md:h-[90%] w-full md:w-[35%] mt-6 md:mt-0 flex items-center justify-center bg-[url('https://cdn.pixabay.com/photo/2017/09/04/22/53/red-2715835_960_720.jpg')] bg-no-repeat bg-cover bg-center rounded-[10px]">
          <img
            src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/tt1-1.jpg"
            alt=""
            className="w-[80%] md:w-[650px] rounded-[15px] mb-6 md:mb-[125px] md:ml-[100px]"
          />
        </div>
      </div>

      {/* === SECOND SECTION === */}
      <div className="flex flex-col gap-[20px] md:flex-row items-center justify-center h-auto md:h-[40%] w-full px-4 md:px-0">
        {/* Image block */}
        <div className="h-[250px] sm:h-[300px] md:h-[90%] w-full md:w-[35%] mt-6 md:mt-0 flex items-center justify-center bg-[url('https://cdn.pixabay.com/photo/2017/09/04/22/53/red-2715835_960_720.jpg')] bg-no-repeat bg-cover bg-center rounded-[10px]">
          <img
            src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/tt1-1.jpg"
            alt=""
            className="w-[80%] md:w-[650px] rounded-[15px] mb-6 md:mb-[125px] md:ml-[100px]"
          />
        </div>

        {/* Text + columns */}
        <div className="h-auto md:h-[90%] w-full md:w-[44%] md:ml-[50px] flex flex-col justify-center gap-6 text-center md:text-left mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start gap-1">
            <h2 className="text-[28px] sm:text-[32px] md:text-[34px] text-white">
              Why
            </h2>
            <h2 className="text-[28px] sm:text-[32px] md:text-[34px] italic text-white">
              Choose Us?!
            </h2>
          </div>

          <div>
            <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white leading-relaxed">
              Xtra is redefining the marketplace for business purchases by
              making it dramatically easier for buyers to discover, learn,
              compare and buy the products and services they need.
            </h3>
          </div>

          {/* Columns */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start h-auto md:h-[200px] w-full md:w-[550px] gap-4 md:gap-[10px] mt-4 md:mt-0">
            {/* Column 1 */}
            <div className="flex flex-col items-center justify-between h-auto md:h-[90%] w-full sm:w-[45%] gap-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[10px] text-white"
                >
                  <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center border border-gray-400 bg-[#222426] hover:h-[35px] hover:w-[35px] transition-all">
                    <img src={check2} alt="" className="w-[15px]" />
                  </div>
                  <h5>Competitive Salary</h5>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center justify-between h-auto md:h-[90%] w-full sm:w-[45%] gap-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[10px] text-white"
                >
                  <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center border border-gray-400 bg-[#222426] hover:h-[35px] hover:w-[35px] transition-all">
                    <img src={check2} alt="" className="w-[15px]" />
                  </div>
                  <h5>Competitive Salary</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cruze;
