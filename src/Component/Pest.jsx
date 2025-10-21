import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pest = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 6000,
    pauseOnHover: false
  };

  return (
    <div className="h-auto bg-[#1b1e21] md:h-20vh">
      <div>
        <Slider {...settings}>
          <div className="h-screen max-sm:h-[30vh] bg-red-500 bg-[url('https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/slider1-1.jpg')] bg-no-repeat bg-cover bg-center ">
            
          </div>
          <div className="h-screen max-sm:h-[30vh] bg-purple-500 bg-[url('https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/08/slider1-1-1.jpg')] bg-no-repeat bg-cover bg-center ">
            
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Pest;
