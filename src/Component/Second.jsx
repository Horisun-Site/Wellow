import React from 'react'
import check from "../assets/check.png";
import megaphone from "../assets/megaphone.png";
import addfriend from "../assets/addfriend.png";
import rightarrow from "../assets/rightarrow.png";
import "./Second.css"



const Second = () => {
  return (
    <div className='second-section h-[120vh] bg-[#15171a]'>
      <div className='h-[20%] flex items-center justify-center gap-[20px]'>
        <div className='h-[85%] w-[25%] bg-[#1b1e21] mb-[8%] rounded-[20px] gap-[20px] border-b-3 border-transparent hover:border-b-[#00bfff] transition-all duration-300  flex items-center justify-center '>
          <div className='h-[65px] w-[65px] flex items-center bg-[#4d61ff] justify-center rounded-t-[50%] rounded-bl-[50%] '>
            <img className='h-[50%] w-[50%]' src={check} alt="" />
          </div>
          <div className='flex flex-col text-white'>
            <div className='flex gap-[5px] '>
              <h3 className='text-[20px] font-bold'>SMART</h3>
              <h3 className='text-[20px] font-bold italic'>SOLUTIONS</h3>
            </div>
            <div>
              <p className='text-[14px] font-thin text-[#808080]'>
                Providing Excellent Candidates
              </p>
            </div>
          </div>
        </div>
        <div className='h-[85%] w-[25%] bg-[#1b1e21] mb-[8%] rounded-[20px] gap-[20px] border-b-3 border-transparent hover:border-b-[#00bfff] transition-all duration-300  flex items-center justify-center '>
          <div className='h-[65px] w-[65px] flex items-center bg-[#4d61ff] justify-center rounded-t-[50%] rounded-bl-[50%] '>
            <img className='h-[50%] w-[50%]' src={megaphone} alt="" />
          </div>
          <div className='flex flex-col text-white'>
            <div className='flex gap-[5px] '>
              <h3 className='text-[20px] font-bold'>BEST</h3>
              <h3 className='text-[20px] font-bold italic'>OFFERS</h3>
            </div>
            <div>
              <p className='text-[14px] font-thin text-[#808080]'>
                Starting Small Business
              </p>
            </div>
          </div>
        </div>
        <div className='h-[85%] w-[25%] bg-[#1b1e21] mb-[8%] rounded-[20px] gap-[20px] border-b-3 border-transparent hover:border-b-[#00bfff] transition-all duration-300  flex items-center justify-center '>
          <div className='h-[65px] w-[65px] flex items-center bg-[#4d61ff] justify-center rounded-t-[50%] rounded-bl-[50%] '>
            <img className='h-[50%] w-[50%]' src={addfriend} alt="" />
          </div>
          <div className='flex flex-col text-white'>
            <div className='flex gap-[5px] '>
              <h3 className='text-[20px] font-bold'>Friendly</h3>
              <h3 className='text-[20px] font-bold italic'>SUPPORT</h3>
            </div>
            <div>
              <p className='text-[14px] font-thin text-[#808080]'>
                Experienced Consultants
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[30%] flex flex-col items-center justify-between'>
        <div className='flex gap-[5px] text-[#4d61ff]'>
          <h5 className='text-[30px] font-bold'>Our</h5>
          <h5 className='text-[30px] font-bold italic'>Mission</h5>
        </div>
        <div className='text-center text-[26px] text-white '>
          <h3>
            Build the best product, cause no unnecessary harm, use business to inspire <br />
            and implement solutions to the environmental crisis.
          </h3>
        </div>
        <div className='text-[20px] text-[#6e6e6e] '>
          <h3>
            To create a better everyday life for the many people
          </h3>
        </div>
      </div>
      <div className='h-[50%] flex items-center justify-center gap-[30px] '>

        <div className='h-[95%] flex items-center text-center text-white justify-center w-[17%] rounded-[20px] bg-cover bg-[url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h4-1-1.jpg")] bg-no-repeat bg-black/15 bg-blend-overlay'>
          <div className='h-[97%] w-[95%] flex flex-col items-center justify-end rounded-[20px]  gap-[50px]  hover:border-4 border-[#ffffff]/20'>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex gap-[5px]'>
                <h3 className='font-bold text-[22px] '>Very</h3>
                <h3 className='font-bold italic text-[22px] '>Useful Elements</h3>
              </div>
              <h3 className='font-bold text-[22px]'>For Perfect Flow</h3>
            </div>
            <button className='h-[50px] w-[180px] bg-[#4d61ff] rounded-[50px] mb-[40px] flex items-center justify-center'>
              <img className='h-[30px] w-[30px] ' src={rightarrow} alt="" />
              <h3>more details</h3>
            </button>
          </div>
        </div>

        <div className='h-[95%] flex items-center text-center text-white justify-center w-[17%] rounded-[20px] bg-cover bg-[url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h2-1.jpg")] bg-no-repeat bg-black/15 bg-blend-overlay'>
          <div className='h-[97%] w-[95%] flex flex-col items-center justify-end rounded-[20px]  gap-[50px]  hover:border-4 border-[#ffffff]/20'>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex gap-[5px]'>
                <h3 className='font-bold text-[22px] '>Very</h3>
                <h3 className='font-bold italic text-[22px] '>Useful Elements</h3>
              </div>
              <h3 className='font-bold text-[22px]'>For Perfect Flow</h3>
            </div>
            <button className='h-[50px] w-[180px] bg-[#4d61ff] rounded-[50px] mb-[40px] flex items-center justify-center'>
              <img className='h-[30px] w-[30px] ' src={rightarrow} alt="" />
              <h3>more details</h3>
            </button>
          </div>
        </div>

        <div className='h-[95%] flex items-center text-center text-white justify-center w-[17%] rounded-[20px] bg-cover bg-[url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h3-1-1.jpg")] bg-no-repeat bg-black/15 bg-blend-overlay'>
          <div className='h-[97%] w-[95%] flex flex-col items-center justify-end rounded-[20px]  gap-[50px]  hover:border-4 border-[#ffffff]/20'>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex gap-[5px]'>
                <h3 className='font-bold text-[22px] '>Very</h3>
                <h3 className='font-bold italic text-[22px] '>Useful Elements</h3>
              </div>
              <h3 className='font-bold text-[22px]'>For Perfect Flow</h3>
            </div>
            <button className='h-[50px] w-[180px] bg-[#4d61ff] rounded-[50px] mb-[40px] flex items-center justify-center'>
              <img className='h-[30px] w-[30px] ' src={rightarrow} alt="" />
              <h3>more details</h3>
            </button>
          </div>
        </div>

        <div className='h-[95%] flex items-center text-center text-white justify-center w-[17%] rounded-[20px] bg-cover bg-[url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h1-1.jpg")] bg-no-repeat bg-black/15 bg-blend-overlay'>
          <div className='h-[95%] w-[90%] flex flex-col items-center justify-end rounded-[20px]  gap-[40px]  hover:border-4 border-[#ffffff]/20'>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex gap-[5px]'>
                <h3 className='font-bold text-[22px] '>Very</h3>
                <h3 className='font-bold italic text-[22px] '>Useful Elements</h3>
              </div>
              <h3 className='font-bold text-[22px]'>For Perfect Flow</h3>
            </div>
            <button className='h-[50px] w-[180px] bg-[#4d61ff] rounded-[50px] mb-[40px] flex items-center justify-center'>
              <img className='h-[30px] w-[30px] ' src={rightarrow} alt="" />
              <h3>more details</h3>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Second


