// import React, { useState } from 'react'

// const Flex = () => {

//     const [show, setShow] = useState(false);
//     const [show1, setShow1] = useState(false);

//   return (
//       <div className="flex flex-col md:flex-row items-center justify-center bg-[blanchedalmond] h-[65vh] md:h-[65vh] w-full text-white">
      
//       {/* FIRST BOX */}
//       <div
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//         className="flex flex-col w-full md:w-1/2 bg-[#15171a] h-full"
//       >
//         <div
//           className="flex items-end h-full w-full bg-cover bg-no-repeat bg-center"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/fh1-1.jpg")',
//           }}
//         >
//           <h2 className="text-[30px] mb-10 pl-[50px]">We're better than the rest</h2>
//         </div>

//         {show && (
//           <div className="flex h-[10%] items-center pl-[50px] bg-[#15171a] transition-all duration-300">
//             <h3 className="text-white">We're better than the rest</h3>
//           </div>
//         )}
//       </div>

//       {/* SECOND BOX */}
//       <div
//         onMouseEnter={() => setShow1(true)}
//         onMouseLeave={() => setShow1(false)}
//         className="flex flex-col w-full md:w-1/2 bg-[#15171a] h-full"
//       >
//         <div
//           className="flex items-end h-full w-full bg-cover bg-no-repeat bg-center"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/fh2-1-1.jpg")',
//           }}
//         >
//           <h2 className="text-[30px] mb-10 pl-[50px]">Compete on value, not on price.</h2>
//         </div>

//         {show1 && (
//           <div className="flex h-[10%] items-center pl-[50px] bg-[#15171a] transition-all duration-300">
//             <h3 className="text-white">We're better than the rest</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// export default Flex



import React, { useState } from "react";

const Flex = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[blanchedalmond] h-auto md:h-[65vh] w-full text-white">
      
      {/* FIRST BOX */}
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="relative flex flex-col w-full md:w-1/2 bg-[#15171a] h-[50vh] md:h-[65vh] overflow-hidden transition-all duration-500"
      >
        <div
          className="flex items-end justify-start h-full w-full bg-cover bg-no-repeat bg-center transition-transform duration-500 hover:scale-105"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/fh1-1.jpg")',
          }}
        >
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] font-semibold mb-10 pl-[30px] md:pl-[50px]">
            We're better than the rest
          </h2>
        </div>

        {/* Animated Bottom Slide */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[70px] flex items-center pl-[30px] md:pl-[50px] bg-[#15171a] transition-all duration-500 transform ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[100%]"
          }`}
        >
          <h3 className="text-blue-400 text-[18px] font-medium">
            We're better than the rest
          </h3>
        </div>
      </div>

      {/* SECOND BOX */}
      <div
        onMouseEnter={() => setShow1(true)}
        onMouseLeave={() => setShow1(false)}
        className="relative flex flex-col w-full md:w-1/2 bg-[#15171a] h-[50vh] md:h-[65vh] overflow-hidden transition-all duration-500"
      >
        <div
          className="flex items-end justify-start h-full w-full bg-cover bg-no-repeat bg-center transition-transform duration-500 hover:scale-105"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/fh2-1-1.jpg")',
          }}
        >
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] font-semibold mb-10 pl-[30px] md:pl-[50px]">
            Compete on value, not on price.
          </h2>
        </div>

        {/* Animated Bottom Slide */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[70px] flex items-center pl-[30px] md:pl-[50px] bg-[#15171a] transition-all duration-500 transform ${
            show1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[100%]"
          }`}
        >
          <h3 className="text-blue-400 text-[18px] font-medium">
            We're better than the rest
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Flex;
