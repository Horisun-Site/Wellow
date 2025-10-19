// import React from "react";
// import mapsflags from "../assets/mapsflags.png";
// import phonecall from "../assets/phonecall.png";
// import em1ail from "../assets/em1ail.png";
// import tele1phone from "../assets/tele1phone.png";
// import skype from "../assets/skype.png";
// import rightarrow from "../assets/rightarrow.png";

// const Bottom = () => {
//   return (
//     <div className="bg-[#4d61ff] flex flex-col md:flex-row items-center justify-center md:gap-[70px] gap-10 px-4 py-10 md:py-0 md:h-[60vh]">
//       {/* Office */}
//       <div className="flex flex-col md:h-[80%] h-auto md:w-[20%] w-full">
//         <div className="border-b-[3px] border-white/20 mb-4">
//           <h2 className="text-white text-lg font-semibold">Office</h2>
//         </div>

//         {[
//           { icon: mapsflags, text: "23 Prince Emilere, Nigeria" },
//           { icon: phonecall, text: "23 Prince Emilere, Nigeria" },
//           { icon: em1ail, text: "23 Prince Emilere, Nigeria" },
//           { icon: tele1phone, text: "23 Prince Emilere, Nigeria" },
//           { icon: skype, text: "23 Prince Emilere, Nigeria" },
//         ].map((item, i) => (
//           <div key={i} className="flex items-center mb-3">
//             <div className="h-[45px] w-[45px] rounded-full bg-white flex items-center justify-center hover:h-[50px] hover:w-[50px] hover:bg-transparent hover:border hover:border-white transition-all duration-300">
//               <img
//                 src={item.icon}
//                 alt=""
//                 className="w-[20px] hover:w-[30px] transition-all duration-300"
//               />
//             </div>
//             <h4 className="text-white font-light ml-3">{item.text}</h4>
//           </div>
//         ))}
//       </div>

//       {/* News */}
//       <div className="flex flex-col md:h-[80%] h-auto md:w-[20%] w-full">
//         <div className="border-b-[3px] border-white/20 mb-4">
//           <h2 className="text-white text-lg font-semibold">News</h2>
//         </div>

//         <div className="flex flex-col gap-4">
//           {[
//             {
//               img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post1-1-150x150.jpg",
//               title: "A Place of Silence",
//               date: "🕛 10 June 2025",
//             },
//             {
//               img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post2-1-150x150.jpg",
//               title: "How to create a Logo like a Pro",
//               date: "🕛 10 June 2025",
//             },
//           ].map((news, i) => (
//             <div key={i} className="flex items-center gap-3">
//               <img src={news.img} alt="" className="w-[30%] rounded-lg ml-2" />
//               <div className="flex flex-col gap-1">
//                 <h4 className="text-white text-[15px] leading-tight">
//                   {news.title}
//                 </h4>
//                 <p className="text-[#9ca7ff] text-sm font-light">{news.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Shortcuts */}
//       <div className="flex flex-col md:h-[80%] h-auto md:w-[20%] w-full">
//         <div className="border-b-[3px] border-white/20 mb-4">
//           <h2 className="text-white text-lg font-semibold">Shortcuts</h2>
//         </div>

//         <div className="flex flex-wrap justify-evenly gap-5">
//           <div className="flex flex-col gap-3">
//             {[
//               "Home",
//               "City Stores",
//               "News",
//               "Clients",
//               "Consultation",
//               "Publicity",
//               "Support",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-2 hover:ml-2 transition-all duration-300 cursor-pointer"
//               >
//                 <img src={rightarrow} alt="" className="w-[25px]" />
//                 <h4 className="text-white text-[15px] hover:text-red-400 transition-all duration-300">
//                   {item}
//                 </h4>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col gap-3">
//             {[
//               "Maps",
//               "Careers",
//               "Employee",
//               "Teams",
//               "Benefits",
//               "PrivacyPolicy",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-2 hover:ml-2 transition-all duration-300 cursor-pointer"
//               >
//                 <img src={rightarrow} alt="" className="w-[25px]" />
//                 <h4 className="text-white text-[15px] hover:text-red-400 transition-all duration-300">
//                   {item}
//                 </h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Working Hours */}
//       <div className="flex flex-col md:h-[80%] h-auto md:w-[20%] w-full">
//         <div className="border-b-[3px] border-white/20 mb-4">
//           <h2 className="text-white text-lg font-semibold">Working Hours</h2>
//         </div>

//         <div className="flex flex-col gap-6">
//           <div className="flex flex-col gap-2">
//             <h4 className="text-white">Our support available to help</h4>
//             <h4 className="text-white">you 24 hours a day, five days</h4>
//             <h4 className="text-white">a week</h4>
//           </div>

//           <div className="flex flex-col gap-6">
//             <div className="flex gap-3 flex-wrap">
//               <h4 className="text-white">Monday to Thursday</h4>
//               <h4 className="text-black font-thin">......</h4>
//               <h4 className="text-white">9AM - 4PM</h4>
//             </div>

//             <div className="flex gap-3 flex-wrap">
//               <h4 className="text-white">Friday</h4>
//               <h4 className="text-black font-thin">.........................</h4>
//               <h4 className="text-white">10AM - 3PM</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bottom;

import React from "react";
import mapsflags from "../assets/mapsflags.png";
import phonecall from "../assets/phonecall.png";
import em1ail from "../assets/em1ail.png";
import tele1phone from "../assets/tele1phone.png";
import skype from "../assets/skype.png";
import rightarrow from "../assets/rightarrow.png";

const Bottom = () => {
  return (
    <div className="bg-[#4d61ff] flex flex-col lg:flex-row flex-wrap items-start justify-center lg:justify-between gap-10 md:gap-[50px] lg:gap-[70px] px-4 sm:px-8 md:px-12 py-10 md:py-14 lg:py-20">
      
      {/* Office */}
      <div className="flex flex-col w-full sm:w-[45%] lg:w-[20%]">
        <div className="border-b-[3px] border-white/20 mb-4">
          <h2 className="text-white text-xl font-semibold">Office</h2>
        </div>

        {[
          { icon: mapsflags, text: "23 Prince Emilere, Nigeria" },
          { icon: phonecall, text: "+234 916 529 7719" },
          { icon: em1ail, text: "contact@horisun.com" },
          { icon: tele1phone, text: "+234 802 111 2233" },
          { icon: skype, text: "horisun_support" },
        ].map((item, i) => (
          <div key={i} className="flex items-center mb-3">
            <div className="h-[45px] w-[45px] rounded-full bg-white flex items-center justify-center hover:h-[50px] hover:w-[50px] hover:bg-transparent hover:border hover:border-white transition-all duration-300">
              <img
                src={item.icon}
                alt=""
                className="w-[20px] hover:w-[25px] transition-all duration-300"
              />
            </div>
            <h4 className="text-white font-light ml-3 text-[15px] sm:text-[16px]">
              {item.text}
            </h4>
          </div>
        ))}
      </div>

      {/* News */}
      <div className="flex flex-col w-full sm:w-[45%] lg:w-[20%]">
        <div className="border-b-[3px] border-white/20 mb-4">
          <h2 className="text-white text-xl font-semibold">News</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post1-1-150x150.jpg",
              title: "A Place of Silence",
              date: "🕛 10 June 2025",
            },
            {
              img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post2-1-150x150.jpg",
              title: "How to Create a Logo Like a Pro",
              date: "🕛 10 June 2025",
            },
          ].map((news, i) => (
            <div key={i} className="flex items-center gap-3">
              <img
                src={news.img}
                alt=""
                className="w-[70px] h-[70px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-[15px] leading-tight">
                  {news.title}
                </h4>
                <p className="text-[#9ca7ff] text-sm font-light">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shortcuts */}
      <div className="flex flex-col w-full sm:w-[45%] lg:w-[20%]">
        <div className="border-b-[3px] border-white/20 mb-4">
          <h2 className="text-white text-xl font-semibold">Shortcuts</h2>
        </div>

        <div className="flex flex-wrap justify-between gap-6">
          <div className="flex flex-col gap-3">
            {[
              "Home",
              "City Stores",
              "News",
              "Clients",
              "Consultation",
              "Publicity",
              "Support",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 hover:ml-2 transition-all duration-300 cursor-pointer"
              >
                <img src={rightarrow} alt="" className="w-[20px]" />
                <h4 className="text-white text-[15px] hover:text-black/70 transition-all duration-300">
                  {item}
                </h4>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {[
              "Maps",
              "Careers",
              "Employee",
              "Teams",
              "Benefits",
              "Privacy Policy",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 hover:ml-2 transition-all duration-300 cursor-pointer"
              >
                <img src={rightarrow} alt="" className="w-[20px]" />
                <h4 className="text-white text-[15px] hover:text-black/70 transition-all duration-300">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="flex flex-col w-full sm:w-[45%] lg:w-[20%]">
        <div className="border-b-[3px] border-white/20 mb-4">
          <h2 className="text-white text-xl font-semibold">Working Hours</h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-white text-[15px]">
            <p>Our support is available to help</p>
            <p>you 24 hours a day, five days</p>
            <p>a week.</p>
          </div>

          <div className="flex flex-col gap-4 text-white text-[15px]">
            <div className="flex justify-between flex-wrap">
              <span>Monday - Thursday</span>
              <span>9AM - 4PM</span>
            </div>

            <div className="flex justify-between flex-wrap">
              <span>Friday</span>
              <span>10AM - 3PM</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Bottom;
