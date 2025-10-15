import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const slides = [
    {
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/client1-1.jpg",
      name: "John Carter",
      title: "Businessman",
      desc: "Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Nulla lorem porttitor accumsan tincidunt.",
    },
    {
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/client2-1.jpg",
      name: "Miss. Greener",
      title: "Artist",
      desc: "Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Nulla lorem porttitor accumsan tincidunt.",
    },
    {
      img: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/client3-1.jpg",
      name: "John Carter",
      title: "Businessman",
      desc: "Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Nulla lorem porttitor accumsan tincidunt.",
    },
  ];

  return (
    <div className="w-full py-20 bg-[#15171a] flex items-center justify-center">
      <div className="w-[90%] md:w-[80%]">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <div className="relative flex flex-col items-center mt-[50px] bg-white text-[#333] rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] px-8 py-14 md:py-16 transition-all duration-300 ease-in-out hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]">
                
                {/* Floating Image */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg bg-white overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Text Section */}
                <div className="mt-16 text-center">
                  <h3 className="text-blue-600 font-semibold text-lg">{slide.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{slide.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
