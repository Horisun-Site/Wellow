// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import facebook from "../assets/facebook.png";
// import twitter from "../assets/twitter.png";
// import instagram from "../assets/instagram.png";
// import social from "../assets/social.png";
// import communication from "../assets/communication.png";
// import well from "../assets/well.png";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navpc = () => {
//   const [move, setMove] = useState(false);
//   const [move1, setMove1] = useState(false);
//   const [move2, setMove2] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-[#18181a]/70 text-white z-50">
//       <div className="flex items-center justify-between h-[110px] px-6 sm:px-8 lg:px-10 max-w-[1400px] mx-auto">
              
//         <div className="flex items-center justify-start h-[80%]">
//           <img className="h-[60px] lg:h-[70px] w-auto" src={logo} alt="Logo" />
//         </div>

//         {/* Desktop Links - hidden below 1080px */}
//         <ul className="hidden [@media(min-width:1081px)]:flex gap-6 items-center text-[15px]">
//           <Link to="/">HOME</Link>
//           <Link to="/about">ABOUT</Link>
//           <Link to="/services">SERVICES</Link>
//           <Link to="/shop">SHOP</Link>
//           <Link to="/contact">CONTACT</Link>
//         </ul>

//         <div className="hidden [@media(min-width:1081px)]:flex items-center gap-4">
//           {[
//             {
//               move,
//               setMove,
//               img: facebook,
//               hoverImg: communication,
//               label: "facebook",
//               link: "https://web.facebook.com/scott.emmanuel.230253/followers",
//             },
//             {
//               move: move1,
//               setMove: setMove1,
//               img: twitter,
//               hoverImg: well,
//               label: "twitter",
//               link: "https://x.com/Horisun0",
//             },
//             {
//               move: move2,
//               setMove: setMove2,
//               img: instagram,
//               hoverImg: social,
//               label: "instagram",
//               link: "https://www.instagram.com/horisun4/",
//             },
//           ].map((icon, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center justify-center w-[60px]"
//               onMouseEnter={() => icon.setMove(true)}
//               onMouseLeave={() => icon.setMove(false)}
//             >
//               {icon.move && (
//                 <div className="h-[28px] w-[90px] flex rounded-[40px] items-center justify-center bg-[#4d61ff] mb-1">
//                   <h1 className="text-[14px]">{icon.label}</h1>
//                 </div>
//               )}
//               <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full bg-[#222426]">
//                 <a
//                   href={icon.link}
//                   rel="noopener noreferrer"
//                   target="_blank"
//                   className="flex items-center justify-center h-full w-full"
//                 >
//                   <img
//                     className={`transition-all duration-300 ease-in-out ${
//                       icon.move ? "h-[100%] w-[100%]" : "h-[45%] w-[45%]"
//                     }`}
//                     src={icon.move ? icon.hoverImg : icon.img}
//                     alt={icon.label}
//                   />
//                 </a>
//               </div>
//             </div>
//           ))}
          
//           <div className="rounded-[40px] bg-[#4d61ff] px-4 py-2 text-[15px] whitespace-nowrap">
//             (+234) 916 529 7719
//           </div>
//         </div>
        
//         <div className="flex [@media(min-width:1081px)]:hidden items-center">
//           {menuOpen ? (
//             <X
//               color="red"
//               size={40}
//               onClick={() => setMenuOpen(false)}
//               className="cursor-pointer"
//             />
//           ) : (
//             <Menu
//               color="green"
//               size={40}
//               onClick={() => setMenuOpen(true)}
//               className="cursor-pointer"
//             />
//           )}
//         </div>
//       </div>
      
//       {menuOpen && (
//         <div
//           className="flex flex-col items-center gap-6 text-[17px] py-10 bg-cover bg-center [@media(min-width:1081px)]:hidden"
//           style={{
//             backgroundImage:
//               "url('https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/08/slider1-1-1.jpg')",
//           }}
//         >
//           <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
//           <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
//           <Link to="/shop" onClick={() => setMenuOpen(false)}>SHOP</Link>
//           <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
//           <div className="rounded-[40px] bg-[#4d61ff] px-5 py-2 text-[15px]">
//             (+234) 916 529 7719
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navpc;



import React, { useState } from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import social from "../assets/social.png";
import communication from "../assets/communication.png";
import well from "../assets/well.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navpc = () => {
  const [move, setMove] = useState(false);
  const [move1, setMove1] = useState(false);
  const [move2, setMove2] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Define social icons in an array (to reuse for desktop + mobile)
  const socialIcons = [
    {
      move,
      setMove,
      img: facebook,
      hoverImg: communication,
      label: "facebook",
      link: "https://web.facebook.com/scott.emmanuel.230253/followers",
    },
    {
      move: move1,
      setMove: setMove1,
      img: twitter,
      hoverImg: well,
      label: "twitter",
      link: "https://x.com/Horisun0",
    },
    {
      move: move2,
      setMove: setMove2,
      img: instagram,
      hoverImg: social,
      label: "instagram",
      link: "https://www.instagram.com/horisun4/",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#18181a]/70 text-white z-50">
      <div className="flex items-center justify-between h-[110px] px-6 sm:px-8 lg:px-10 max-w-[1400px] mx-auto">
        
        {/* --- LOGO --- */}
        <div className="flex items-center justify-start h-[80%]">
          <img className="h-[60px] lg:h-[70px] w-auto" src={logo} alt="Logo" />
        </div>

        {/* --- DESKTOP LINKS --- */}
        <ul className="hidden [@media(min-width:1081px)]:flex gap-6 items-center text-[15px]">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/contact">CONTACT</Link>
        </ul>

        {/* --- DESKTOP SOCIAL ICONS + PHONE --- */}
        <div className="hidden [@media(min-width:1081px)]:flex items-center gap-4">
          {socialIcons.map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-[60px]"
              onMouseEnter={() => icon.setMove(true)}
              onMouseLeave={() => icon.setMove(false)}
            >
              {icon.move && (
                <div className="h-[28px] w-[90px] flex rounded-[40px] items-center justify-center bg-[#4d61ff] mb-1 transition-all duration-300">
                  <h1 className="text-[14px] capitalize">{icon.label}</h1>
                </div>
              )}
              <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full bg-[#222426]">
                <a
                  href={icon.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center h-full w-full"
                >
                  <img
                    className={`transition-all duration-300 ease-in-out ${
                      icon.move ? "h-[100%] w-[100%]" : "h-[45%] w-[45%]"
                    }`}
                    src={icon.move ? icon.hoverImg : icon.img}
                    alt={icon.label}
                  />
                </a>
              </div>
            </div>
          ))}

          <div className="rounded-[40px] bg-[#4d61ff] px-4 py-2 text-[15px] whitespace-nowrap">
            (+234) 916 529 7719
          </div>
        </div>

        {/* --- MOBILE MENU ICON --- */}
        <div className="flex [@media(min-width:1081px)]:hidden items-center">
          {menuOpen ? (
            <X
              color="red"
              size={40}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              color="green"
              size={40}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* --- MOBILE MENU CONTENT --- */}
      {menuOpen && (
        <div
          className="flex flex-col items-center gap-6 text-[17px] py-10 bg-cover bg-center [@media(min-width:1081px)]:hidden"
          style={{
            backgroundImage:
              "url('https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/08/slider1-1-1.jpg')",
          }}
        >
          {/* Menu Links */}
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>SHOP</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>

          <div className="rounded-[40px] bg-[#4d61ff] px-5 py-2 text-[15px]">
            (+234) 916 529 7719
          </div>

          {/* --- MOBILE SOCIAL ICONS --- */}
          <div className="flex items-center justify-center gap-8 mt-6">
            {socialIcons.map((icon, i) => (
              <div
                key={i}
                className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-red-600 transition-all duration-300"
                onMouseEnter={() => icon.setMove(true)}
                onMouseLeave={() => icon.setMove(false)}
              >
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-full w-full"
                >
                  <img
                    src={icon.move ? icon.hoverImg : icon.img}
                    alt={icon.label}
                    className={`object-contain transition-all duration-300 ${
                      icon.move ? "h-[100%] w-[100%]" : "h-[50%] w-[50%]"
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navpc;
